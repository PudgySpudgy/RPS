const playerScore = 0
const computerScore = 0
let computerChoice = ''
let result = ''

function getComputerChoice () {
    const computerOptions = ['rock', 'paper', 'scissors']
    computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)]
    return computerChoice;
    }

function singleRound () {
  const playerSelection = prompt("1...2...3...")
  console.log(getComputerChoice());
  console.log(computerChoice)
  if ((playerSelection == null) || (playerSelection == undefined)) {
    return result = "No valid input detected, Try again! ";
    } else if (playerSelection.toLowerCase() === computerChoice) {
      return result = `Tie game. Both sides picked ${computerChoice}.`; 
    } else if (((playerSelection.toLowerCase() === 'rock') && (computerChoice === 'scissors')) || ((playerSelection.toLowerCase() === 'paper') && (computerChoice === 'rock')) || ((playerSelection.toLowerCase() === 'scissors') && (computerChoice === 'paper'))) {
      return result = `You win ${playerSelection} beats ${computerChoice}!`
    } else {
      return result =`You lose. ${computerChoice} beats ${playerSelection}.`;
  }}

// The above code should be workable to generate a computer choice, prompt a player choice, and run one round of the game.

singleRound();

console.log(result)