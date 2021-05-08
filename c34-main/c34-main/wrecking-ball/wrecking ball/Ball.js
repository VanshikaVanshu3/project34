class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image=loadImage("superhero.png");
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos=this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    image(this.image,0, 0, this.width+200, this.height+100);
    pop();
  }
}
