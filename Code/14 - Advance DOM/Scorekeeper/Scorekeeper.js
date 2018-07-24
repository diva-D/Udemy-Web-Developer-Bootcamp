var maxScore = document.querySelector("#maxScore");
var maxScoreNum = Number(document.querySelector("#maxScore").textContent);
var button1 = document.querySelector("#player1");
var button2 = document.querySelector("#player2");
var score1 = document.querySelector("#score1");
var score1Num = Number(score1.textContent);
var score2 = document.querySelector("#score2");
var score2Num = Number(score2.textContent);

// Player 1 score
button1.addEventListener("click", function () {
    // Add to score if less than max score
    if (score1Num < maxScoreNum && score2Num < maxScoreNum) {
        score1.textContent = score1Num + 1;
        score1Num = Number(score1.textContent);
    }
    // Change color if hit max score
    if (score1Num === maxScoreNum) {
        score1.classList.add("winner");
    } else {
        score1.classList.remove("winner");
    }
});

// Player 2 score
button2.addEventListener("click", function () {
    if (score1Num < maxScoreNum && score2Num < maxScoreNum) {
        score2.textContent = score2Num + 1;
        score2Num = Number(score2.textContent);
    }
    if (score2Num === maxScoreNum) {
        score2.classList.add("winner");
    } else {
        score2.classList.remove("winner");
    }
});

var button3 = document.querySelector("#reset");

// Reset button to change both scores to zero
button3.addEventListener("click", function () {
    score1.textContent = 0;
    score1Num = 0;
    score1.classList.remove("winner");
    score2.textContent = 0;
    score2Num = 0;
    score2.classList.remove("winner");
});

// Change max score based on number picker
var numberPicker = document.querySelector("#numberPicker");

numberPicker.addEventListener("input", function () {
    maxScore.textContent = numberPicker.value;
    maxScoreNum = Number(document.querySelector("#maxScore").textContent);
});