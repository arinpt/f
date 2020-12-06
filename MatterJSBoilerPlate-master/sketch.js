
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height, 800, 20)
	paper1 = new Paper(100, 100);
	box1 = new Ground(400, 670, 20, 80);
	box2 = new Ground(700, 670, 20, 80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
fill("yellow")
 ground.display();
 paper1.display();
 fill("blue");
 box1.display();
 box2.display();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:190,y:190});
	}
}
