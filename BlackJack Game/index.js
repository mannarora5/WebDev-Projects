let sum = null
let cards = []
// variable to keep track of state of win
let hasWon = false;
let isAlive = false;
let message = ""
// get element by id
let messageEl = document.getElementById("message-el")
// get element by query selector, use # to get id
let sumEl = document.querySelector("#sum-el")
// get element by id
let cardsEl = document.getElementById("cards-el")

// create player object
player = {
    name: "Mann",
    chips: 145
}
// render out name and chips 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips




// function to render the game
function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    // for loop to iterate and render the cards onto screen
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent = cardsEl.textContent + cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You have won the game!!!"
        hasWon = true;
        isAlive = false;
    } else {
    message = "You have lost the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}

// gets new card
function newCard() {
    if (isAlive === false && hasWon === false) {
        return null
    }
    let newCard = getRandomCard()
    sum = sum + newCard
    cards.push(newCard)
    renderGame()
}

// initially start game
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)

    renderGame()
}

// generate a random number
function getRandomCard() {
    // math.floor turns decimal into number (eg 12.99 into 12)
    // math.random pics a random decimal from 0.00-11.99
    let randomNumber = Math.floor(Math.random() * 11) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}


