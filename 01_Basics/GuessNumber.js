let random = parseInt(Math.random() * 100 + 1)
console.log(random)

const submit = document.getElementById('#submit')

const userInput = document.getElementById('#guessField')

const guessSlot = document.getElementById('#guesses')

const remaining = document.getElementById('#lastResult')

const lowOrHi = document.getElementById('#lowOrHi')

const resultParas = document.getElementById('#resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

//

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter Valid Number')
    } else if (guess < 1) {
        alert('Please Enter Number greater then 0')
    } else if (guess > 100) {
        alert('Please Enter Number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over... Random Number was ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage(`You Guessed it Right`)
        endGame()
    } else if (guess < random) {
        displayMessage(`Number is too low`)
    } else if (guess > random) {
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function (event) {
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}
