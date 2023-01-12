import { Component, Input, OnInit } from "@angular/core";
import { NotificationService } from "src/app/shared/notification/services/notification.service";
import { CardSuit, CardValue, Deck } from "../../models";

@Component({
  selector: "app-doc-controller",
  templateUrl: "./controller.component.html",
  styleUrls: ["./controller.component.scss"]
})
export class ControllerComponent {
  @Input() deck: Deck | null = null;

  _deckDrawCount: number = 5;
  get deckDrawCount(): number {
    if (this.deck && this._deckDrawCount > this.deck.cards.length) this._deckDrawCount = this.deck.cards.length; //Mimic the slider when value exceeds max.
    return this._deckDrawCount;
  }
  set deckDrawCount(value: number) {
    this._deckDrawCount = value;
  }

  constructor(private notificationService: NotificationService) { }

  onDeckDrawClick(amount: number): void { //NOTE; One Eyed Jacks are Jack of Spades, and Jack of Hearts
    if (!this.deck) return;
    const drawnCards = this.deck.draw(amount);
    const hasOneEyedJack = drawnCards.some(card => card.value === CardValue.Jack && (card.suit === CardSuit.Spades || card.suit === CardSuit.Hearts));
    if (hasOneEyedJack) this.notificationService.openSnackBar("A One Eyed Jack has been drawn.", "Dismiss");
  }
}