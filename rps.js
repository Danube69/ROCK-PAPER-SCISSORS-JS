function getComputerChoice(){
    const randomnum = (Math.floor(Math.random()*3))
    if (randomnum===0){
    return 'rock';
    }
    else if (randomnum===1) {
     return 'paper';
    }
    else if (randomnum===2){
    return 'scissors';
    }
    }

    console.log(getComputerChoice());

    playerSelection = prompt("Choose Rock, Paper, or Scissors");


function playRound(playerSelection) {
const playerSelec = playerSelection.toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

if (playerSelec === computerSelection) {
return "That's a tie try again!!";
}
else if(playerSelec === "paper" && computerSelection === "rock") {
return "YOU WIN!!! Paper beats Rock.";
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
    return "YOU WIN!!! Scissors cuts through Paper.";
}
}


function game() {
    for (let i = 0; i < 5; i++) {
 console.log(playRound(playerSelection))

}
}
game()