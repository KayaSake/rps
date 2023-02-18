
const div = document.createElement("div");
div.id = "div";
document.body.appendChild(div);

const btn = document.createElement('button');
btn.onclick = playRound;
btn.innerText = 'Play Round';
btn.id = 'btn';
div.appendChild(btn);

const choices = ["rock", "paper", "scissors"]; {

}

console.log("Testing, testing, 1, 2, 3...");

function getComputerChoice() {
    computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }
  
function getPlayerChoice() {
    let playerChoice = prompt("choose rock, paper, or scissors");
    playerChoice.toLocaleLowerCase;
    return playerChoice;
}
function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    if(computerChoice == playerChoice){
    return('Tie! you chose ${playerChoice}, computer chose ${computerChoice}')}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        return(`Win! you chose ${playerChoice}, computer chose ${computerChoice}` )
    }else {return(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)}
}

