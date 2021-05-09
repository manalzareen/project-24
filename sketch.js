
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
 
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new Ground (width/2,height-35,width,10);
   box1= new Box(width/1.2,height-49,200,16);
   box2=new Box(1105,313,16,95);
   box3= new Box(905,313,16,95);
  paper1=new Paper(100,360,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}


