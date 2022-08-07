// ROCK PAPER SCISSORS WORKING IN CONSOLE ONLY;



// function getComputerChoice() {

//     return choice[Math.floor(Math.random() * choice.length)];


// }



function getComputerChoice() {
    let computerNumber = random(3);
    let computerGuess = ""
    switch (computerNumber) {
        case 1:
            computerGuess = 'rock';
            break;
        case 2:
            computerGuess = 'paper';
            break;
        case 3:
            computerGuess = 'scissors';
            break;

        default:
            break;
    }
    return computerGuess;
}


const computerPlay = getComputerChoice();





function playRound(playerSelection, computerSelection) {

    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = ('You win ! ' + playerSelection + ' beats ' + computerSelection);

    } else if (playerSelection == computerSelection) {
        result = ("It's a tie !");
    } else {
        result = ('You lose ! ' + computerSelection + ' beats ' + playerSelection);
    }
    return result;
}




function game() {
    let roundResult = '';
    let playerScore = 0;
    let computerScore = 0;
    let playerTurn = '';
    let computerTurn = '';
    // let playerInput = prompt('Choose one among those choices :\nRock\nPaper\nScissors').toLowerCase().trim();


    for (i = 0; i < 5; i++) {

        do {
            var playerInput = prompt('Choose one among those choices :\nRock\nPaper\nScissors').toLowerCase().trim();
        } while (playerInput == '' || playerInput == null)

        computerTurn = computerPlay;
        playerTurn = playerInput;
        roundResult = playRound(playerInput, computerPlay);

        if (roundResult.includes("You win")) {
            playerScore++;
            console.log(roundResult + " The score is " + playerScore + " - " + computerScore);

        } else if (roundResult.includes("You lose")) {
            computerScore++;
            console.log(roundResult + " The score is " + playerScore + " - " + computerScore);
        }
        else if (roundResult.includes("tie")) {
            i -= 1;
            console.log(roundResult + " The score is " + playerScore + " - " + computerScore);
        }
        if (i < 4) {
            confirm("Wanna play again ?");
        }

    }
    if (playerScore > computerScore) {
        console.log("Game Over ! Player win ! The final score is " + playerScore + " - " + computerScore + " !");
    } else if (playerScore < computerScore) {
        console.log("Game Over ! Computer win ! The final score is " + computerScore + " - " + playerScore + " !");
    } else {
        console.log("It's a tie ! The final score is " + playerScore + ' - ' + computerScore);
    }


}
console.log(game(computerPlay));



//  Helper function

function random(Number) {
    return Math.floor(Math.random() * Number + 1);
}
