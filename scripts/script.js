let misteryNumber =Math.floor(Math.random() * 100);
let playerGuess = 0;

let input = document.getElementById("input");
let output = document.getElementById("output");
let state = document.getElementById("status");

let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

let button = document.getElementById("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

window.addEventListener("keydown", keyDownHandler, false);

function playGame() {

    guessesRemaining = guessesRemaining - 1;
    guessesMade = guessesMade + 1;
    gameState = `Guess: ${guessesMade}, Remanning: ${guessesRemaining} `;

    if (playerGuess < misteryNumber) {
        output.innerHTML = "That's to Low.";
        state.innerHTML = gameState;
        if (guessesRemaining < 1) {
            endGame();

        }
    } else if (playerGuess > misteryNumber) {
        output.innerHTML = "That's too High.";
        state.innerHTML = gameState;
        if (guessesRemaining < 1) {
            endGame();

        }

    } else if (playerGuess === misteryNumber) {
        output.innerHTML = "You got it Mate!!";
        gameWon = true;
        endGame();
    }

}

function endGame() {

    if (gameWon) {
        output.innerHTML = `Yes!, the it's ${misteryNumber}! <br> It only took you ${guessesMade} guesses`;
    } else {
        output.innerHTML = `NO more guesses left! the number was ${misteryNumber}.`;
    }

    button.removeEventListener("click", clickHandler, false);
    window.removeEventListener("keydown", keyDownHandler, false);

    input.disable = true;

}

function keyDownHandler(event) {
    if(event.keyCode === 13) {
        validateInput();
    }
}

function clickHandler() {
    validateInput();
}

function validateInput() {
    playerGuess = parseInt(input.value);
    if(isNaN(playerGuess)) {
        output.innerHTML = "Please enter a Number";
    }else {
        playGame();
    }

}

