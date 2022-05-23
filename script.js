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
      return 1;
    } else if (computerSelection.toLowerCase() == "paper") {
      return -1;
    } else if (computerSelection.toLowerCase() == "rock") {
      return 0;
    }
  }

  if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "scissors") {
      return -1;
    } else if (computerSelection.toLowerCase() == "paper") {
      return 0;
    } else if (computerSelection.toLowerCase() == "rock") {
      return 1;
    }
  }

  if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection.toLowerCase() == "scissors") {
      return 0;
    } else if (computerSelection.toLowerCase() == "paper") {
      return 1;
    } else if (computerSelection.toLowerCase() == "rock") {
      return -1;
    }
  }
}

function uppercaseFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt();
    playerSelection = uppercaseFirstLetter(playerSelection);
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result == 1) {
      scorePlayer++;
      console.log(
        "You Win! " + playerSelection + " beats " + computerSelection
      );
      console.log("Player: " + scorePlayer + " Computer: " + scoreComputer);
    } else if (result == -1) {
      scoreComputer++;
      console.log(
        "You Lose! " + computerSelection + " beats " + playerSelection
      );
      console.log("Player: " + scorePlayer + " Computer: " + scoreComputer);
    } else if (result == 0) {
      console.log("Tie!");
      console.log("Player: " + scorePlayer + " Computer: " + scoreComputer);
    }
  }
}

game();
