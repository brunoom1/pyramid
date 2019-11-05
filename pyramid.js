class Pyramid {

	constructor (size = 5) {
		this.size = size;
	}

	toString () {
		let str_pyramid = "";
		let total_spaces = this.size - 1;
		let line_size = total_spaces + this.size;

		for (let i = 1; i <= this.size; i ++) {

			const spaces = i - 1;
			const middle = Math.ceil((line_size - i - spaces) / 2);

			let c = 0; // spaces control

			for (let x = 0; x <= line_size + spaces; x ++) {
				if (x > middle && x < middle + i + spaces ) {
					str_pyramid += ( c % 2 == 0 ? "*":" ");
					c++;
				}
				else {
					str_pyramid += " ";
				}				
			}
			
			str_pyramid += "\n";
		}


		return str_pyramid;		
	}

}


(() => {

	const pyramid = new Pyramid(6);
	console.log(pyramid.toString());

})()


