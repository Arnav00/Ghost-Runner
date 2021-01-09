var tower,towerI;
var ghost,ghostI;
var door,doorI;
var climber,climberI;
var climberGroup,doorGroup;


function preload(){
towerI = loadImage("tower.png");
ghostI = loadImage("ghost-standing.png");  
doorI = loadImage("door.png");
climberI = loadImage("climber.png");
}

function setup(){
 createCanvas(600,600);
  
 tower = createSprite(300,300);
 tower.addImage("towerI",towerI);
  
 ghost = createSprite(300,300);
 ghost.addImage("ghostI",ghostI);
 ghost.scale = 0.3;
  
  climberGroup = new Group();
  doorGroup = new Group();
}

function draw(){
 
 if (keyDown("right_arrow")){
   ghost.x = ghost.x + 5;
 } 
 if(keyDown("left_arrow")){
   ghost.x = ghost.x - 5;
 } 
  if(keyDown("space")){
  ghost.velocityY = -5;  
  }
  
  ghost.velocityY = ghost.velocityY + 0.8;    
 drawSprites(); 
  
  spawnDoors();
}

function spawnDoors(){
var num = Math.round(random(120,400))
 if(frameCount%60 === 0){
 door = createSprite(num,10,10,10); 
 door.addImage("doorI",doorI);
 door.velocityY = 3;
 door.lifetime = 200;
 doorGroup.add(door);
 door.depth = ghost.depth;
 ghost.depth = ghost.depth + 1;                                
    
 climber = createSprite(num,65,10,10);
 climber.addImage("climberI",climberI);
 climber.velocityY = 3;
 climber.lifetime = 200;
 climberGroup.add(climber);
 }
  
  
}


