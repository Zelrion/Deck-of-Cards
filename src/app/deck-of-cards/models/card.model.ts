export enum CardSuit {
    Spades = "spades",
    Hearts = "hearts",
    Clubs = "clubs",
    Diamonds = "diamonds"
}

export enum CardValue {
    Ace = "A",
    Jack = "J",
    Queen = "Q",
    King = "K"
}

export interface ICard {
    suit: CardSuit,
    value: CardValue | number,
    imgUrl: string
}