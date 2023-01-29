const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const signs = [ROCK, PAPER, SCISSORS]
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    return signs[choice];   
}
 console.log(getComputerChoice());

function PlayerSelection(event) {
  const PlayerSelect = event.target.button
  return signs.indexOf(PlayerSelect);


}

let playerScore = 0;
let computerScore = 0;

function DisplayScore() {
  const scores = document.querySelector('.display-score');
  scores.innerText = `${playerScore} - ${computerScore}`; 

}

function playRound(computerSelection, PlayerSelection) {
  const displayResult = document.querySelector('.display-result'); 
  const displayOperator = document.querySelector('.display-operator'); 
  if (computerSelection === ROCK && PlayerSelection === SCISSORS) { //rock beats scissors 
    computerScore++; 
    displayResult.innerText = 'you lose, try again'; 
  } else if (PlayerSelection === ROCK && getComputerChoice === SCISSORS) {
    playerScore++; 
    displayResult.innerText = 'you win!'; 
  } else if (computerSelection === PlayerSelection) {
    displayResult.innerText = 'Its a tie'; 
  } else if (getComputerChoice > PlayerSelection) {
    computerScore++; 
    displayResult.innerText = 'you lose, try again!'; 
  } else {
    playerScore++; 
    displayResult.innerText = 'you win!'; 
  }
}


function playGame(gameFunc, event) {
  const computerSelection = getComputerSelection(); 
  const playerSelection = getPlayerSelection(event); 
  gameFunc(computerSelection, playerSelection); 
  displayScore(); 
  checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore); 
    resetGame(); 
  }
}

function declareWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    console.log('Its a tie! Both winners') ; 
  } else if (playerScore > computerScore) {
    console.log('You won the game!') ; 
  } else {
    console.log('You lost the game!');
  }
}

function resetGame() {
  playerScore = 0; 
  computerScore = 0;
}

const moveButtons = document.querySelectorAll('.move-button'); 
Array.from(moveButtons).forEach(button => {
  button.addEventListener('click', function(e) {
    playGame(playRound, e); 
    console.log(e); 
  }); 
})

function clickListener(event) {

    if(event.target.tagName !== "BUTTON") {
        return;
    }
    const playerSelec = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelec,computerSelection);
    }


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


rockButton.addEventListener('click', () => {
    playRound('rock');
  });
  
  paperButton.addEventListener('click', () => {
    playRound('paper');
  });

  scissorsButton.addEventListener('click', () => {
    playRound('scissors');
  });



/*rockButton.addEventListener("click", clickListener);
paperButton.addEventListener("click", clickListener);
scissorsButton.addEventListener("click", clickListener);*/

/*else if(playerSelec === "paper" && computerSelection === "rock") {
playerWin();
}
else if(playerSelec === "rock" && computerSelection === "paper") {
return "YOU LOSE!!! Rock loses to Paper."; 
}
else if (playerSelec === "rock" && computerSelection === "scissors") {
return "YOU WIN!!! Rock decimates Scissors.";
}
else if (playerSelec === "scissors" && computerSelection === "rock") {
return "YOU LOSE!!! Scissors cant slice Rock.";
}
else if (playerSelec === "paper" && computerSelection === "scissors") {
return "YOU  Lose!!! Scissors decimates Paper.";
}
else if (playerSelec === "scissors" && computerSelection === "paper") {
    return "YOU WIN!!! Scissors cuts through Paper.";*/
  
/* let scoreWindow = document.getElementsByClassName('.scores');
let playerScore = 0;
let computerScore = 0;

scoreWindow.innerHTML = playerScore + ':' + computerScore; 

if (playerSelec === computerSelection) {
  userScore++;
  computerScore++;
} else if ((playerSelec === ROCK && computerSelection === SCISSORS) ||
(playerSelec === ROCK && computerSelection === ROCK) ||
(playerSelec === SCISSORS && computerSelection === PAPER)) {
playerScore++;
} else {
computerScore++;
}

scoreWindow.innerHTML = playerScore + ' : ' + computerScore;
return (computerScore, playerScore); */

