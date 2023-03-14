
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var bunny, carrot, bg_img;
var blink, eat, sad,rand;
var score=0
var carrotGroup

function preload(){
  bg_img = loadImage('background.jpg')
  carrotimg = loadImage('carrot.png')
  bunnyImg = loadImage('blink_1.png')

  blink = loadAnimation("blink_1.png", "blink_2.png", "blink_3.png");
  eat = loadAnimation("eat_0.png", "eat_1.png", "eat_2.png", "eat_3.png");
  sad = loadAnimation("sad_1.png", "sad_2.png", "sad_3.png");
  
  blink.playing = true;
    eat.playing = true;
    sad.playing = true;
    sad.looping = false;
    eat.looping = false;

    carrotGroup= new Group()

}

function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;
   
  bunny = createSprite(500,650,50,50);
  bunny.addImage(bunnyImg)
  bunny.scale = 0.35


}


function draw() 
{
  background(51);
    image(bg_img, 0, 0, width, height);
  Engine.update(engine);
  

spawnCarrots()

if(keyDown("RIGHT_ARROW")){
  bunny.x +=5
}
if(keyDown("LEFT_ARROW")){
  bunny.x -=5
}
 
if (bunny.isTouching(carrotGroup)){
  carrotGroup.destroyEach()
  score += 1
}

if(score >=5){
  fill("red")
  textSize(50)
  text("YOU WIN",400,300)
carrotGroup.destroyEach()
}
  drawSprites();
fill(0)
  textSize(20)

  text("SCORE : "+score,850,50)
}

function spawnCarrots(){
if(frameCount % 60 ==0){
  rand=Math.round(random(50,950))
  carrot =createSprite(rand,0)
  carrot.velocityY=4
  carrot.addImage(carrotimg)
  carrot.scale=0.2
  carrotGroup.add(carrot)
}


}