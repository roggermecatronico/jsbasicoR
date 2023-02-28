//how to create play a rock paper scissor automatically?
let playRoundResult;
let playerScore = 0;
let computerScore = 0;

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    let choice = Math.floor(Math.random() * 3) + 1;

    function getComputerChoice() {
      if (choice === 1) return 'ROCK';
      if (choice === 2) return 'PAPER';
      return 'SCISSOR';
    }

    function playRound(playerSelection, computerSelection) {
      const win = (computerSelection === 'ROCK' && playerSelection === 'PAPER') ||
        (computerSelection === 'SCISSOR' && playerSelection === 'ROCK') ||
        (computerSelection === 'PAPER' && playerSelection === 'SCISSOR') ||
        (computerSelection === 'SCISSOR' && playerSelection === 'PAPER');
      if (computerSelection === playerSelection) return 'Tie!';
      if (win) {
        playerScore++;
        return 'You win!';
      }
      computerScore++;
      return 'You lose!';
    }

    let player = prompt('pick', '');
    const playerSelection = player.toUpperCase();
    const computerSelection = getComputerChoice();
    playRoundResult = playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Player pick: ${playerSelection}`);
    console.log(`Computer pick: ${computerSelection}`);
  }
}

playGame();

console.log(`Computer: ${computerScore}`);
console.log(`Player: ${playerScore}`);



//Source: https://stackoverflow.com/questions/74697736


