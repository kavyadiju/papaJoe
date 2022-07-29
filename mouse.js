class Mouse{
    constructor(x, y, width,height){
        var box_options = {
            restitution: 0,
            density: 1,
            friction: 1,
            frictionAir:0.08
        }

        this.body = Bodies.rectangle(x, y, width,height, box_options);
        this.width=width;
        this.height=height;
        this.image = loadImage("mousey.png");
        World.add(world, this.body);
    }

    display(){
        Matter.Body.setAngle(this.body,0)
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        //fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, this.width*2, this.height * 2);  
        pop();
    }

    flingForward(){
        Matter.Body.setVelocity(this.body, { x: 0, y: -10 });
        Matter.Body.setAngularVelocity(this.body, random(-0.1,0.1));
    }

    flingBack(){
        Matter.Body.setVelocity(this.body, { x: 0, y: 10 });
        Matter.Body.setAngularVelocity(this.body, random(-0.1,0.1));
    }

    flingLeft(){
        Matter.Body.setVelocity(this.body, { x: -10, y: 0 });
        Matter.Body.setAngularVelocity(this.body, random(-0.1,0.1));
    }

    flingRight(){
        Matter.Body.setVelocity(this.body, { x: 10, y: 0 });
        Matter.Body.setAngularVelocity(this.body, random(-0.1,0.1));
    }
}

