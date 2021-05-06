const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

var ground_options={
  isStatic:true
}

  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options={
  restitution:1.5
  }
  
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    var ball1_options={
      restitution:3
      }
      
        ball1=Bodies.circle(200,100,20,ball1_options);
        World.add(world,ball1);

        var ball2_options={
          restitution:3
          }
          
            ball2=Bodies.rectangle(100,100,200,20,ball2_options);
            World.add(world,ball2);

            var ball3_options={
              restitution:2
              }
              
                ball3=Bodies.circle(300,100,20,ball3_options);
                World.add(world,ball3);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,20,20);
  drawSprites();

  ellipseMode(RADIUS);
  ellipse (ball1.position.x,ball1.position.y,20,20);
  drawSprites();

  rectMode(RADIUS);
  rect (ball2.position.x,ball2.position.y,20,20);
  drawSprites();

  ellipseMode(RADIUS);
  ellipse (ball3.position.x,ball3.position.y,20,20);
  drawSprites();
}