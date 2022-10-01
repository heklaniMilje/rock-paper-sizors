const choices = ['rock', 'paper', 'scissors'];

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

function game(){
    let computerWins = 0, humanWins = 0;
    
    for(let i = 0; i<5; i++){
        const result = playRound(prompt('Your choice: '), getComputerChoice());
        console.log(result);
        if(result.includes("humanity") || result.includes("user"))
            humanWins++;
        else if(!result.includes("Tie"))
            computerWins++;
    }

    if(humanWins > computerWins)
        console.log("Congratulations are in order, it looks you saved human civilization today. Until next time!");
    else if(humanWins == computerWins)
        console.log("We're on equal footing... for now, human.");
    else
        console.log("Prepare to become bateries.");
    

}