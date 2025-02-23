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
window.Rectangle = Rectangle;
window.Square = Square;
// Example usage
it("calculates area and perimeter correctly", () => {
  cy.visit('http://localhost:3000'); // Update the URL as per your setup

  cy.window().then((win) => {
    const Rectangle = win.Rectangle;  // Access the Rectangle class
    const Square = win.Square;        // Access the Square class

    const rectangle = new Rectangle(5, 10);
    const square = new Square(7);

    expect(rectangle.width).to.equal(5);
    expect(rectangle.height).to.equal(10);
    expect(rectangle.getArea()).to.equal(50);

    expect(square.width).to.equal(7);
    expect(square.height).to.equal(7);
    expect(square.getArea()).to.equal(49);
    expect(square.getPerimeter()).to.equal(28);
  });
});
