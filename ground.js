class Ground{
    constructor(x, y, width, height){
        var ground_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.width = width;
        this.height = height;
        //this.image=
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("#ae6e4e")
        rect( pos.x, pos.y, this.width, this.height);
    }
}
