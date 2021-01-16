
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
	
	bob1 = new Bob(400,400,20);
	bob2 = new Bob(360,400,20);
	bob3 = new Bob(320,400,20);
	bob4 = new Bob(440,400,20);
	bob5 = new Bob(480,400,20);

	sling1 = new Sling(bob1.body,{x:400,y:100});
	sling2 = new Sling(bob2.body,{x:360,y:100});
	sling3 = new Sling(bob3.body,{x:320,y:100});
	sling4 = new Sling(bob4.body,{x:440,y:100});
	sling5 = new Sling(bob5.body,{x:480,y:100});

	Engine.run(engine);
  
}


function draw() {

  background("black");

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();
  
  
}

function keyPressed(){
    if(keyCode===38){
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x:-50,y:-50});
    }
}



