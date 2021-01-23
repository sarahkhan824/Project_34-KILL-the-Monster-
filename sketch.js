const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var superhero, block1 , rope , ground



function preload() {
//preload the images here
backgroundImage = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(800, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;
 superhero = new SuperHero(100,100,100,100);
  ground = new Ground(100,500,1000,10);
  rope = new Rope(superhero.body, {x:100 , y:10});
  
  monster = new Monster(500,300,100,100);

  box1 = new Box(500,100,50,80);
  box2 = new Box(500,200,50,80);
  box3 = new Box(500,300,50,80);
  box4= new Box(500,400,50,80);
  box5 = new Box(500,0,50,80);
  
  box6 = new Box(400,100,50,50);
  box7 = new Box(400,200,50,50);
  box8 = new Box(400,300,50,50);
  box9 = new Box(400,400,50,70);
  box10 = new Box(400,0,50,100);
  box11 = new Box(400,50,50,50);

}

function draw() {
  background(backgroundImage);
  ground.display();
  superhero.display();
  monster.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  Engine.update(engine); 
  
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{ x:mouseX , y: mouseY})
}

