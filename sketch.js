var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  monkey=createSprite(50,260,10,10);
     monkey.addAnimation("monkeymove",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(0,280,600,10);
  ground.x = ground.width /2;
  
  invisibleGround = createSprite(200,290,400,10);
  invisibleGround.visible = false;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;  

}


function draw() {
  background("white");
  
  
  stroke(20);
  score=Math.ceil(frameCount/frameRate())
  text("Survival time: "+ score, 100,10);
  
  if(keyDown("space")&&monkey.y >= 254) {
    monkey.velocityY = -20;
  }
console.log(monkey.y);
  
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  ground.velocityX = -(4 + 3* score/100)
  
  
   
   monkey.collide(invisibleGround);
  
   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
   }
  
  
    
  spawnBananas();
  spawnobstacles(); 
  drawSprites();
}

function spawnBananas(){
   if (frameCount % 80 === 0){
    banana= createSprite(600,Math.round(random(120,200)),10,40);
    banana.velocityX = -(6 + score/100);    
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime=95;
     
     FoodGroup.add(banana);     
   }}
  
  
function spawnobstacles(){
   if (frameCount % 300 === 0){
   obstacles= createSprite(600,256,10,40);
   obstacles.velocityX = -(6 + score/100);    
   obstacles.addImage(obstacleImage);
   obstacles.scale = 0.1;
   obstacles.lifetime=100;

      obstacleGroup.add(obstacles);
     
     
     }}











