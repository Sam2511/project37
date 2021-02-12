var canvas;
var gameState = 0;
var conCount;
var db;
var quiz; 
var question;
var contestant;

function setup(){
  canvas = createCanvas(850,400);
  db = firebase.database();
  quiz = new Quiz;
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("pink");

  
}
