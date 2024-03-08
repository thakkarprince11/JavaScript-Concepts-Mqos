//

// Selecting All Cards
const cards = document.querySelectorAll('.card')
console.log(cards)

// Variables
let isFlipped = false
let firstCard = null
let secondCard = null

// forEach on Cards
cards.forEach((card) => card.addEventListener('click', flip))

// Flip
function flip() {
    //console.log('Card Flipped')
    //console.log(this)

    this.classList.add('flip')

    if (!isFlipped) {
        isFlipped = true
        firstCard = this
    } else {
        secondCard = this
        console.log(firstCard)
        console.log(secondCard)
        checkIt()
    }
}

// Check It
function checkIt() {
    //console.log('Checking...')
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success()
    } else {
        fail()
    }
}

// Success
const success = () => {
    //console.log('Success')
    firstCard.removeEventListener('click', flip)
    secondCard.removeEventListener('click', flip)
    reset()
}

// Fail
const fail = () => {
    //console.log('Failed')

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        reset()
    }, 500)
}

// Reset
const reset = () => {
    isFlipped = false
    firstCard = null
    secondCard = null
}

// Shuffle -  IIFE
;(function shuffle() {
    cards.forEach((card) => {
        let index = Math.floor(Math.random() * 16)
        card.style.order = index
    })
})();
