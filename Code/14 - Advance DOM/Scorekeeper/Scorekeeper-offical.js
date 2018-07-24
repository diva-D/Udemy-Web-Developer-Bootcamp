var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = Number(document.querySelector("#maxScore").textContent);
var reset = document.getElementById("reset");
var numInput = document.querySelector("#numberPicker");
var maxScore = document.querySelector("#maxScore");

player1.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            score1.classList.add("winner");
        }
        score1.textContent = p1Score;
    }
});

player2.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            score2.classList.add("winner");
        }
    }
    score2.textContent = p2Score;
});

reset.addEventListener("click", function() {
    resetFunc();
});

numInput.addEventListener("change", function() {
    maxScore.textContent = this.value;
    winningScore = Number(this.value);
    resetFunc();
});

function resetFunc() {
    p1Score = 0;
    score1.textContent = p1Score;
    score1.classList.remove("winner");
    p2Score = 0;
    score2.textContent = p2Score;
    score2.classList.remove("winner");
    gameOver = false;
}