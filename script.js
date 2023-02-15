
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {return"rock"}
    else if(computerChoice === 1) {return"paper"}
    else {return"scissors"};
}

function getPlayerChoice() {
    let playerChoice = prompt ("Choose you weapon");
    return (playerChoice);
}

function playRound(playerChoice, computerChoice) {
   
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if ((playerChoice == rock) & (computerChoice == scissors)
    || (playerChoice == paper) & (computerChoice == rock)
    || (playerChoice == scissors) & (computerChoice == paper))
    {return(`YOU WIN!!! You chose ${playerChoice}, Computer chose ${computerChoice}`)}
    else if (playerChoice = computerChoice) {
        return(`It's a tie! You both chose ${playerChoice}`)
    }else {return(`YOU Lose!!! You chose ${playerChoice}, Computer chose ${computerChoice}`)}
}