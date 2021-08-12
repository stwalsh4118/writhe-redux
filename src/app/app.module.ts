import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ContentCardComponent } from "./components/content-card/content-card.component";
import { MainCardComponent } from './components/main-card/main-card.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		NavBarComponent,
		ContentCardComponent,
  MainCardComponent,
	],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
