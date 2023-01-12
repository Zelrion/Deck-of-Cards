import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from "./components/card/card.component";
import { TableComponent } from "./components/table/table.component";
import { MaterialModule } from "../shared/material/material.module";
import { CommonModule } from "@angular/common";
import { ControllerComponent } from "./components/controller/controller.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    ControllerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    TableComponent
  ],
  providers: [],
  bootstrap: []
})
export class DeckOfCardsModule { }
