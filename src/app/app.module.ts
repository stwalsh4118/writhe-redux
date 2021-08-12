import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IvyCarouselModule } from "angular-responsive-carousel";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ContentCardComponent } from "./components/content-card/content-card.component";
import { MainCardComponent } from "./components/main-card/main-card.component";
import { ContactMeFooterComponent } from './components/contact-me-footer/contact-me-footer.component';

@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		NavBarComponent,
		ContentCardComponent,
		MainCardComponent,
  ContactMeFooterComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		IvyCarouselModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
