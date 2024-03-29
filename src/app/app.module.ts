import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DeckOfCardsModule } from "./deck-of-cards/doc.module";
import { MaterialModule } from "./shared/material/material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    DeckOfCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
