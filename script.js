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
