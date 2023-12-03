//getComputerChoice will randomly return 'Rock', 'Paper' or 'Scissors'
// it has to have 3 strings - rock, paper and scissors
// so creating an array may be a good option
// strings have to be returned randomly
// So I'm gonna make random number between 0 - 2 and return string from array with given random ID

function getComputerChoice() {
  const OPTIONS = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return OPTIONS[randomIndex];
}