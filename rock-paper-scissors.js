let rps = ['rock','paper','scissors'];
let computerChoice = 0;
let playerChoice = 0

let playerChoiceText = prompt("Please choose: rock, paper or scissors", 'paper');
playerChoiceText = playerChoiceText.toLowerCase();


function computerPlay() {
    computerChoice = Math.floor((Math.random() * 3 ));
    return computerChoice;
}

function askPlayer(playerSelection) {
    switch(playerSelection) {
        case "rock":
        console.log('You chose rock!');
        playerChoice = 0;
        break;
        
        case "paper":
        console.log("You chose paper!");
        playerChoice = 1;
        break;

        case "scissors":
        console.log("You chose scissors!");
        playerChoice = 2
        break;
    }
}

function singleRound (playerChoice , computerChoice) {
    if (playerChoice === computerChoice) {
        //if the player and the computer choose the same neither wins
        console.log("It's a tie! " + playerChoiceText + " doesn\'t beat " + playerChoiceText);
    }
    else if (computerChoice === 0 && playerChoice === 2) {
        //if the computer chooses rock and player scissors the computer wins
        console.log("Computer wins! rock beats scissors!")
    } 
    else if (computerChoice === 1 && playerChoice === 0) {
        //if computer chooses paper and the player rock the computer wins
        console.log("Computer wins! paper beats rock!")
    }
    else if (computerChoice === 2 && playerChoice === 1) {
        //if computer chooses scissors and the player paper the computer wins
        console.log("Computer wins! scissors beat paper!")
    }
    else if (playerChoice === 0 && computerChoice === 2) {
        //if player chooses rock and the computer scissors the player wins
        console.log("Player wins! rock beats scissors!")
    }
    else if (playerChoice === 1 && computerChoice === 0) {
        //if player chooses paper and the computer rock the player wins
        console.log("Player wins! paper beats rock!")
    }
    else if (playerChoice === 2 && computerChoice === 1) {
        //if player chooses scissors and the computer paper the player wins
        console.log("Player wins! scissors beat paper!")
    }
    else {
        console.log(playerChoice);
    };
}
computerPlay();
console.log(computerChoice)
askPlayer(playerChoiceText);
singleRound(playerChoice, computerChoice);
