# Moola
[![Stories in Pending%20Issues](https://badge.waffle.io/vreddi/Moola.png?label=pending%20issue&title=Pending%20Issues)](https://waffle.io/vreddi/Moola)
[![Stories in In%20Progress](https://badge.waffle.io/vreddi/Moola.png?label=In%20Progress&title=In%20Progress)](https://waffle.io/vreddi/Moola)

A Web Based Application to Track Finances. 

## Develop
1) Have Typescript Ready!  
`npm install typescript -g`

2) Compile Typescript to generate JS: (Examples, choose anyone)  
`tsc --module amd`   
`tsc --module amd --listFiles --diagnostics --pretty`

3) Launch `index.html` in your favorite browser.

Optional: Use Typescript Tools for whatever IDE or editor you use.

Introducing a new TS file?   
As this project uses requireJS, the config for requireJS is included in `Script/main.js`. So when introducing a new TS file add the reference to the new file inside `requirejs.config` 

For contributions please target only `develop`.
