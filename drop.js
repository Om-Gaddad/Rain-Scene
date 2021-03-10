class Drop{
    constructor(x,y,r){
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.ellipse(x, y, 1, options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMODE(CENTER);
        ellipse(this.body.position.x,this.body.position.y);
        pop();
    }
}