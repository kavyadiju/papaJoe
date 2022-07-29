class PAPAJOE{
    constructor(x, y, width, height){
        var box_options = {

            restitution: 0,
            density: 1,
            friction: 0.7,
        }

        this.body = Bodies.rectangle(x, y, width,height, box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pj.png");
        World.add(world, this.body);
    }
    move()
    {
        var ranVelX= random(-12,12);
        var ranVelY=random(-12,12);
        if(frameCount%50==0)
        {
            Matter.Body.setVelocity(this.body,{x:0,y:ranVelY});
        }
        if(frameCount%80==0)
        {
            Matter.Body.setVelocity(this.body,{x:ranVelX,y:0});
        }
        if(frameCount%100==0)
        {
            Matter.Body.setVelocity(this.body,{x:ranVelX,y:ranVelY});
        }
    }
    display(){
        Matter.Body.setAngle(this.body,0)
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,5, this.width, this.height+10);  
        pop();
    }
}