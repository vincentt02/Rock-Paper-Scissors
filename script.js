function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else if (choice == 2) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection.toLowerCase() == "scissors") {
      return "You Win! Rock beats Scissors";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection.toLowerCase() == "rock") {
      return "Tie";
    }
  }

  if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "Tie";
    } else if (computerSelection.toLowerCase() == "rock") {
      return "You Win! Paper beats Rock";
    }
  }

  if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection.toLowerCase() == "scissors") {
      return "Tie";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection.toLowerCase() == "rock") {
      return "You Lose! Rock beats Scissors";
    }
  }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));

/*
function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt();
    let computerSelection = computerPlay();
  }
}

game();
*/
