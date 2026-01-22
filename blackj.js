//BUILDING THE BLACKJACK GAME

let cards = []
let message = ""
let isAlive = false
let hasBlackValue = false

let messageEl = document.getElementById("message-El")
let cardsEl = document.getElementById("cards-El")
let sumEl = document.getElementById("sum-El")


function startGame() {
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 14) + 1

    if (randomNumber === 11) {
        return 1
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
    
}


function renderGame() {

    sumEl.textContent = "Sum: " +  sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent +=  cards[i] + " ";
        
        if (sum === 21) {
            message = "Hurray, you just hit a blackjack!"
            hasBlackValue = true
            
        } else if (sum < 21) {
            message = "Would you like to draw a new card?"
            
        } else {
            message = "Oooopsie, you're out of the game."
            isAlive = false
        }
        messageEl.textContent = message   
    }

}

function newCard() {
    if (isAlive === true && hasBlackValue === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()   
    } 
    
    
}
