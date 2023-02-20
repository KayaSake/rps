
const div = document.createElement("div");
div.id = "div";
document.body.appendChild(div);

const rock = document.createElement('button');
rock.onclick = chooseRock;
rock.innerText = 'Rock';
rock.id = 'rock';
div.appendChild(rock);

const paper = document.createElement('button');
paper.onclick = choosePaper;
paper.innerText = 'Paper';
paper.id = 'paper';
div.appendChild(paper);

const scissors = document.createElement('button');
scissors.onclick = chooseScissors;
scissors.innerText = 'Scissors';
scissors.id = 'scissors';
div.appendChild(scissors);

const play = document.createElement('button');
play.onclick = playRound;
play.innerText = `play`;
play.id = play;
div.appendChild(play);

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
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`)}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}` )
    }else {alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)}
}

function chooseRock() {
    const computerChoice = getComputerChoice();
    const playerChoice = "rock";
    if(computerChoice == playerChoice){
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`)}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        return alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}` )
    }else {return alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)}
}

function choosePaper() {
    const computerChoice = getComputerChoice();
    const playerChoice = "paper";
    if(computerChoice == playerChoice){
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`)}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        return alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}` )
    }else {return alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)}
}

function chooseScissors() {
    const computerChoice = getComputerChoice();
    const playerChoice = "scissors";
    if(computerChoice == playerChoice){
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`)}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        return alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}` )
    }else {return alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)}
}