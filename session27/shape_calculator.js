// Shape Calculator for Architects
// Scenario: Create a flexible shape calculator

// Create a Shape class
class Shape {
  getArea() {
    return 0;
  }
}

// Extend Shape into Circle class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Extend Shape into Rectangle class
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Create instances and test
const circle = new Circle(5);
console.log(circle.getArea()); // 78.53981633974483

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea()); // 24