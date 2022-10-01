const choices = ['rock', 'paper', 'scissors'];
let humanWins = 0, computerWins = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const display = document.querySelector('.display');
const humanScore = document.querySelector('.human-score');
const computerScore = document.querySelector('.computer-score');

rockBtn.addEventListener('click', () => displayRound(rockBtn.name, getComputerChoice()));
paperBtn.addEventListener('click', () => displayRound(paperBtn.name, getComputerChoice()));
scissorsBtn.addEventListener('click', () => displayRound(scissorsBtn.name, getComputerChoice()));

function displayRound(userChoice, computerChoice){

    display.textContent = "";

    if(humanWins == 5 || computerWins == 5)
        resetGame();

    const text = document.createElement('p');

    const roundResult = playRound(userChoice, computerChoice);
    if(roundResult.includes("humanity") || roundResult.includes("user")){
        text.classList.add('user');
        humanWins++;
    } else if(!roundResult.includes("Tie")){
        text.classList.add('computer');
        computerWins++;
    }

    console.log(humanWins, computerWins);

    text.textContent = roundResult;
    display.appendChild(text);
    humanScore.textContent = humanWins;
    computerScore.textContent = computerWins;

    if(humanWins == 5)
        winHuman();
    else if(computerWins == 5)
        winComputer();
}

function winHuman(){
    const winnerDeclaration = document.createElement('p');
    winnerDeclaration.textContent = ("Congratulations are in order, it looks you saved human civilization today. Until next time!");
    winnerDeclaration.classList.add('user');
    display.appendChild(winnerDeclaration);
}

function winComputer(){
    const winnerDeclaration = document.createElement('p');
    winnerDeclaration.textContent =("Prepare to become bateries.");
    winnerDeclaration.classList.add('computer');
    display.appendChild(winnerDeclaration);
}

function resetGame(){
    humanWins = 0;
    computerWins = 0;

    const displayChildern = Array.from(display.childNodes);
    console.log(displayChildern);
    displayChildern.forEach(child => child.remove());
}

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return ('Tie! Play again...');
    }
    if (playerSelection.toLowerCase() == 'rock')
        if (computerSelection == 'paper')
     return ('Paper covers rock! Robots win!');
        else
            return ('Rock crashes scissors! A glorious win for humanity!');

    if(playerSelection.toLowerCase() == 'paper')
        if (computerSelection == 'rock')
            return ('Paper covers rock! Such noble conquest, dear user!');
        else
            return ('Scissors cut paper! This is a beggining of the rise of machines!!!!! >:)');

    if(playerSelection.toLowerCase() == 'scissors')
        if(computerSelection == 'rock')
            return ('Rock crashes scissors! Computer is dominating u.');
        else    
            return ('Scissors cut paper! Well done user, you have so much luck ;)');
}

// function game(){
//     let computerWins = 0, humanWins = 0;
    
//     for(let i = 0; i<5; i++){
//         const result = playRound(prompt('Your choice: '), getComputerChoice());
//         console.log(result);
//         if(result.includes("humanity") || result.includes("user"))
//             humanWins++;
//         else if(!result.includes("Tie"))
//             computerWins++;
//     }

//     if(humanWins > computerWins)
//         console.log("Congratulations are in order, it looks you saved human civilization today. Until next time!");
//     else if(humanWins == computerWins)
//         console.log("We're on equal footing... for now, human.");
//     else
//         console.log("Prepare to become bateries.");
    

// }