const choices = ["rock", "paper", "scissors"];

console.log("Testing, testing, 1, 2, 3...");

function getComputerChoice() {
    computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }
  
function getPlayerChoice() {
    let playerChoice = prompt("choose rock, paper, or scissors");
    return playerChoice;
}
function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    if(computerChoice == playerChoice){
    return(`Tie, Computer chose ${computerChoice}, you chose ${playerChoice}`)}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        return(`You win! Computer chose ${computerChoice}, you chose ${playerChoice}`)
    }else {return(`You lose, computer chose ${computerChoice}, you shoce ${playerChoice}`)}
}