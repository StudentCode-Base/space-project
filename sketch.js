
var space,spaceImg
var spaceship,spaceshipImg
var starsImg,asteroidsImg 
var score=0;
var gameState="play";


function preload(){
spaceImg=loadImage("space.png")
  asteroidsImg=loadImage("asteroids.png")
  starsImg=loadImage("Star.png")
  spaceshipImg=loadImage("spaceship.png")

}

function setup() {
 createCanvas(400,400);


 space=createSprite(400,200)
space.addImage(spaceImg)
  space.scale=2
  
 
 spaceship=createSprite(100,300);
spaceship.addImage(spaceshipImg)
  spaceship.scale=0.2
  

  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  
  edges=createEdgeSprites();

  starG = new Group();
  asteroidG= new Group();
  edges=createEdgeSprites();
}

function draw() {
 background("black");

  
  if(gameState==="play") {
 spaceship.x=mouseX 
    spaceship.collide(edges)
    spawnStars()
    spawnAsteroids();
    if(spaceship.isTouching(starG)){
      starG.destroyEach()
      score=score+10
    }
    if(spaceship.isTouching(asteroidG)){
      gameState="end"
    }
  drawSprites();
  fill("orange")
  text("𝕊ℂ𝕆ℝ𝔼:"+score,170,10);
  }
  
  if(gameState==="end")
    {textSize(24)
text("gameOver",200,200)
      
    }
  
}

function spawnStars()
{
  if(frameCount%80===0){
    var star=createSprite(Math.round(random(50,350),40,10,10))
    star.addImage(starsImg)
    star.scale=0.2
    star.velocityY=4
    starG.add(star)
  }

}


function spawnAsteroids()
{
  if(frameCount%80===0){
     var asteroid=createSprite(Math.round(random(50,350),40,10,10))
    asteroid.addImage(asteroidsImg)
    asteroid.scale=0.2
    asteroid.velocityY=4
    asteroidG.add(asteroid)
  }
  


}

