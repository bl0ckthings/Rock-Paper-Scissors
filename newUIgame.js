let playerScore = 0;
let computerScore = 0;
let playerChoice;

const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.result');
const player = document.querySelector('#player-score');
player.textContent = `Player Score : ${playerScore}`;
const computer = document.querySelector('#computer-score');
computer.textContent = `Computer Score : ${computerScore}`;







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
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        output.textContent = `Player win the round ! The ${playerSelection} beats the ${computerSelection} !`;
        playerScore++;
        player.textContent = `Player Score : ${playerScore}`;



    } else if (playerSelection == computerSelection) {
        output.textContent = (`It's a tie ! ${computerSelection} against ${computerSelection}`);

    } else {
        output.textContent = (`Computer win the round ! The ${computerSelection} beats the ${playerSelection}`);
        computerScore++;
        computer.textContent = `Computer Score : ${computerScore}`;
    }

    if (playerScore == 5) {
        output.textContent = `You won ! What a chad ! The score final  is ${playerScore} - ${computerScore} !`;
        output.style.color = 'white';
        output.style.border = '1px solid black';
        output.style.background = 'black';
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score : ${playerScore}`;

        computer.textContent = `Computer Score : ${computerScore}`;



    } else if (computerScore == 5) {
        output.textContent = `Ugh ! You lost ! You suck bro. The final score is ${playerScore} - ${computerScore} !`;
        output.style.color = 'white';
        output.style.border = '1px solid black';
        output.style.background = 'black';
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score : ${playerScore}`;
        computer.textContent = `Computer Score : ${computerScore}`;



    }


}



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerChoice = buttons[i].id;
        console.log(playRound(playerChoice));

    })
}


