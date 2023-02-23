const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is my rock, paper, scissors, game!';
container.appendChild(content);

const game = document.querySelector('#game');
game.innerText = "game";
game.addEventListener('click', () => {
  document.getElementById("result").innerHTML = "Choose you weapon!";
})


const rock = document.querySelector('#rock');
rock.innerText = "rock";
rock.addEventListener('click', () => {
  playRound(playerChoice="rock");
  declareWinner();
})

const paper = document.querySelector('#paper');
paper.innerText = "paper";
paper.addEventListener('click', () => {
  playRound(playerChoice="paper");
  declareWinner();
})

const scissors = document.querySelector('#scissors');
scissors.innerText = "scissors";
scissors.addEventListener('click', () => {
  playRound(playerChoice="scissors");
  declareWinner();
})

const choices = ["rock", "paper", "scissors"];

let playerChoice = "";

function getComputerChoice() {
    computerChoice =  choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }

  let playerScore = "0";
  document.getElementById("playerScore").innerHTML = playerScore;
  let computerScore = 0;
  document.getElementById("computerScore").innerHTML = computerScore;

function playRound() {
    getComputerChoice();
    let result = "";
    document.getElementById("result").innerHTML = result;
    if(computerChoice == playerChoice){
        result = "tie";
    return alert(`Tie! you chose ${playerChoice}, computer chose ${computerChoice}`,)
    }else if (computerChoice == "rock" && playerChoice == "paper"
    || computerChoice == "paper" && playerChoice == "scissors"
    || computerChoice == "scissors" && playerChoice == "rock"){
            result = "win";
            document.getElementById("result").innerHTML = result;
            document.getElementById("playerScore").innerHTML = playerScore++;

            console.log(result);
        alert(`Win! you chose ${playerChoice}, computer chose ${computerChoice}`,)
    }else {
            result = "lose";
            document.getElementById("result").innerHTML = result;
            console.log(result);
            document.getElementById('computerScore').innerHTML = computerScore ++;
        alert(`Lose! you chose ${playerChoice}, computer chose ${computerChoice}`)
    }
}
function declareWinner (){
     if(playerScore == 5){
        console.log("YOU WON IT ALL!")
    }else if(computerScore == 5){
        console.log("Better luck next time!")}else{ 
            console.log("keep on going...")
        }
    }