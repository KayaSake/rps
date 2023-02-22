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

const paper = document.querySelector('#paper');
paper.innerText = "paper";
paper.addEventListener('click', () => {
  playRound(playerChoice="paper");
})

const scissors = document.querySelector('#scissors');
scissors.innerText = "scissors";
scissors.addEventListener('click', () => {
  playRound(playerChoice="scissors");
})

const choices = ["rock", "paper", "scissors"];

let playerChoice = "";

function getComputerChoice() {
    computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }

function playRound() {
    getComputerChoice();
    let result = "";
    if(computerChoice == playerChoice){
        result = "tie";
        document.getElementById("result").innerHTML = result;
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`,)
    }else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
            result = "win";
            document.getElementById("result").innerHTML = result;
            console.log(result);
        alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}`,)
    }else {
            result = "lose";
            document.getElementById("result").innerHTML = result;
            console.log(result);
        alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)
    }
}


function playGame() {
    playRound();
}

const game = document.querySelector('#game');
game.innerText = "game";
game.addEventListener('click', () => {
  document.getElementById("result").innerHTML = "Choose you weapon!";
})