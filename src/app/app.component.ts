
import { Component } from "@angular/core";

@Component({
	selector: "app",
	templateUrl: '/templates/app.html'
})

class AppComponent {
	buttonClick(event) {
		console.log(event);
	}
}

export default AppComponent;
