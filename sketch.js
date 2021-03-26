
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PaperObj, GroundObj, DustbinObj;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	DustbinObj = new Dustbin(1200,650);
	PaperObj = new Paper(200,450,40);
	GroundObj = new Ground(width/2,670,width,20);
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  DustbinObj.display();
  PaperObj.display();
  GroundObj.display();
  console.log(PaperObj.x);

  
  
 
}



function keyPressed() {

if(keyCode == 72){
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85})

}
}

