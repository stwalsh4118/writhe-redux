import {
	animate,
	state,
	style,
	transition,
	trigger,
} from "@angular/animations";
import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
	selector: "app-main-card",
	templateUrl: "./main-card.component.html",
	styleUrls: ["./main-card.component.css"],
	animations: [
		trigger("inView", [
			transition(":enter", [
				style({ bottom: "100%", opacity: 0 }),
				animate("1s 0s ease-out", style({ bottom: "5vh", opacity: 1 })),
			]),
			transition(":leave", [
				animate(".5s 0s ease-in", style({ bottom: "100%" })),
			]),
		]),
	],
})
export class MainCardComponent implements OnInit, AfterViewInit {
	pageLoaded: boolean = false;
	constructor() {}

	ngOnInit(): void {
		this.pageLoaded = true;
	}

	ngAfterViewInit(): void {
		this.pageLoaded = true;
	}
}
