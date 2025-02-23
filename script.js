class Rectangle {
  constructor(width, height) {
    this.width = width;   // Public property for width
    this.height = height; // Public property for height
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Calls the parent constructor with both width and height set to the side length
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width; // Since width == height for square
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // 5
console.log(rectangle.height); // 10
console.log(rectangle.getArea()); // 50

const square = new Square(7);
console.log(square.width); // 7
console.log(square.height); // 7
console.log(square.getArea()); // 49
console.log(square.getPerimeter()); // 28
