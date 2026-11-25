export const INGREDIENTS={tomato:{label:'Tomato',color:'#dc6250',shape:'round'},basil:{label:'Basil',color:'#70a96a',shape:'leaf'},onion:{label:'Onion',color:'#c77ba2',shape:'round'},mushroom:{label:'Mushroom',color:'#e7d5b4',shape:'cap'},pasta:{label:'Pasta',color:'#e9be68',shape:'nest'},egg:{label:'Egg',color:'#f7edce',shape:'oval'},cheese:{label:'Cheese',color:'#f1bd4d',shape:'wedge'},bread:{label:'Bread',color:'#c8884b',shape:'loaf'},lemon:{label:'Lemon',color:'#e8d75d',shape:'oval'},fish:{label:'Sea bass',color:'#8ab3b2',shape:'fish'},potato:{label:'Potato',color:'#b99367',shape:'round'},chicken:{label:'Chicken',color:'#dcaa72',shape:'drum'}};
export const RECIPES=[
{id:'pasta',name:'Garden Pomodoro',icon:'🍅',steps:[['tomato','chop'],['basil','chop'],['pasta','boil']],time:72,value:120,accent:'#e57655'},
{id:'soup',name:'Velvet Mushroom Soup',icon:'🍄',steps:[['mushroom','chop'],['onion','chop'],['mushroom','cook']],time:84,value:145,accent:'#d8bd91'},
{id:'omelet',name:'Clover Omelet',icon:'🥚',steps:[['egg','crack'],['cheese','chop'],['basil','cook']],time:68,value:115,accent:'#dfbc58'},
{id:'toast',name:'Golden Forest Toast',icon:'🍞',steps:[['mushroom','chop'],['cheese','chop'],['bread','toast']],time:80,value:135,accent:'#c88d53'},
{id:'fish',name:'Lemon Skillet Bass',icon:'🐟',steps:[['lemon','chop'],['fish','cook'],['basil','chop']],time:76,value:155,accent:'#7ab0a3'},
{id:'hash',name:'Sunrise Potato Hash',icon:'🥔',steps:[['potato','chop'],['onion','chop'],['egg','cook']],time:72,value:130,accent:'#d89b58'},
{id:'chicken',name:'Sunday Herb Chicken',icon:'🍗',steps:[['chicken','cook'],['lemon','chop'],['basil','chop']],time:90,value:170,accent:'#cf9862'}
];
export const STATIONS={chop:'Chopping board',cook:'Copper pan',boil:'Stock pot',toast:'Toaster',crack:'Egg bowl'};
