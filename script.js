const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('#player-score');
const computerScoreElem = document.querySelector('#computer-score');
const result = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
const computerChoiceElem = document.querySelector('#computer-choice');
const choicesArray = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

/**
 * function to choose the computers move
 */
function computerMath() {
    const choicesArrayIndex = Math.floor(Math.random() * 3);
    return choicesArray[choicesArrayIndex];
}


/**
 * function to calculate the result by comparing the players move to the computers
 */
function calculateResult(playerChoice, computerChoice) {
    if (playerChoice) {
        computerChoiceElem.innerHTML = `Computer Choose: ${computerChoice}`;
        if (playerChoice === computerChoice) {
            result.innerHTML = `It's a draw, Choose a new "weapon"!!!`;
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result.innerHTML = "You Win, Congratulations!!";
            playerScore++;
            playerScoreElem.innerHTML = `Player: ${playerScore}`;
        } else {
            result.innerHTML = "Computer Wins, better luck next time!!";
            computerScore++;
            computerScoreElem.innerHTML = `Computer: ${computerScore}`;
        }
    }
}

