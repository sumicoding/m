var apple,bg,box,coin,ground,spike;
var appleImg,bgImg,boxImg,coinImg,groundImg,spikeImg;


function preload(){
appleImg = loadImage("apple.png")
bgImg = loadImage("bg.png")
boxImg = loadImage("box1.png")
coinImg = loadImage("coin.png")
groundImg = loadImage("ground.png")
spikeImg = loadImage("spike.png")
}


function setup() {
  createCanvas(1280,600);
   ground.createSprite(120,100,1280,40)
   ground.addImage(groundImg)
}



function draw() {
  background("lightGrey");  
  drawSprites();
}