var bg,bgImg;

var player, shooterImg, shooter_shooting;

var zombie, zombieimg, zombieA, zombieD;
var zombie2, zombie3, zombie4

var bullet, bulletI, bulletGroup;

var explosion, explosionS, explosionE;

var loseS;

var winS;

var rip;

var zombieGroup;

var life, score;

var h1, h2, h3, hS1, hS2, hS3;

var gameState = "play";

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  zombieimg = loadImage("assets/zombie.png");
  zombieD = loadImage("assets/ripI.png");

  bgImg = loadImage("assets/bg.jpeg");

  bulletI = loadImage("assets/bullet.png");

  explosionS = loadSound("assets/explosion.mp3");
  explosionE = loadImage("assets/explosionE.png");

  loseS = loadSound("assets/lose.mp3");

  winS = loadSound("assets/win.mp3");

  rip = loadImage("assets/ripI.png");

  h1 = loadImage("assets/heart_1.png");
  h2 = loadImage("assets/heart_2.png");
  h3 = loadImage("assets/heart_3.png");

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

   zombie = createSprite(displayWidth-400, displayHeight-100, 50, 50);
   zombie.addImage(zombieimg);
   zombie.scale = 0.2;
   zombie.debug = false;
   zombie.setCollider("rectangle",0,0,500,950);
   zombie.velocityX = -0.5;

   zombie2 = createSprite(displayWidth-380, displayHeight-360, 50, 50);
   zombie2.addImage(zombieimg);
   zombie2.scale = 0.2;
   zombie2.debug = false;
   zombie2.setCollider("rectangle",0,0,500,950);
   zombie2.velocityX = -0.5;
   
   zombie3 = createSprite(displayWidth-500, displayHeight-200, 50, 50);
   zombie3.addImage(zombieimg);
   zombie3.scale = 0.2;
   zombie3.debug = false;
   zombie3.setCollider("rectangle",0,0,500,950);
   zombie3.velocityX = -0.5;

   zombie4 = createSprite(displayWidth-500, displayHeight-450, 50, 50);
   zombie4.addImage(zombieimg);
   zombie4.scale = 0.2;
   zombie4.debug = false;
   zombie4.setCollider("rectangle",0,0,500,950);
   zombie4.velocityX = -0.5;

   zombieGroup.add(zombie);
   zombieGroup.add(zombie2);
   zombieGroup.add(zombie3);
   zombieGroup.add(zombie4);

   hS1 = createSprite(displayWidth-150,40,20,20);
   hS1.visible = false
   hS1.addImage(h1);
   hS1.scale = 0.2;
  
   hS2 = createSprite(displayWidth-100,40,20,20);
   hS2.visible = false
   hS2.addImage(h2);
   hS2.scale = 0.2;

   hS3 = createSprite(displayWidth-150,40,20,20);
   hS3.visible = false
   hS3.addImage(h3);
   hS3.scale = 0.2;

  bulletGroup = new Group();
  zombieGroup = new Group();
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


if(keyWentDown("space")){

  player.addImage(shooter_shooting); 
  shoot();
 
}


else if(keyWentUp("space")){
  player.addImage(shooterImg);

      
  } 
    if(bullets==0){
    gameState = "bullet"
    lose.play();
}

if(zombieGroup.isTouching(bulletGroup)){ 
  for(var i=0;i<zombieGroup.length;i++){
  if(zombieGroup[i].isTouching(bulletGroup)){ 
  zombieGroup[i].destroy();
  bulletGroup.destroyEach();
  explosionSound.play();
  score = score+2 
  } 
} 
}
if(zombieGroup.isTouching(player)){ 
  lose.play();
  for(var i=0;i<zombieGroup.length;i++){ 
  if(zombieGroup[i].isTouching(player)){ 
  zombieGroup[i].destroy()
  life=life-1 
    } 
  }
  enemy();
 }





drawSprites();

textSize(20)
fill("white")
text("Balas = " + bullets,displayWidth-210,displayHeight/2-250)
text("Pontuação = " + score,displayWidth-200,displayHeight/2-220)
text("Vidas = " + life,displayWidth-200,displayHeight/2-280)

if(gameState == "lost"){
  
  textSize(100)
  fill("red")
  text("Você Perdeu ",400,400)
  zombieGroup.destroyEach();
  player.destroy();
}

else if(gameState == "won"){
 
  textSize(100)
  fill("yellow")
  text("Você Venceu",400,400)
  zombieGroup.destroyEach();
  player.destroy();

}

else if(gameState == "bullet"){
 
  textSize(50)
  fill("yellow")
  text("Você não tem mais balas!",470,410)
  zombieGroup.destroyEach();
  player.destroy();
  bulletGroup.destroyEach();

}
    function enemy(){
    if(frameCount%50===0){
    zombie = createSprite(random(500,1100),random(100,500),40,40);
    zombie.addImage(zombieImg);
    zombie.scale = 0.15;
    zombie.velocityX = -3;
    zombie.debug= true;
    zombie.setCollider("rectangle",0,0,400,400);
    zombie.lifetime = 400
    zombieGroup.add(zombie)
  }
}


function shoot(){

  bullet = createSprite(player.x + 100,  player.y - 40, 50, 50);
  bullet.addImage(bulletI); 
  bullet.scale = 0.05;
  bullet.velocityX = 15;
  bulletGroup.add(bullet);

  explosionS.play();
  explosionS.setVolume(0.2);
  explosion = createSprite(player.x + 110,  player.y - 40, 50, 50);
  explosion.addImage(explosionE);
  explosion.scale = 0.15; 
  explosion.velocityY = -5; 
  explosion.velocityX = -1.2;
}
