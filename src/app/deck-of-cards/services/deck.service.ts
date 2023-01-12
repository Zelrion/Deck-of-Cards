import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ICard } from "../models/card.model";
import { Deck } from "../models/deck.model";
import { delay, map, Observable, shareReplay } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root" //Singleton
})
export class DeckService {
    private apiUrl: string = environment.cardApiUrl;
    
    constructor(private http: HttpClient) { }

    getDeck(): Observable<Deck> {
        return this.http.get<ICard[]>(this.apiUrl).pipe(
            delay(1500),
            map(deckOfCards => new Deck({
                cards: deckOfCards
            })),
            shareReplay(1)
        );
    }
}