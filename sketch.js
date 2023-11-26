const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048],
  animate: true,
};

const sketch = () => {
  let circles = [];
  for (let i = 0; i < 100; i++) {
    // Generate smaller circles with a radius between 5 and 20
    circles.push(new Circle(Math.random() * 2048, Math.random() * 2048, Math.random() * 15 + 5));
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.lineWidth = 8; // Reduce the line width for smaller circles

    circles.forEach(circle => {
      circle.draw(context);
      circle.move();
    });
  };
};

canvasSketch(sketch, settings);


class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = Math.random() * 4 - 2;
    this.velocityY = Math.random() * 4 - 2;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
  }
  move() {
    this.x += this.velocityX
    this.y += this.velocityY
  }
}

