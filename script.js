//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	calculateArea(){
		this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}	
	getperimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
