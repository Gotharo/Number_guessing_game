let misteryNumber = 50;
let playerGuess = 0;

let input = document.getElementById("input");
let output = document.getElementById("output");
let state = document.getElementById("status");

let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";

let button = document.getElementById("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

function clickHandler() {
    console.log("estoy haciendo click");
    playGame()
}

function playGame() {

    guessesRemaining = guessesRemaining - 1;
    guessesMade = guessesMade + 1;
    gameState = `Guess: ${guessesMade}, Remanning: ${guessesRemaining} `;


    playerGuess = parseInt(input.value);

    if( playerGuess < misteryNumber) {
        output.innerHTML = "That's to Low.";
        state.innerHTML = gameState;
    } else if (playerGuess > misteryNumber) {
        output.innerHTML = "That's too High.";
        state.innerHTML = gameState;

    }else if ( playerGuess === misteryNumber) {
        output.innerHTML = "you got it Mate!!";
    }
  
}