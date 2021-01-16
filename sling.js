class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:150
            
        }
        
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}