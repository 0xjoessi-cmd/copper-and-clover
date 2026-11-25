# Copper & Clover: The Supper Shift

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/0xjoessi-cmd/copper-and-clover/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/0xjoessi-cmd/copper-and-clover/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

Built for make.fun's [Make the best cooking game bounty](https://make.fun/bounty/best-cooking-game-20261125-0137).

An original, offline desktop-browser cooking game made for make.fun’s “Make the best cooking game” bounty. The game is plain HTML, CSS, and ES modules; its kitchen, ingredients, recipe cards, and dishes are drawn with canvas code, and the tiny sound cues are synthesized with Web Audio.

## Play

Run `node serve.ts` and open [http://localhost:8080](http://localhost:8080). Click **Start Your Shift**. For each ticket, click the named ingredient in the market basket, then click its matching station (chopping board, pan, pot, toaster, or egg bowl). Complete all three steps in order and click the plate to serve. Earn speed bonuses and combo tips; mistakes cost ticket time. Survive the growing queue for the highest score. Press H for a quick reminder.

The screenshot states are available as `?shot=start|play|end&seed=1`. A shift can also be started with Enter or Space.

## Files

- `game/js/main.js` — shift state and progression
- `game/js/render.js` — canvas art and interface
- `game/js/recipes.js` — ingredient, station, and recipe data
- `game/js/orders.js` — seeded order selection
- `game/js/input.js` — mouse and keyboard input
- `game/js/audio.js` — procedural sound cues

## Package

`MAKEFUN_OUTPUT_DIR=out node main.ts` copies the game and screenshots and writes `dossier.json` using the provided make.fun helper. The three JPEG browser screenshots are in `screenshots/`.
