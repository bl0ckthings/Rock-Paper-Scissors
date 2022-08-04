

const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

const computerPlay = getComputerChoice(choice);
const playerSelection = prompt('Choose your weapon !');

function playRound(playerSelection, computerPlay) {

    let result = "";

    if ((playerSelection == 'rock' && computerPlay == 'scissors') ||
        (playerSelection == 'paper' && computerPlay == 'rock') ||
        (playerSelection == 'scissors' && computerPlay == 'paper')) {
        result = ('You win ! ' + playerSelection + ' beats ' + computerPlay);

    } else if (playerSelection == computerPlay) {
        result = ("Tie ! You played the same choice");
    } else {
        result = ('You lose ! ' + computerPlay + ' beats ' + playerSelection)
    }
    return result;
}

console.log('Player play : ' + playerSelection);
console.log('Computer play : ' + computerPlay);

console.log(playRound(playerSelection, computerPlay));





















// function playRound(playerSelection, computerSelection) {
//     if ("Rock" == "Paper" && "Scissors" == "paper" && "scissors" == "rock") {
//         console.log("You Lose ! " + playerSelection + " beats" + computerSelection);
//     } else (console.log("You Won !"));
// }

// const playerSelection = "Rock";


// console.log(playRound(playerSelection, computerSelection));