import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import LineComponent from "./components/line.component";

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		LineComponent
	],
	bootstrap: [
		AppComponent
	]
})

class AppModule { }

export default AppModule;