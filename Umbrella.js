class Umbrella{
    constructor(x,y,radius){
        //this.body = Matter.Bodies.circle(x,y,radius);
        //World.add(world,this.body);
        //this.radius = 5;
        this.image = loadImage("Walking Frame/walking_4.png");
    }

    display(){
        //ellipse(this.body.position.x,this.body.position.y,this.radius,5);
        image(this.image,200,270,230,250);
    }
}