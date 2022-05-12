class Bola {
    constructor(x,y,r){
        var mexe ={restitution: 0.7};
        this.body = Bodies.circle(x,y,r, mexe);
        this.r = r;
        World.add(world, this.body);

    }
    show(){
        var pos = this.body.position;
        var cor1 = random(0,255);
        var cor2 = random(0,255);
        var cor3 = random(0,255);   
        fill(cor1, cor2, cor3);
        ellipse(pos.x, pos.y, this.r);
    }
}