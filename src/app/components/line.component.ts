
import { Component, Input } from "@angular/core";

@Component({
	selector: "zLine",
	templateUrl: '/templates/components/line.html'
})

class LineComponent {
	@Input() x1: number;
	@Input() y1: number;
	@Input() x2: number;
	@Input() y2: number;

	styles: any;

	constructor() {
		this.calculateStyles();
	}

	calculateStyles() {
		const length = Math.sqrt((this.x1 - this.x2)*(this.x1 - this.x2) + (this.y1 - this.y2) * (this.y1 - this.y2));
		const angle = Math.atan2(this.y2 - this.y1, this.x2 - this.x1) * 180 / Math.PI;

		this.styles = {
			position: 'absolute',
			transform: `rotate(${angle}deg)`,
			width: length,
			left: this.x1,
			top: this.y1
		};
	}

	ngOnChanges(changes) {
		this.calculateStyles();
	}
}

export default LineComponent;
