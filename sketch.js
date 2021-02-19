var database;
var gameState = 0;
var playerCount;

var game, player, form;





function setup(){
    createCanvas(500,500);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();


}

function draw(){
    background("white");
    
}

