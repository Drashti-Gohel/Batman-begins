class Drops{
    constructor(x,y,radius){
        this.body = Matter.Bodies.circle(x,y,radius,{friction:0.1});
        World.add(world,this.body);
        this.radius = 5;
    }

    display(){
        ellipse(this.body.position.x,this.body.position.y,this.radius,5);
        
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)});
        }
    }
}