var bg;
var snowImg;
var snow;

function preload(){
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}


function setup() {
  createCanvas(930,600);
 
}

function draw() {
  background(bg);  
  
  if(frameCount % 10 === 0){
  snow = createSprite(random(0,800),10,50,50);
  snow.addImage(snowImg);
  snow.scale = 0.14;
  snow.velocityY=3;
  }

  drawSprites();
}