let playerScore = 0;
let computerScore = 0;
let playerChoice;

const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.result');




function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3 + 1); // J'ai supprimé la fonction ci dessus et j'ai implémenter le Math.random directement dans une variable dans mon switch statement.
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


function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        output.textContent = `Player Win ! The ${playerSelection} beats the ${computerSelection} !`;
        playerScore++;




    } else if (playerSelection == computerSelection) {
        output.textContent = (`It's a tie ! ${computerSelection} against ${computerSelection}`);

    } else {
        output.textContent = (`Computer Win ! The ${computerSelection} beats the ${playerSelection}`);
        computerScore++;
    }


}

console.log(computerScore);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerChoice = buttons[i].id;
        console.log(playRound(playerChoice));

    })
}




// buttons.array.forEach((button) => {
//     button.addEventListener('click', () => {

//         playerChoice = button.id;
//         console.log(playRound(playerChoice));
//     });


// });