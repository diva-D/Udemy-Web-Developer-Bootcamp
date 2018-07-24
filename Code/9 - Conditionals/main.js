//Age alerts

var userAge = prompt("What is your age?");

if (userAge < 0) {
    console.log("ERROR - negative number entered");
} else if (userAge === 21) {
    console.log("Happy 21st birthday!");
} 

if (userAge % 2 > 0) {
    console.log("Your age is odd!");
}
if (Math.sqrt(userAge) % 1 == 0) {
    console.log("Perfect square!");
}