let rps = ['rock','paper','scissors'];
let computerChoice = 0;
let playerChoice = 0;
let playerScore = 0;
let computerScore = 0;
let message = "aahh im not changed!";
let OverallScore = playerScore + " " + computerScore;






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
    console.log(playerChoice + '  ' + computerChoice);
    if (playerChoice === computerChoice) {
        //if the player and the computer choose the same neither wins
        //console.log("It's a tie! " + playerChoiceText + " doesn\'t beat " + playerChoiceText);
        message = "it's a tie!";
    }
    else if (computerChoice === 0 && playerChoice === 2) {
        //if the computer chooses rock and player scissors the computer wins
        message = "Computer wins! rock beats scissors!";
        computerScore = ++computerScore;
    } 
    else if (computerChoice === 1 && playerChoice === 0) {
        //if computer chooses paper and the player rock the computer wins
        message = "Computer wins! paper beats rock!";
        computerScore = ++computerScore;
    }
    else if (computerChoice === 2 && playerChoice === 1) {
        //if computer chooses scissors and the player paper the computer wins
        message = "Computer wins! scissors beat paper!";
        computerScore = ++computerScore;
    }
    else if (playerChoice === 0 && computerChoice === 2) {
        //if player chooses rock and the computer scissors the player wins
        message = "Player wins! rock beats scissors!";
        playerScore = ++playerScore;
    }
    else if (playerChoice === 1 && computerChoice === 0) {
        //if player chooses paper and the computer rock the player wins
        message = "Player wins! paper beats rock!";
        playerScore = ++playerScore;
    }
    else if (playerChoice === 2 && computerChoice === 1) {
        //if player chooses scissors and the computer paper the player wins
        message = "Player wins! scissors beat paper!";
        playerScore = ++playerScore;
    }
    else {
        console.log("WTF");

    
    };
}

//function game() {
    
 //   computerPlay();
 //   askPlayer(playerChoiceText);
 //   singleRound(playerChoice, computerChoice);
//    console.log("Player score: " + playerScore);
  //  console.log("Computer score: " + computerScore);
//};

//for (let i =1 ;i <= 5; ++i) {
//    console.log('------------------');
//    playerChoiceText = prompt("Please choose: rock, paper or scissors", 'paper');
//    playerChoiceText = playerChoiceText.toLowerCase();
//    console.log("Round number: " + i);
//    game();
//    console.log('------------------');
//};
//the part that plays the game five times


//set div text show the score
const divRef = document.getElementById("message")
divRef.textContent = "Div";

const scoreRef = document.getElementById("Score")
scoreRef.textContent = OverallScore;



function SetScoreDisplay () {
    if (playerScore < computerScore) {
    message = "computer wins!";
    OverallScore = playerScore + " " + computerScore;
    scoreRef.textContent = OverallScore;
    }
    else if (playerScore > computerScore) {
    message = "player wins!";
    OverallScore = playerScore + " " + computerScore;
    scoreRef.textContent = OverallScore;
    }
    else {
    message = "I hate edge cases, It's a tie >:-(";
    OverallScore = playerScore + " " + computerScore;
    scoreRef.textContent = OverallScore;
    }
    //console.log(message);

    scoreRef.textContent = OverallScore;
};

function checkScore () {
    if (playerScore >= 5 || computerScore >= 5){
        scoreRef.textContent = message;
    }
        return
};




// Makes a ref and add listener to buttons
// also the reaon it didnt work was single round was getting computer choice without letting the computer play so it was always zero

const btnRock = document.querySelector("#Rock");
btnRock.addEventListener('click', () => {
    computerPlay();
    singleRound(0, computerChoice);
    divRef.textContent = message;
    SetScoreDisplay();
    checkScore();
});

const btnPaper = document.querySelector('#Paper');
btnPaper.addEventListener('click', () => {
    computerPlay();
    singleRound(1, computerChoice);
    divRef.textContent = message;
    SetScoreDisplay();
    checkScore();
});

const btnScissors = document.querySelector('#Scissors');
btnScissors.addEventListener('click', () => {
    computerPlay();
    singleRound(2, computerChoice);
    divRef.textContent = message;
    SetScoreDisplay();
    checkScore();
});













