function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,10,10)
}

function draw() {
  background(220);
  if(keyDown("RIGHT_ARROW")){
    ball.velocityX = 4
  }
  if(keyDown("LEFT_ARROW")){
    ball.velocityX = -4
  }

  if(keyDown("UP_ARROW")){
    ball.velocityY = -2
  }

  if(keyDown("DOWN_ARROW")){
    ball.velocityY = 4
  }

  drawSprites();
}