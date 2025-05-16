# NodeTCG
A browser Trading Card Game

Dependencies: (use npm install...) :
- express
- express-fileupload
- sharp
- express-handlebars

Instructions to run :
- from main directory, execute : "node app.js"
- Only localhost:3000/ should be accessed directly, the other links are used in the background by the website to move the cards around

Game :
- The switch in the bottom right can be used to alternate between 2 modes : 1) Look at Card 2) Move card
- In the top right menu, you can select a current player and this allows you to use ethe button to see your specific field
- The game is fully synced if you open two webpages at the same time, and if you close the tab the game is automatically saved thanks to the "commands.txt" file that records every move that was played.
