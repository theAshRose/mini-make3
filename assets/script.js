//add event listener click for game start
//add counter for wins/losses
//add if conditionals for wins/losses
//add timer for game
//input for user to guess word
//lose game when timer runs out or wrong word is guessed
//array of words stored in local files for the game
//add key event for user guess
//when user correctly guess letter, fill in that letter where it goes
//message appearing for win/loss, timer stop
//timer reset on start button click
//win/loss counts stored in local storage
var words = ["globe", "oatmeal", "chili", "petunia", "locomotive"]
var scoreWin = document.querySelector("#wins")
var scoreLoss = document.querySelector("#losses")
//var gameText = document.querySelector("#game-text")
var countdownTime = document.querySelector("#timer")
var startButton = document.querySelector("#start")
var gameStatusInput = document.querySelector("#game-status-input")
var gameStatus = ["Use keyboard to start guessing!", "Game in progress", "You won!", "You lost!"]
var gameInput = document.querySelector("#game-input")

//STARTING
gameStatusInput.textContent = gameStatus[0];
startButton.addEventListener("click", theGame);

scoreLoss.textContent = "Losses: " + localStorage.getItem("scoreLoss");
//TIMER FUNCTION
function gameTime() {
    var timeLeft = 11;
    
    var timeInterval = setInterval(function(){
    
        timeLeft--;
        countdownTime.textContent = timeLeft + " seconds!";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            localStorage.setItem("scoreLoss", scoreLoss++);
        }
}, 1000);

}


//GAME FUNCTION
function theGame(){
gameTime();
gameStatusInput.textContent = gameStatus[1];


}

//variables:
//available words for game
//scoreboard
//displayed current word in game
//key input
//button
//wins
//losses
//counter/timer
//display section
//input section

//local storage: 
//potential words to guess
//user scores

//data attributes: 
//current word in game

//event listeners
//key events for game
//button click for game start

//timers:
//timer associated with game start
//timer association with game loss and win

