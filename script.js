const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const resultDiv = document.getElementById("result");
const scorePlayerDiv = document.getElementById("scorePlayer");
const scoreComputerDiv = document.getElementById("scoreComputer");

rock.addEventListener("click", () => {
  playRound("Rock", computerPlay());
});
paper.addEventListener("click", () => {
  playRound("Paper", computerPlay());
});
scissors.addEventListener("click", () => {
  playRound("Scissors", computerPlay());
});

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection, computerSelection) {
  let result = 0;
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection.toLowerCase() == "scissors") {
      scorePlayer++;
      resultDiv.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "paper") {
      scoreComputer++;
      resultDiv.innerHTML = `You Lose! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "rock") {
      resultDiv.innerHTML = `Tie!`;
    }
  }

  if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "rock") {
      scorePlayer++;
      resultDiv.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "scissors") {
      scoreComputer++;
      resultDiv.innerHTML = `You Lose! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "paper") {
      resultDiv.innerHTML = `Tie!`;
    }
  }

  if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection.toLowerCase() == "paper") {
      scorePlayer++;
      resultDiv.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "rock") {
      scoreComputer++;
      resultDiv.innerHTML = `You Lose! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "scissors") {
      resultDiv.innerHTML = `Tie!`;
    }
  }

  scorePlayerDiv.innerHTML = scorePlayer;
  scoreComputerDiv.innerHTML = scoreComputer;

  if (scorePlayer >= 5) {
    resultDiv.innerHTML = `You Won!`;
  } else if (scoreComputer >= 5) {
    resultDiv.innerHTML = `You Lost!`;
  }
}
