class Draw {
	constructor() {
		this.options = ["red", "green", "blue"];
		//this.options = ['images/red.png', 'images/green.png', 'images/blue.png'];
		//this.options = new Array();

		// this.options[0] = new Image();
		// this.options[0].scr = 'images/red.png';

		// this.options[1] = new Image();
		// this.options[1].scr = 'images/green.png';
		
		// this.options[2] = new Image();
		// this.options[2].scr = 'images/blue.png';

		let _result = this.drawResult();
		this.getDrawResult = () => _result;
	}
	drawResult() {
		let colors = [];

		for (let i = 0; i < this.options.length; i++) {
		const index = Math.floor(Math.random() * this.options.length);
		const color = this.options[index];
		//console.log(color);
		
		colors.push(color);
		}
		return colors;
	}
}
const draw = new Draw();
