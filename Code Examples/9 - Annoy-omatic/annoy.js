answer = prompt("Are we there yet?").toLowerCase();

while (answer.includes("yes") == false && answer !== "yeah") {
    answer = prompt("Are we there yet?").toLowerCase();
    console.log(answer);
}

alert("Yay, we finally made it!");