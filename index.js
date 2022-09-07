let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "Furkan",
    chips: 44
}


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function renderGame(){
    cardEl.textContent = "Card: "

    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: "+ sum
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
    messageEl.textContent = message
}

function startGame(){
    if(!isAlive || hasBlackJack){
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        isAlive = true
        hasBlackJack =false;
        renderGame();
    }
}
console.log(message)

function newCard(){

    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum+=card;
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {

    let rand = Math.floor( Math.random()*13 ) + 1
    if(rand === 1) {
        return 11
    } else if(rand>10) {
        return 10
    } else {
        return rand
    }
}