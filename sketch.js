
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 700);

    	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	paper = new Paper(100,650,25);
	dustbin1 = new Dustbin(700,660,150,20);
	dustbin2 = new Dustbin(625,605,20,130);
	dustbin3 = new Dustbin(775,605,20,130);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();



  
  drawSprites();
 
}

function keyPressed() {

if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-25});

}





}



