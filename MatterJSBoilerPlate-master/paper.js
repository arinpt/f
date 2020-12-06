class Paper{
    constructor(x, y) {
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
           'density':1.2
           
        }
        
        this.body = Matter.Bodies.circle(x, y, 25, options);
        this.radius = 70;
        World.add(world, this.body);
        this.image = loadImage("sprites/paper.png")
    }
    display(){
        var pos =this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill('red');
        ellipse(0, 0, this.radius);
        pop();
      }
};