import { CardSuit, CardValue, ICard } from "./index";

export class Deck {
    public cards: ICard[] = [];
    public drawnCards: ICard[] = [];

    constructor(init?: Partial<Deck>) {
        Object.assign(this, init);
    }

    add(...cards: ICard[]): void {
        this.cards = [...this.cards, ...cards];
    }

    /**
    * Returns the cards added to the `drawnCards` array.
    * @param amount - The number of cards to be pulled from the deck.
    * @returns Array of added cards `ICard[]`
    */
    draw(amount: number): ICard[] {
        const cardsCut = this.cards.splice(0, amount);
        if (cardsCut)
            this.drawnCards = [...this.drawnCards, ...cardsCut];
        return cardsCut;
    }

    withdraw(...cards: ICard[]): void {
        cards.forEach(card => {
            const cardIndex: number = this.drawnCards.indexOf(card);
            if (cardIndex >= 0)
                this.add(this.drawnCards.splice(cardIndex, 1)[0]);
        });
    }

    reset(): void {
        this.withdraw(...this.drawnCards);
        this.sort();
    }

    shuffle(): void {
        //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        for (let remainingCards: number = this.cards.length; remainingCards > 0; remainingCards--) {
            let tempArray = this.cards[remainingCards - 1];
            const index: number = Math.floor(Math.random() * remainingCards);
            this.cards.splice(remainingCards - 1, 1, this.cards[index]);
            this.cards.splice(index, 1, tempArray);
        }
    }

    sort(): void {
        const alphaOrderValue: { [key: string]: number } = { //Make the values a bit more convientent to work with.
            [CardValue.Ace]: 1,
            [CardValue.Jack]: 11,
            [CardValue.Queen]: 12,
            [CardValue.King]: 13
        };
        const suitsOrderValue: { [key: string]: number } = {
            [CardSuit.Spades]: 0,
            [CardSuit.Hearts]: 1,
            [CardSuit.Clubs]: 2,
            [CardSuit.Diamonds]: 3,
        };
        this.cards.sort((cardA, cardB) => { //Sort based on Value, ignoring Suit for now.
            const cardAVal: number = (+cardA.value) ? +cardA.value : alphaOrderValue[cardA.value];
            const cardBVal: number = (+cardB.value) ? +cardB.value : alphaOrderValue[cardB.value];
            return (suitsOrderValue[cardA.suit] === suitsOrderValue[cardB.suit])
                ? cardAVal - cardBVal
                : suitsOrderValue[cardA.suit] - suitsOrderValue[cardB.suit];
        });
    }
}