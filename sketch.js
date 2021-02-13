
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(400,400,40);
bobObject2 = new Bob(360,400,40);
bobObject3 = new Bob(440,400,40); 
bobObject4 = new Bob(320,400,40);
bobObject5 = new Bob(480,400,40);

roof = new Ground(400, 200,400,20);

rope1 = new Rope(bobObject1.body,roof.body,0,0);
rope2 = new Rope(bobObject2.body,roof.body,-40,0);
rope3 = new Rope(bobObject3.body,roof.body,40,0);
rope4 = new Rope(bobObject4.body, roof.body,-80,0);
rope5 = new Rope (bobObject5.body, roof.body, 80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
//console.log(bobObject1.position.x, bobObject.position.Y);
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject4.body, bobObject4.body.position, {x:-50, y:-45});
  }
}



