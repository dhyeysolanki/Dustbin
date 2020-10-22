var bin1, bin2, bin3;
var ground, paper,dusbin;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
 createCanvas(1600, 750);
	engine = Engine.create();
	world = engine.world;

  dustbin = new Dustbin(1400,500);
  //bin1 = createSprite(700, 635, 100, 10)
  //bin2 = createSprite(755, 590, 10, 100)
  //bin3 = createSprite(655, 590, 10, 100)	
	ground= new Ground(700, 650, 1600, 20);
  paper= new Paper(300, 150, 50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  paper.display();
  //bin2.display();
  //bin3.display();
  paper.display();
  dustbin.display();
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-85});
  
  }
}
