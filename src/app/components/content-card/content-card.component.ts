import { AfterViewChecked, ElementRef, Input } from "@angular/core";
import { HostListener } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import {
	trigger,
	state,
	style,
	animate,
	transition,
} from "@angular/animations";
import { AfterViewInit } from "@angular/core";

@Component({
	selector: "app-content-card",
	templateUrl: "./content-card.component.html",
	animations: [
		trigger("inViewRight", [
			state(
				"offScreen",
				style({
					left: "200%",
				})
			),
			state(
				"onScreen",
				style({
					left: "0px",
				})
			),
			transition("offScreen => onScreen", [animate(".7s 0s ease-in")]),
			transition("onScreen => offScreen", [animate(".7s 0s ease-in")]),
		]),
		trigger("inViewLeft", [
			state(
				"offScreen",
				style({
					right: "200%",
				})
			),
			state(
				"onScreen",
				style({
					right: "0px",
				})
			),
			transition("offScreen => onScreen", [animate(".7s 0s ease-in")]),
			transition("onScreen => offScreen", [animate(".7s 0s ease-in")]),
		]),
	],
	styleUrls: ["./content-card.component.css"],
})
export class ContentCardComponent implements OnInit, AfterViewInit {
	@Input() images: any = [];
	@Input() Right!: boolean;
	@Input() contentTitle!: string;
	@Input() contentAbout!: string;
	@Input() link!: string;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {}

	@ViewChild("testDiv", { static: false })
	private testDiv!: ElementRef<HTMLDivElement>;
	isInView!: boolean;

	@HostListener("window:scroll", ["$event"])
	isScrolledIntoView() {
		if (this.testDiv) {
			console.log(window.pageYOffset);
			const rect = this.testDiv.nativeElement.getBoundingClientRect();
			const topShown = rect.top >= -200;
			const bottomShown = rect.bottom <= window.innerHeight + 100;
			this.isInView = topShown && bottomShown;
		}
	}
}
