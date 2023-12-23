const buttons = document.querySelectorAll(".play-buttons > button");
const roundResult = document.querySelector('.round-result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');


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
  });
}

function getComputerChoice() {
  const OPTIONS = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * 3);
  return OPTIONS[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let win = `You win! ${playerSelection} beats ${computerSelection}!`;
  let failure = `You lose! ${playerSelection} is beaten by ${computerSelection}!`;
  let tie = `It's a tie! ${playerSelection} ties with ${computerSelection}.`;

  if (playerSelection === computerSelection) {
    roundResult.textContent = tie;
    displayScore();
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
      playerScore++;
      roundResult.textContent = win;
      displayScore();
  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
      computerScore++
      roundResult.textContent = failure;
      displayScore();
  } else {
    return 'Upsss, something went wrong!';
  }
}

function displayScore() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}