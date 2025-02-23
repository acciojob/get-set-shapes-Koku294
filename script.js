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
  // Visit the page with the Rectangle and Square class definitions
  cy.visit(baseUrl + "/main.html");

  // Access the window object where the classes are exposed
  cy.window().then((win) => {
    // Ensure that the classes are available in the window object
    const Rectangle = win.Rectangle;
    const Square = win.Square;

    // Stub the console.log method to spy on it (optional, depending on your test case)
    cy.stub(win.console, "log").as("consoleLog");

    // Define test values for rectangle and square
    const rect_w = 5;
    const rect_h = 10;
    const sq_s = 7;

    // Create instances of Rectangle and Square
    const rectangle = new Rectangle(rect_w, rect_h);
    const square = new Square(sq_s);

    // Test Rectangle properties and methods
    expect(rectangle.width).to.equal(rect_w);
    expect(rectangle.height).to.equal(rect_h);
    expect(rectangle.getArea()).to.equal(rect_w * rect_h);

    // Test Square properties and methods
    expect(square.width).to.equal(sq_s);
    expect(square.height).to.equal(sq_s);
    expect(square.getArea()).to.equal(sq_s * sq_s);
    expect(square.getPerimeter()).to.equal(sq_s * 4);
  });
});

