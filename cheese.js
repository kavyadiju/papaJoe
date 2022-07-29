class Cheese{
    constructor(x, y, width, height){
        var box_options = {
            restitution: 0,
            density: 1,
            friction: 0.7,
            isStatic: true,
        }

        this.body = Bodies.rectangle(x, y, width,height, box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("STINKY STUFF.png");
        World.add(world, this.body);
    }
    move(){
       var ranx=random(50,950)
       var rany=random(50,550)
       Matter.Body.setPosition(this.body,{x:ranx,y:rany})
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width * 2, this.height * 2);  
        pop();
    }
}
