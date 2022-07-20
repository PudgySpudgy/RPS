function getComputerChoice () {
    const computerOptions = ['rock', 'paper', 'scissors']
    const computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)]
    return computerChoice;
    }

function singleRound (playerSelection = 'none', computerSelection) {
  const input = prompt("1...2...3...")
  
  if ((input == null) || (input == undefined)) {
    return "Try again!";
  } else if (playerSelection.toLowerCase() === computerSelection) {
    return `Tie game. Both sides picked ${computerSelection}`; 
  } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) || ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
  return `You win ${playerSelection} beats ${computerSelection}!`
  } else {
    return `You lose. ${computerSelection} beats ${playerSelection}`
  }}

// The above code should be workable to generate a computer choice, prompt a player choice, and run one round of the game.
  
