var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //add listeners to our "Easy/Hard" mode buttons
    setupModeButtons();
    // set square colors
    setupSquares();

    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add event listeners to squares for clicks
        squares[i].addEventListener("click", function () {
            //grab color of square
            var clickedColor = this.style.backgroundColor;
            //compare to picked
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = rgbGenerator(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Game";
    messageDisplay.textContent = null;
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    //change all sqaures to match correct color
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomNum = (Math.floor(Math.random() * colors.length))
    return colors[randomNum];
}

function randomColor() {
    return Math.floor(Math.random() * 256)
}

function rgbGenerator(number) {
    var list = [];
    for (var i=0; i < number; i++) {
        list.push("rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")");
    }
    return list;
}
