var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieimg; 
var zombie2, zombie3, zombie4


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieimg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//criando o sprite do jogador
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



if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
