const playerChoiceImage = document.getElementById('player-choice');
const aiChoiceImage = document.getElementById('ai-choice');
const playerScoreBox = document.getElementById('player-score');
const aiScoreBox = document.getElementById('ai-score');
const gameInfo = document.getElementById('game-info');
const gameButtons = document.querySelectorAll('.game-btn');
var aiScore = 0;
var playerScore = 0;
const choices =['ROCK', 'PAPER', 'SCISSORS'];
var playerChoice, aiChoice;

for(let i=0; i <= 2; i++) {
    gameButtons[i].addEventListener('click', function(){
        playGame(gameButtons[i].id);
    })
}

gameButtons[3].addEventListener('click', resetGame)

function resetGame(){
    aiScore = 0;
    playerScore= 0;
    aiScoreBox.innerText = aiScore;
    playerScoreBox.innerText = playerScore;
    playerChoiceImage.src = 'images/Player.png'
    aiChoiceImage.src = 'images/Ai.png'
    gameInfo.innerText="Welcome!"
    gameInfo.style.backgroundColor="Green"

};

function playGame(playerChoiceA) {
    playerChoice = playerChoiceA
    aiChoice = choices[Math.floor(Math.random() * 3)];
    setUI(playerChoice, aiChoice);
    gameResult();
}

function setUI(playerChoice, aiChoice){
    if(playerChoice == 'ROCK') {
        playerChoiceImage.src ='images/Rock.png';
    }else if(playerChoice == 'SCISSORS') {
        playerChoiceImage.src ='images/Scissors.png';
    }else if(playerChoice == 'PAPER') {
        playerChoiceImage.src ='images/Paper.png';
    }
    if(aiChoice == 'ROCK') {
        aiChoiceImage.src ='images/Rock.png';
    }else if(aiChoice == 'SCISSORS') {
        aiChoiceImage.src ='images/Scissors.png';
    }else if(aiChoice == 'PAPER') {
        aiChoiceImage.src ='images/Paper.png';
    }
}


function gameResult(){
    if(playerChoice == aiChoice) {
        gameInfo.innerText = "Draw!";
        gameInfo.style.backgroundColor="Yellow";
        
    } else if (playerChoice == 'ROCK' && aiChoice == 'SCISSORS') {
        gameInfo.innerText = "YOU WIN!";
        gameInfo.style.backgroundColor="Green";

        playerScore++;
        playerScoreBox.innerText = playerScore;
    }else if (playerChoice == 'PAPER' && aiChoice == 'ROCK') {
        gameInfo.innerText = "YOU WIN!";
        gameInfo.style.backgroundColor="Green";

        playerScore++;
        playerScoreBox.innerText = playerScore;
    }else if (playerChoice == 'SCISSORS' && aiChoice == 'PAPER') {
        gameInfo.innerText = "YOU WIN!";
        gameInfo.style.backgroundColor="Green";

        playerScore++;
        playerScoreBox.innerText = playerScore;
    }else{
        gameInfo.innerText = "YOU LOSE!";
        gameInfo.style.backgroundColor="Red";

        aiScore++;
        aiScoreBox.innerText = aiScore;
    }

}



