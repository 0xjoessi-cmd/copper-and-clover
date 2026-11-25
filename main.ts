// Package Copper & Clover: a self-contained, offline kitchen game with a dinner-rush
// loop, recipe stations, and hand-drawn canvas art. Before handing it to make.fun,
// check that the playable entry point, its local assets, and its three cover/gameplay
// screenshots are present. Then copy game/ and screenshots/ beside this file to the
// requested output directory and write the judge dossier with the vendored library.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const game = join(here, 'game');
const screenshots = join(here, 'screenshots');
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`Copper & Clover pre-flight failed: ${message}`);
  process.exit(1);
}

if (!existsSync(join(game, 'index.html'))) fail('game/index.html is missing.');

const gameFiles: string[] = [];
function collectFiles(dir: string): void {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(fullPath);
    else if (entry.isFile()) gameFiles.push(fullPath);
  }
}
collectFiles(game);

const localReferences: Array<{ file: string; ref: string }> = [];
for (const file of gameFiles) {
  const contents = readFileSync(file, 'utf8');
  const relativeFile = file.slice(game.length + 1);
  if (/https?:\/\//i.test(contents)) fail(`${relativeFile} contains an http:// or https:// URL; the game must run offline.`);

  // Browser entry points, module imports/exports, and CSS asset references.
  const patterns = [
    /<(?:script|link)\b[^>]*?\b(?:src|href)\s*=\s*["']([^"']+)["']/gi,
    /\b(?:import|export)\s+(?:[^'";]*?\s+from\s*)["']([^"']+)["']/g,
    /\bimport\s*["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    /url\(\s*["']?([^"')]+)["']?\s*\)/gi,
  ];
  for (const pattern of patterns) {
    for (const match of contents.matchAll(pattern)) {
      const ref = match[1].trim();
      if (!ref || ref.startsWith('#') || /^[a-z][a-z\d+.-]*:/i.test(ref) || ref.startsWith('//')) continue;
      localReferences.push({ file: relativeFile, ref });
    }
  }
}

for (const { file, ref } of localReferences) {
  const pathname = decodeURIComponent(ref.split(/[?#]/, 1)[0]);
  const target = resolve(game, dirname(join(game, file)), pathname);
  if (target !== game && !target.startsWith(game + sep)) fail(`${file} references ${ref}, which resolves outside game/.`);
  if (!existsSync(target)) fail(`${file} references missing local file ${ref}.`);
}

if (!existsSync(screenshots) || !statSync(screenshots).isDirectory()) fail('screenshots/ is missing.');
const screenshotFiles = readdirSync(screenshots).filter((name) =>
  ['.png', '.jpg', '.jpeg'].includes(extname(name).toLowerCase()) && statSync(join(screenshots, name)).isFile(),
);
if (screenshotFiles.length < 3 || screenshotFiles.length > 4) {
  fail(`expected 3 or 4 PNG/JPEG screenshots in screenshots/, found ${screenshotFiles.length}.`);
}

mkdirSync(out, { recursive: true });
cpSync(game, join(out, 'game'), { recursive: true });
cpSync(screenshots, join(out, 'screenshots'), { recursive: true });

// Match the scorer's published caps so malformed packages fail before submission.
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
