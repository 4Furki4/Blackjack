let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function renderGame(){
    startGame();
}

function startGame(){
    sumEl.textContent = "Sum: "+ sum
    cardEl.textContent = "Card: "+ cards[0] + " - " + cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack !"
        hasBlackJack = true
        messageEl.textContent = message;
    } else {
        message = "You're out of the game !"
        isAlive = false
        messageEl.textContent = message;
    }
}
console.log(message)

function newCard(){
    let card = 6;
    sum+=card;
    cards.push(card)
    renderGame()
    if(cards[2] === 6 ){
        console.log("cards[2] === 6")
    }
    
}

