
let cards = ["A", "1", "2","3","4","5","6","7","8","9","J","K","Q"];


function shuffle(array)
{
    let currentIndex = array.length;

    while(currentIndex!=0)
    {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex-=1

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
    }
    return array;
}

shuffle(cards);
cards.forEach(card=>console.log(card))