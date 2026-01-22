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

































































// let cards = []
// let message = ""
// let isAlive = false
// let hasBlackValue = false

// let messageEl = document.getElementById("message-El")
// let cardsEl = document.getElementById("cards-El")
// let sumEl = document.getElementById("sum-El")


// function startGame() {
//     isAlive = true
//     firstCard = getRandomCard()
//     secondCard  = getRandomCard()
//     sum = firstCard + secondCard
//     cards = [firstCard,secondCard] 
//     renderGame()
    
// }

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random()*14)+1

//     if (randomNumber > 10) {
//         return 10 
//     } else if (randomNumber === 1 ) {
//         return 11
//     } else {
//         return randomNumber
//     }
   
// }

// function renderGame() {
//     sumEl.textContent = "Sum: " + sum
//     cardsEl.textContent = "Cards: " 
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
        
//     }
//     if (sum < 21) {
//             message = "Do you want to draw a new card?"
//         } else if (sum === 21) {
//             message = "Hurray, you've hit a Blackjack!"
//             hasBlackValue = true
//         } else {
//             message = "Oooopsie, you are out."
//             isAlive = false
//         }   
//         messageEl.textContent = message 
    
// }


// function newCard() {
//     if (isAlive === true &&  hasBlackValue === false) {
//         let newCard = getRandomCard()
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     }
// }


























// let cards = []
// let message = ""
// let isAlive = false
// let hasBlackValue = false



// let messageEl = document.getElementById("message-El")
// let cardsEl = document.getElementById("cards-El")
// let sumEl = document.getElementById("sum-El")


// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     sum = firstCard + secondCard
//     cards = [firstCard,secondCard]
//     renderGame()
    
// }

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random()*14) + 1

//     if (randomNumber >10) {
//         return 10
//     }else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }


// function renderGame() {
//     sumEl.textContent = "Sum: " + sum
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent +=  cards[i] + " "
//     }

//     if ( sum < 21) {
//         message = "Do you want to draw a new Card?"
//     }else if ( sum === 21) {
//         message = "Hurray, you've hit a blackjack!"
//         hasBlackValue = true
//     }  else {
//         message = "Ooopsy, you're out."
//         isAlive = false
//     }
//      messageEl.textContent = message
// }






// function newCard() {
//     if (isAlive === true && hasBlackValue === false) {
//         let newCard = getRandomCard()
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     } 
// }








































// let cards = []
// let message = ""
// let isAlive = false
// let hasBlackValue = false
// let person = {
//     name: "Angel",
//     amount: 2000 ,
//     object: "Player"
// }

// let messageEl = document.getElementById("message-El")
// let cardsEl = document.getElementById("cards-El")
// let sumEl = document.getElementById("sum-El")
// let playerEl = document.getElementById("player-El")

// playerEl.textContent = person.object+ ": " + person.name +  " " + "$"+ person.amount 


// function startGame() {
//     isAlive = true
//     let firstCard = getRandomNumber()
//     let secondCard = getRandomNumber()
//     sum = firstCard + secondCard
//     cards = [firstCard, secondCard]
//     renderGame()
// }

// function getRandomNumber() {
//     let randomNumber = Math.floor(Math.random()*14)+ 1

//    if (randomNumber > 10) {
//         return 10    
//    } else if (randomNumber === 1) {
//         return 11   
//    } else {
//         return randomNumber
//    }
// }

// function renderGame() {

//     sumEl.textContent = "Sum: " + sum
//     cardsEl.textContent = "Cards: "
        
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
        
//         if (sum < 21) {
//             message  = "Do you wish to draw new card?"
//         } else if (sum === 21) {
//             message = "You've won!"
//             hasBlackValue = true
//         } else {
//             message = "Oppsssiieee, better luck next time."
//             isAlive = false
//         }
//     } messageEl.textContent = message
// }

// function newCard() {
//     if (isAlive === true && hasBlackValue === false) {
//         let newCard = getRandomNumber()
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     }
    
// }




































































// let cards = []
// let message = ""
// let isAlive = false
// let hasBlackValue = false
// let player = {
//     name: "Angelrita",
//     chips: 1000
// }

// let messageEl = document.getElementById("message-El")
// let cardsEl = document.getElementById("cards-El")
// let sumEl = document.getElementById("sum-El")
// playerEl = document.getElementById("player-El")
// playerEl.textContent = player.name + ": $" + player.chips

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     sum = firstCard + secondCard
//     cards = [firstCard, secondCard]
//     renderGame()
// }    


// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random()* 14) +1

//     if (randomNumber > 10) {
//         return 10
//     }else if ( randomNumber === 1) {
//         return 11
//     }else {
//         return randomNumber
//     }
// }

// function renderGame() {
//     sumEl.textContent = "Sum: " + sum
//     cardsEl.textContent = "Cards: " 

//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }

//     if (sum < 21) {
//         message = "Do you want to draw a new card?"
//     }else if (sum === 21) {
//         message = "Hurray, you've hit a jack"
//         hasBlackValue = true
//     } else {
//         message = "Oooops, you're out of the game."
//         isAlive = false
//     }
//     messageEl.textContent = message

// }

// function newCard () {
//     if (isAlive === true && hasBlackValue === false) {
//         let newCard = getRandomCard()
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     }

// }




















