import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-main-page",
	templateUrl: "./main-page.component.html",
	styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
	cards: any[] = [
		{
			images: [
				{
					path: "https://i.gyazo.com/7303f00be8e7b5dc2b27b9c372e0a8e9.gif",
				},
				{
					path: "https://i.gyazo.com/b23978145f936f67358c2349227b9581.png",
				},
				{
					path: "https://i.gyazo.com/e3edc557b196cf2aa0cbd6d9352b00e0.gif",
				},
				{
					path: "https://i.gyazo.com/d105aa7c0f698ed3d6e647953fe824fb.gif",
				},
				{
					path: "https://i.gyazo.com/35def3a6de99b9bf0b9cb59c30dede2a.gif ",
				},
				{
					path: "https://i.gyazo.com/7c9764318925400ff4eecfd7856e003b.gif",
				},
			],
			Right: true,
			contentTitle: "Reap Whats Been Sown",
			contentAbout:
				"Reap Whats Been Sown (or Reap for short) is envisioned to be a sandbox logistics style game with incremental motifs, focusing on progression through resource collection automation. It is currently in the very early stages of development, but whats currently been implemented is a fully procedurally generated infinite world with objects to collect basic resources from, an inventory to store and craft items, as well as terrain deformation to sculpt the world in the way you want.",
			link: "https://github.com/stwalsh4118/ReapWhatTheySow",
		},
		{
			images: [
				{
					path: "https://i.gyazo.com/a70021ea1f16def8f3096d3fe245dbf7.png",
				},
				{
					path: "https://i.gyazo.com/84a6f2de64841d62021be2c9bc63e180.jpg",
				},
				{
					path: "https://i.gyazo.com/d086049c81be0267a92f50ed86ee0859.png",
				},
				{
					path: "https://i.gyazo.com/1aa00c97598a12ca974decc83d55bc15.png",
				},
			],
			Right: false,
			contentTitle: "Those Who Enter",
			contentAbout:
				"Those Who Enter is a 2D bullet hell roguelike game where you play as Dante, a poor soul who has awoken to find himself stuck in the first layer of Hell with his only way out to fight through all the layers of Hell and defeat Satan for his release. Guided by Virgil and aided by shopkeep Charon, Dante must fight through troves of demons collecting their lost items from their previous lives to strengthen himself within each layer, culminating in a fight with the leader of each layer to mvoe to the next one. In the current demo there is 1 layer of Hell implemented and 2 boss fights to face, you can fight mosters within the main layer to gain access to the secret nooks and crannies (randomly generated dungeons) of each layer and aquire more powerful artifacts.",
			link: "https://github.com/stwalsh4118/ThoseWhoEnterDemo",
		},
	];
	constructor() {}

	ngOnInit(): void {}
}
