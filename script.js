const buttons = document.querySelectorAll(".play-buttons > button");
const roundResult = document.querySelector('.round-result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resetButton = document.querySelector('#reset-button');
const winnerMessage = document.querySelector('.winner-message');

let playerScore = 0;
let computerScore = 0;

for (let button of buttons) {
  button.addEventListener('click', () => {
    let playerSelection = '';
    switch (button.id){
      case 'rock':
        playerSelection = 'Rock';
        break;
      case 'paper':
        playerSelection = 'Paper'
        break;
      case 'scissors':
        playerSelection = 'Scissors'
        break;
    }
    playRound(playerSelection, getComputerChoice());
    checkGameEnd();
  });
}

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  buttons.forEach((button) => button.disabled = false);
  displayScore();
  roundResult.textContent = 'Make your choice!';
  winnerMessage.textContent = '';
});

function getComputerChoice() {
  const OPTIONS = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * 3);
  return OPTIONS[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResult.textContent = `It's a tie! ${playerSelection} ties with ${computerSelection}.`;
    displayScore();
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
      playerScore++;
      roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
      displayScore();
  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
      computerScore++
      roundResult.textContent = `You lose! ${playerSelection} is beaten by ${computerSelection}!`;
      displayScore();
  } else {
    return 'Upsss, something went wrong!';
  }
}

function displayScore() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function checkGameEnd() {
  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => button.disabled = true);
    if (playerScore === 5) {
      winnerMessage.textContent = 'Congratulations! You are the winner!'
    } else if (computerScore === 5) {
      winnerMessage.textContent = 'Unfortunately the computer beats you. :('
    }
  }
}