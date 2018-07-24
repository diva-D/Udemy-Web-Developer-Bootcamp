var number = 7;
var correct = false;

while (correct == false) {
    var guess = Number(prompt("Guess a number (1 - 10)"));

    if (guess === number) {
        alert("CORRECT!!!");
        correct = true;
    } else if (guess < number) {
        alert("Too low. Try again!");
    } else if (guess > number) {
        alert("Too high. Try again")
    }
}