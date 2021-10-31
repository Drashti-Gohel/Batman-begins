 const Engine = Matter.Engine;
 const World = Matter.World;
 const Body = Matter.Body;
 const Bodies = Matter.Bodies;

  var engine,world;
  var thunder1,thunder2,thunder3,thunder4;
  var maxdrops=100;
  var boy,fall;
  var drops = [];

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    
}

function setup(){
   createCanvas(600,500);
   
   engine = Engine.create();
   world = engine.world;

  
    boy = new Umbrella();
    
    for(var i = 0; i < maxdrops; i++){

        drops.push(new Drops(random(0,600),random(0,400),5));
    }
    
    
    Engine.run(engine);
}

function draw(){
    background(0);
    
    boy.display();

    for (var j = 0; j < drops.length; j++) {
     
        drops[j].display();
        drops[j].update();
    }
    
    if(frameCount % 70 === 0){
        var thunder = createSprite(random(150,350),100,50,50);
        var rand = Math.round(random(1,4));
        thunder.scale = 0.4;
        
        switch(rand){
            case  1:
            thunder.addImage("t1",thunder1);
            break;
            case  2:
            thunder.addImage("t2",thunder2);
            break;
            case  3:
            thunder.addImage("t3",thunder3);
            break;
            case  4:
            thunder.addImage("t4",thunder4);
            break;
        }
    
    thunder.lifetime = 15;
    
    }
    
    drawSprites();
}   

