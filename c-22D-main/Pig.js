class Pig{
    constructor(x,y){
        var options={
            restitution:0.5,friction:0.3,density:1
        }
        this.body=Bodies.rectangle(x,y,60,60,options)
        this.width=60
        this.height=60
        World.add(world,this.body)
    }
    display(){
        var angle=this.body.angle
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(3)
        stroke("brown")
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
    }
}