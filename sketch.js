const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ground2 = Bodies.rectangle(200,30,200,20,ground_options);
    World.add(world,ground2);

    console.log(ground);
    console.log(ground.type);

    ground1 = Bodies.rectangle(200,360,200,20);
    World.add(world,ground1);


    var ball_options ={
        restitution:3.0
    }

    ball = Bodies.circle(200,100,20,ball_options);

    World.add(world,ball);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);
    rect(ground2.position.x,ground2.position.y,400,20);
    fill("green");
    rect(ground1.position.x,ground1.position.y,200,20);
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    
}