class Pyramid {

	constructor (size = 5) {
		this.size = size;
		this.setDefault();
	}

	setDefault () {
		this.space = " ";
		this.char = "*";
		this.newLine = "\n";

		return this;
	}

	setHtml () {
		this.space = "<span style='margin-left: 7px; display: inline-block; '></span>";
		this.char="*";
		this.newLine="<br />";

		return this;	
	}

	setSize (size) {
		this.size = size;
		return this;
	}

	toString () {

		let size = this.size;
		let str_pyramid = "";
		let total_spaces = size - 1;
		let line_size = total_spaces + size;

		for (let i = 1; i <= size; i ++) {

			const spaces = i - 1;
			const middle = Math.ceil((line_size - i - spaces) / 2);

			let c = 0; // spaces control

			for (let x = 0; x <= line_size + spaces; x ++) {
				if (x > middle && x < middle + i + spaces ) {
					str_pyramid += ( c % 2 == 0 ? this.char : this.space );
					c++;
				}
				else {
					str_pyramid += this.space;
				}				
			}

			str_pyramid += this.newLine;
		}

		return str_pyramid;		
	}

}


