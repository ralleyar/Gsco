var car, wall
var speed, weight

function setup() {
  createCanvas(1600, 400);
  car = createSprite(400, 200, 50, 50);
  wall = createSprite(1500, 200, 60, 200);
  speed = random(55,90)
  weight = random(400,1500)


}

function draw() {
  background(255, 255, 255);
  car.velocityX = speed
  if (car.isTouching(wall)){
  car.velocityX = 0;
  }
  

  var defamation = (0.5*weight*speed*speed)/22500;
  console.log(defamation)

  if(defamation<100){
    car.shapeColor = color (0,255,0)
  }else if(defamation>100 && defamation<180){
    car.shapeColor = color(230,230,0)
  } else if(defamation>180){
    car.shapeColor = color  (255,0,0)
  }
  drawSprites();
}