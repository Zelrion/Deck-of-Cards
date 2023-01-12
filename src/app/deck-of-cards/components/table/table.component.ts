import { Component } from "@angular/core";
import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";
import { Observable } from "rxjs";
import { Deck } from "../../models";
import { DeckService } from "../../services/deck.service";

@Component({
  selector: "app-doc-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  animations: [
    trigger('cardEnterAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('50ms', [
          animate('0.5s ease-in-out',
            style({ opacity: 1 })
          )
        ]), { optional: true }),
        query(':leave', style({ opacity: 1 }), { optional: true }),
        query(':leave', stagger('50ms', [
          animate('0.25s ease-in-out',
            style({ opacity: 0 })
          )
        ]), { optional: true })
      ])
    ])
  ]
})
export class TableComponent {
  public deckOfCards$: Observable<Deck> = this.deckService.getDeck();

  constructor(public deckService: DeckService) { }
}