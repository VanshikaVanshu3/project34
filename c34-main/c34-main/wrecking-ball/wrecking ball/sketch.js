const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground,rope,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;

function preload(){
  ballImg=loadImage("superhero.png");
  bg=loadImage("bg.jpg");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground =new Ground(600,600,2000,30);
 ball =new Ball(200,200,80,80);
 //rope =new Rope(ball.body,{x:200,y:50});
b1 =new Box(400,100,100,70);
b2 =new Box(400,100,100,70);
b3 =new Box(400,100,100,70);
b4 =new Box(400,100,100,70);
b5 =new Box(400,100,100,70);
b6 =new Box(600,100,100,70);
b7 =new Box(600,100,100,70);
b8 =new Box(600,100,100,70);
b9 =new Box(600,100,100,70);
b10 =new Box(600,100,100,70);
}

function draw() {
  background(bg);
  Engine.update(engine);
 ground.display();
fill("green");
ball.display();
//rope.display();
fill("yellow");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}




