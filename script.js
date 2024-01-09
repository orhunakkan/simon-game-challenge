// Array to keep track of game sequence.
let gameSequence = [];
// Array to keep track of player sequence.
let playerSequence = [];
// Variable to keep track of level.
let level = 0;

// Object containing audio files for respective colors.
const sound = {
    green: new Audio('sounds/green.mp3'),
    red: new Audio('sounds/red.mp3'),
    yellow: new Audio('sounds/yellow.mp3'),
    blue: new Audio('sounds/blue.mp3'),
    wrong: new Audio('sounds/wrong.mp3')
};

// Function to play sound of a particular color.
function playSound(color) {
    sound[color].play();
}

// jQuery event to activate startGame function when start-button is clicked.
$("#start-button").click(function () {
    startGame();
});

// Function to start the game.
function startGame() {
    gameSequence = [];
    playerSequence = [];
    level = 0;
    addStepToGameSequence();
}

// Function to add a random color into the game sequence array.
function addStepToGameSequence() {
    const colors = ['green', 'red', 'yellow', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSequence.push(randomColor);
    level++;
    lightUp(gameSequence[gameSequence.length - 1]); // Light up only the new step
}

// Function to visually highlight a color element on the UI and play corresponding sound.
function lightUp(color) {
    $("#" + color).css("opacity", 1); // jQuery method to change CSS property
    playSound(color);
    // Timeout to revert opacity after 300ms
    setTimeout(function () {
        $("#" + color).css("opacity", 0.6);
    }, 300);
}

// jQuery event to push clicked color into player sequence array and call function to check the sequence.
$(".game-button").click(function () {
    const colorClicked = $(this).attr("id");
    playerSequence.push(colorClicked);
    lightUp(colorClicked);
    playSound(colorClicked);
    checkPlayerSequence(playerSequence.length - 1);
});

// Function to check if player sequence matches game sequence at each level.
function checkPlayerSequence(currentLevel) {
    if (playerSequence[currentLevel] === gameSequence[currentLevel]) {
        if (playerSequence.length === gameSequence.length) {
            setTimeout(function () {
                playerSequence = [];
                addStepToGameSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');
        alert("Wrong sequence! Game over!");
        startGame();
    }
}