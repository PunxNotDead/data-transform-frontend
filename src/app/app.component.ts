
import { Component } from "@angular/core";

@Component({
	selector: "app",
	templateUrl: '/templates/app.html'
})

class AppComponent {
	x1: number;
	x2: number;
	y1: number;
	y2: number;
	mousePressed: boolean;

	buttonClick(event) {
		console.log(event);
	}

	startDraw(event: MouseEvent) {
		this.x1 = event.clientX;
		this.y1 = event.clientY;
		this.x2 = event.clientX;
		this.y2 = event.clientY;
		this.mousePressed = true;
	}

	endDraw() {
		this.mousePressed = false;
	}

	drawLine(event: MouseEvent) {
		if (this.mousePressed) {
			this.x2 = event.clientX;
			this.y2 = event.clientY;
		}
	}
}

export default AppComponent;

