var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = function nextSequence() {
    Math.floor(Math.random() * 4)
};

var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

var soundBlue = new Audio("sounds/blue.mp3");
var soundGreen = new Audio("sounds/green.mp3");
var soundRed = new Audio("sounds/red.mp3");
var soundWrong = new Audio("sounds/wrong.mp3");
var soundYellow = new Audio("sounds/yellow.mp3");

function fadeButton(btn) {
    btn.fadeOut(500, function () {
        btn.fadeIn(500);
    });
}

$(`div[type="button"]`).click(function () {
    fadeButton($(this));
    var clickedButtonId = $(this).attr('id');

    switch (clickedButtonId) {
        case "green":
            gamePattern.push("green");
            soundGreen.play();
            break;
        case "red":
            gamePattern.push("red");
            soundRed.play();
            break;
        case "blue":
            gamePattern.push("blue");
            soundBlue.play();
            break;
        case "yellow":
            gamePattern.push("yellow");
            soundYellow.play();
            break;
        default:
            console.log("Invalid button");
    }

});