const Engine =  Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world,engine;
var ground
var ball
var box

function setup() {
  createCanvas(1400,400);
  engine = Engine.create()
  world = engine.world

  ground = new Ground(700,390,1400,20)
 

  box = new Box(1000,350,70,70)
  box2=new Box(1200,350,70,70)
  pig = new Pig(1100,350)
  log1 = new Log(1100,345,400,PI/2)

  box3=new Box(1000,340,70,70)
  box4=new Box(1200,340,70,70)
  pig1 = new Pig(1100,340)
  log2 = new Log(1100,310,400,PI/2)

  box5 = new Box(1100,280,70,70)
  log3 = new Log(1050,285,150,PI/7)
  log4 = new Log(1150,285,150,PI/-7)

  bird = new Bird(200,200)
 

}

function draw() {
  background(0);  
  Engine.update(engine)
  box.display()
  box2.display()
  ground.display()
  pig.display()
  log1.display()
  box3.display()
  box4.display()
  pig1.display()
  log2.display()
  box5.display()
  log3.display()
  log4.display()
  bird.display()
  

}