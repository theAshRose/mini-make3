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
var scoreboard = document.querySelector("#wins-losses")
var gameText = document.querySelector("#game-text")
var countdownTime = document.querySelector("#timer")
var startButton = document.querySelector("#start")
var gameStatus = document.getElementById("#game-status")
var gameInput = document.querySelector("#game-input")


startButton.addEventListener("click")
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

