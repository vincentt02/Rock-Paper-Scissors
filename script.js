const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playAgainBtn1 = document.getElementById("playAgain1");
const playAgainBtn2 = document.getElementById("playAgain2");

const resultDiv = document.getElementById("result");
const scorePlayerDiv = document.getElementById("scorePlayer");
const scoreComputerDiv = document.getElementById("scoreComputer");
const playerEndScoreDiv = document.getElementById("playerEndScore");
const computerEndScoreDiv = document.getElementById("computerEndScore");
const gameEndMessageDiv = document.getElementById("gameEndMessage");

const gameWindow = document.getElementById("game");
const actionWindow = document.getElementById("action");
const endWindow = document.getElementById("gameEnd");

const playerImg = document.getElementById("playerSelectionImg");
const computerImg = document.getElementById("computerSelectionImg");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

rockBtn.addEventListener("click", () => {
  playRound("Rock", computerPlay());
});
paperBtn.addEventListener("click", () => {
  playRound("Paper", computerPlay());
});
scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", computerPlay());
});

playAgainBtn1.addEventListener("click", () => {
  newGame();
});
playAgainBtn2.addEventListener("click", () => {
  newGame();
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

let winCount = 3;
let scorePlayer = 0;
let scoreComputer = 0;

function unBlurAndHide() {
  game.removeAttribute("class", "blur");
  actionWindow.style.display = "none";
  resultDiv.innerHTML = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

function updateScoreAndResult(winner, message) {
  if (winner == "player") {
    scorePlayer++;
  } else if (winner == "computer") {
    scoreComputer++;
  }

  resultDiv.innerHTML = message;
}

function updateScore() {
  scorePlayerDiv.innerHTML = scorePlayer;
  scoreComputerDiv.innerHTML = scoreComputer;
  if (scorePlayer == winCount) {
    gameEnd("player");
  } else if (scoreComputer == winCount) {
    gameEnd("computer");
  }
}

function gameEnd(winner) {
  playerEndScoreDiv.innerHTML = scorePlayer;
  computerEndScoreDiv.innerHTML = scoreComputer;
  endWindow.style.display = "flex";
  if (winner == "player") {
    gameEndMessageDiv.innerHTML = "You Won!";
  } else if (winner == "computer") {
    gameEndMessageDiv.innerHTML = "You Lost!";
  }
}

function newGame() {
  scorePlayer = 0;
  scoreComputer = 0;
  endWindow.style.display = "none";
  gameEndMessageDiv.innerHTML = "";
  scorePlayerDiv.innerHTML = scorePlayer;
  scoreComputerDiv.innerHTML = scoreComputer;
}

async function action(playerSelection, computerSelection) {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  if (playerSelection == "Rock") {
    playerImg.setAttribute("src", "./images/rock_flipped.png");
  } else if (playerSelection == "Paper") {
    playerImg.setAttribute("src", "./images/paper_flipped.png");
  } else if (playerSelection == "Scissors") {
    playerImg.setAttribute("src", "./images/scissors_flipped.png");
  }

  if (computerSelection == "Rock") {
    computerImg.setAttribute("src", "./images/rock.png");
  } else if (computerSelection == "Paper") {
    computerImg.setAttribute("src", "./images/paper.png");
  } else if (computerSelection == "Scissors") {
    computerImg.setAttribute("src", "./images/scissors.png");
  }
  game.setAttribute("class", "blur");
  actionWindow.style.display = "flex";

  await delay(500);
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection.toLowerCase() == "scissors") {
      updateScoreAndResult(
        "player",
        `You Win! ${playerSelection} beats ${computerSelection}`
      );
    } else if (computerSelection.toLowerCase() == "paper") {
      updateScoreAndResult(
        "computer",
        `You Lose! ${computerSelection} beats ${playerSelection}`
      );
    } else if (computerSelection.toLowerCase() == "rock") {
      updateScoreAndResult("tie", "Tie!");
    }
  }

  if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "rock") {
      updateScoreAndResult(
        "player",
        `You Win! ${playerSelection} beats ${computerSelection}`
      );
    } else if (computerSelection.toLowerCase() == "scissors") {
      updateScoreAndResult(
        "computer",
        `You Lose! ${computerSelection} beats ${playerSelection}`
      );
    } else if (computerSelection.toLowerCase() == "paper") {
      updateScoreAndResult("tie", "Tie!");
    }
  }

  if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection.toLowerCase() == "paper") {
      updateScoreAndResult(
        "player",
        `You Win! ${playerSelection} beats ${computerSelection}`
      );
    } else if (computerSelection.toLowerCase() == "rock") {
      updateScoreAndResult(
        "computer",
        `You Lose! ${computerSelection} beats ${playerSelection}`
      );
    } else if (computerSelection.toLowerCase() == "scissors") {
      updateScoreAndResult("tie", "Tie!");
    }
  }

  setTimeout(unBlurAndHide, 1000);
  setTimeout(updateScore, 1000);
}

function playRound(playerSelection, computerSelection) {
  let result = 0;
  action(playerSelection, computerSelection);

  /*
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection.toLowerCase() == "scissors") {
      scorePlayer++;
      resultDiv.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection.toLowerCase() == "paper") {
      scoreComputer++;
      resultDiv.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
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
      resultDiv.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
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
      resultDiv.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection.toLowerCase() == "scissors") {
      resultDiv.innerHTML = `Tie!`;
    }
  }
  

  scorePlayerDiv.innerHTML = scorePlayer;
  scoreComputerDiv.innerHTML = scoreComputer;


  */
}
