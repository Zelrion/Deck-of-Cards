import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICard } from "../../models";

@Component({
  selector: "app-doc-card[card]",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input() card: ICard | null = null;
  @Output() cardWithdrawn: EventEmitter<ICard> = new EventEmitter<ICard>();

  onWithdrawClick(): void {
    if (this.card)
      this.cardWithdrawn.emit(this.card);
  }
}