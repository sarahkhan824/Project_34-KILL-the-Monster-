class Monster  {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 0, 
        frictionAir: 0.005
    };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Monster-01.png");
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,550,100, this.width, this.height);
      pop();
    }
  }