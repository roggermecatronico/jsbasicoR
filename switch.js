//how to use switch?
switch (varName)
{
   case "afshin":
    console.log("soy la primera opcion")
    break;
   case "saeed":
    console.log("soy la segunda opcion")
    break;
   case "larry": 
       alert('Hey');
       break;

   default: 
       alert('Default case');
}

//how to use if?
if ( condition ) {
   // Do stuff if condition is true
} else {
   // Do stuff if condition is not true
}


if ( condition ) {
   // Do stuff if condition is true
} else if ( differentCondition ) {
   // Do stuff if differentCondition is true
} else {
   // Do stuff if neither condition nor differentCondition is true
}


if ( condition ) {
   // Do stuff
} else if ( condition2 ) {
   // etc
} else if ( condition3 ) {
   // etc
} else if ( condition4 ) {
   // etc
} else {
   // etc
}


//how to make game rock paper and scissor using switch?
const computerPlay = () => {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerSelection = options[randomNumber];
  return computerSelection;
}

let round = 0;

let addRound = () => round += 1;

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = computerPlay();

  addRound();

  switch (playerSelection + computerSelection) {
    case 'RockRock':
        playerScore = 0;
      computerScore = 0;
      return 'Tie Game!';
      break;
    case 'PaperPaper':
        playerScore = 0;
      computerScore = 0;
      return 'Tie Game!';
      break;
    case 'ScissorsScissors':

      playerScore = 0;
      computerScore = 0;
      
      return 'Tie Game!';
      break;
    case 'RockScissors':
        playerScore += 1;
      return `${playerSelection} beats ${computerSelection}, You Won!`;
      break;
    case 'PaperRock':
        playerScore += 1;
      return `${playerSelection} beats ${computerSelection}, You Won!`;
      break;
    case 'ScissorsPaper':
        playerScore += 1;
        return `${playerSelection} beats ${computerSelection}, You Won!`;
        break;
    case 'ScissorsRock':
        computerScore += 1;
        return `${computerSelection} beats ${playerSelection}, Computer Won :(`;
        break;
    case 'RockPaper':
        computerScore += 1;
        return `${computerSelection} beats ${playerSelection}, Computer Won :(`;
        break;
    case 'PaperScissors':
      computerScore += 1;
      return `${computerSelection} beats ${playerSelection}, Computer Won :(`;
      break;
    default:
        console.log("Error")
  }
}

console.log(playRound());
console.log(playerScore, computerScore, round);

console.log(playRound());
console.log(playerScore, computerScore, round);
console.log(playRound());
console.log(playerScore, computerScore, round);





