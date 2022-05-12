
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bola;
var ground;
var bolas = [];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };

  ground=Bodies.rectangle(100,300,400,20,option);
  World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function mousePressed(){
  bola = new Bola(mouseX, mouseY, 10);
  bolas.push(bola);
}

function draw() 
{
  background("cyan");
  fill("green")
  rect(ground.position.x,ground.position.y,400,20);
  Engine.update(engine);

  for(var i = 0; i < bolas.length; i++){
    bolas[i].show()
  }
}



