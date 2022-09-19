var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieimg; 
var zombie2, zombie3, zombie4

var bullet, bulletI;

var explosion, explosionS, explosionE;

var loseS;

var rip

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  zombieimg = loadImage("assets/zombie.png");

  bgImg = loadImage("assets/bg.jpeg");

  bulletI = loadImage("assets/bullet.png");

  explosionS = loadSound("assets/explosion.mp3");
  explosionE = loadImage("assets/explosionE.png");

  loseS = loadSound("assets/lose.mp3");

  rip = loadImage("assets/ripI.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

   bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
   bg.addImage(bgImg)
   bg.scale = 1.2
  
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.48;
   player.debug = false;
   player.setCollider("rectangle",0,0,220,500);


   zombie = createSprite(displayWidth-800, displayHeight-100, 50, 50);
   zombie.addImage(zombieimg);
   zombie.scale = 0.2;
   zombie.debug = false;
   zombie.setCollider("rectangle",0,0,500,950);

   zombie2 = createSprite(displayWidth-780, displayHeight-360, 50, 50);
   zombie2.addImage(zombieimg);
   zombie2.scale = 0.2;
   zombie2.debug = false;
   zombie2.setCollider("rectangle",0,0,500,950);

   
   zombie3 = createSprite(displayWidth-670, displayHeight-200, 50, 50);
   zombie3.addImage(zombieimg);
   zombie3.scale = 0.2;
   zombie3.debug = false;
   zombie3.setCollider("rectangle",0,0,500,950);

   zombie4 = createSprite(displayWidth-670, displayHeight-450, 50, 50);
   zombie4.addImage(zombieimg);
   zombie4.scale = 0.2;
   zombie4.debug = false;
   zombie4.setCollider("rectangle",0,0,500,950);
}

function draw() {
  background(0); 

if(keyDown("RIGHT_ARROW") ||touches.length>0){
player.x = player.x+10  
}

if(keyDown("LEFT_ARROW")  ||touches.length>0){
player.x = player.x-10  
}
  
if(keyDown("UP_ARROW") ||touches.length>0){
  player.y = player.y-10
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+10
}

/*


if(bullet.isTouching(zombie)){

  colision();

}

if(bullet.isTouching(zombie2)){

  colision();

}

if(bullet.isTouching(zombie3)){

  colision();

}

if(bullet.isTouching(zombie4)){

  colision();

}


*/

if(keyWentDown("space")){
 
  player.addImage(shooter_shooting);
   
  shoot();


}


else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

function shoot(){

  bullet = createSprite(player.x + 100,  player.y - 40, 50, 50);
  bullet.addImage(bulletI); 
  bullet.scale = 0.05;
  bullet.velocityX = 8;
  
  
  explosionS.play();
  explosionS.setVolume(0.4)
  explosion = createSprite(player.x + 100,  player.y - 40, 50, 50);
  explosion.addImage(explosionE);
  explosion.scale = 0.09; 

  //Falta adicionar LIFETIME à explosionE 
}

function colision(){

  zombieimg = null;







}