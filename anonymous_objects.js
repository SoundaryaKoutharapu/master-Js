/*
    anonymous objects = objects without a name
                        not directly referenced 
                        less syntax, No need for unique names
*/

class Card
{
    constructor(value,suit)
    {
        this.value = value;
        this.suit = suit;
    }
}

/* let card1 = new Card("A", "hearts")
let card2 = new Card("A","spades")
let card3 = new Card("A", "diamonds")
let card4 = new Card("A","clubs")
let card5 = new Card("3", "hearts ")
let card6 = new Card("3","spades")
let card7 = new Card("3", "diamonds")
let card8 = new Card("3","clubs")

let cards  = [card1,card2,card3,card4,card5,card6,card7,card8]

console.log(card2.value + card2.suit);  //accessing directly using object
console.log(cards[5].value + cards[5].suit)  // accessing using array of objects
*/

// with anonymous objects, no need to use unique names



let cards  = [
                 new Card("A","spades"),
                 new Card("A", "diamonds"),
                 new Card("A","clubs"),
                 new Card("3", "hearts "),
                 new Card("3","spades"),
                 new Card("3", "diamonds"),
                 new Card("3","clubs")
           ]

           // console.log(card2.value + card2.suit);  // gives error because no direct access and we do not have any objects
           console.log(cards[3].value + cards[3].suit)


  cards.forEach((card)=>console.log(`${card.value}  ${card.suit}`));       