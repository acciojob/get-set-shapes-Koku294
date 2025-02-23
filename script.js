class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width(): number {
    return this._width;
  }

  // Getter for height
  get height(): number {
    return this._height;
  }

  // Method to calculate area
  getArea(): number {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    // Calls the parent constructor with both width and height set to the side length
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter(): number {
    return 4 * this.width; // Since width == height for square
  }
}
it('my test', () => {
  cy.once('uncaught:exception', () => false);
  
  // action that causes exception
  cy.get('body').click();
});
