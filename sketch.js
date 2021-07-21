var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage;
var ob1,ob2,ob3,ob4,ob5,ob6;


var score;
var obstacles;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  ob1 = loadImage ("obstacle1.png");
 ob2 = loadImage("obstacle2.png");
 ob3 = loadImage("obstacle3.png");
 ob4 = loadImage("obstacle4.png");
 ob5 = loadImage("obstacle5.png");
 ob6 = loadImage("obstacle6.png");
 



}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnobstacles()
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount%60===0){

 
 cloud=createSprite(600,100,40,10);
 cloud.addImage(cloudImage);
 cloud.scale=0.5;
 cloud.velocityX=-3;
 cloud.y=Math.round(random(10,100))
 cloud.lifetime=200;
}
}

function spawnobstacles(){
  // write your code here 
  if(frameCount%60===0){
 
  
  obstacles=createSprite(600,180,40,100);
  
  obstacles.scale=0.5;
  obstacles.velocityX=-3;
  var r =Math.round(random (1,6)) 
  switch(r){
case 1 :obstacles.addImage(ob1)
break;
case 2 :obstacles.addImage(ob2)
break;
case 3 :obstacles.addImage(ob3)
break;
case 4 :obstacles.addImage(ob4)
break; 
case 5 :obstacles.addImage(ob5)
break;
case 6 :obstacles.addImage(ob6)
break;



  }
obstacles.lifetime= 200
 }
}
