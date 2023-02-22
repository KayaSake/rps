const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is my rock, paper, scissors, game!';
container.appendChild(content);


const rock = document.querySelector('#rock');
rock.innerText = "rock";
rock.addEventListener('click', () => {
  playRound(playerChoice="rock");
})

const choices = ["rock", "paper", "scissors"];

let playerChoice = "";

function getComputerChoice() {
    computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }

function playRound() {
    getComputerChoice();
    if(computerChoice == playerChoice){
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`)}
    else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
        alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}` )
    }else {alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)}
}