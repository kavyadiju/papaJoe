const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var bg_image,sadImg;
var gameOverSound,jumpSound,cheeseSound,dieSound;
var bg_sound,win_Sound;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var wall9, wall10, wall11, wall12, wall13;

var mouse,cheese,papaJ;
var cheeseCount=0;

var gameState="rules";

function preload(){
bg_image = loadImage("housee.png");
won_img=loadImage("WINNER.png");
sadImg=loadImage("sadMouse.png");

gameOverSound=loadSound("gameover.mp3");
jumpSound=loadSound("fireball.wav");
cheeseSound=loadSound("jump.wav");
dieSound=loadSound("marioDies.wav");
bg_sound=loadSound("themeSong.mp3");
win_Sound=loadSound("win.wav");
}

function setup() {
  createCanvas(1000,600);
  bg_sound.loop();
  bg_sound.setVolume(0.1);

  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  wall1 = new Ground(85, 450,170,15);
  wall2 = new Ground(162, 370,15,150);
  wall3 = new Ground(175, 200,180,15);
  wall4 = new Ground(175, 132,15,120);

  wall5 = new Ground(350, 280,150,15);
  wall6 = new Ground(400, 450,250,15);
  wall7 = new Ground(275, 522,15,160);
  wall8 = new Ground(500, 250,15,215);
  wall9 = new Ground(558, 250,100,15);
  wall10 = new Ground(640, 450,15,150);

  wall11= new Ground(875, 150,250,15);
  wall12 = new Ground(780, 492,15,215);
  wall13= new Ground(850,500,150,15);
 
  wall14= new Ground(500,8,1000,15);
  wall15= new Ground(500,592,1000,15);
  wall16= new Ground(8,300,15,600);
  wall17= new Ground(992,300,15,600);
 
  mouse= new Mouse(850,550,40,30);
  cheese=new Cheese(800,250,40,30);
  papaJ=new PAPAJOE(250,150,50,60);
  }


function draw() {
  //set the background
  background(bg_image); 
  
  if(gameState==="rules")
  {
    background("purple"); 
    textSize(25)
    text("story:  The mouse is in a human house,  ",80,150)
    text("and has to navigate its way around and find some food. ",100,175)
    text(" But there are humans living in the house, ",100,200)
    text("and will stop at nothing to get rid of the mouse.",100,225);
    text("rules: Use Arrow Keys To Navigate And Stay Away From Papa Joe!! ",100, 270);
    text("Collect the cheese 5 times to win!!",100, 300);

    if(keyIsDown("32"))
    {
      background(bg_image); 
      gameState="play";
    }
  }

  //update the engine
  Engine.update(engine);
  if(gameState=="play")
   {
      wall1.display();
      wall2.display();
      wall3.display();
      wall4.display();
      wall5.display();
      wall6.display();
      wall7.display();
      wall8.display();
      wall9.display();
      wall10.display();
      wall11.display();
      wall12.display();
      wall13.display();
      wall14.display();
      wall15.display();
      wall16.display();
      wall17.display();

      mouse.display();
      cheese.display();
      papaJ.display();
      papaJ.move();

      
      
      if(frameCount%100==0)
      {
        cheese.move();
      }
      
      if(Matter.SAT.collides(mouse.body,cheese.body).collided)
      {
        cheese.move();
        cheeseCount+=1;
        cheeseSound.play();
        console.log(cheeseCount)
      }
      if(Matter.SAT.collides(mouse.body,papaJ.body).collided)
      {
        gameState="end";
        dieSound.play();
        if(!dieSound.isPlaying())
        gameOverSound.play();
      }
      if(cheeseCount==5)
      {
        win_Sound.play();
        gameState="win";
      }
      }
      if(gameState=="win")
      {
        background("pink");
        textSize(30);
        text("You Won!!",300,300);
        push();
        imageMode(CENTER);
        image(won_img,500,300,100,150);
        pop();

      }
      if(gameState=="end")
      {
        background("yellow");
        textSize(30);
        text("OOPS!! GAME OVER!!",300,200);
        push();
        imageMode(CENTER);
        image(sadImg,500,300,250,280);
        pop();

      }
}

function keyPressed(){
 if(keyCode === 39 && gameState=="play"){
  if(!jumpSound.isPlaying())
  jumpSound.play();
 mouse.flingRight();
 }
 if(keyCode === 38 && gameState=="play" ){
  if(!jumpSound.isPlaying())
  jumpSound.play();
  mouse.flingForward();
 
 }
 if(keyCode === 37 && gameState=="play" ){
  if(!jumpSound.isPlaying())
  jumpSound.play();
  mouse.flingLeft();
 }
 if(keyCode === 36 && gameState=="play"){
  if(!jumpSound.isPlaying())
  jumpSound.play();
  mouse.flingBack();
 }
}
