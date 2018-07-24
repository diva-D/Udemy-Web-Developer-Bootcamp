var todos = [];

window.setTimeout(function () {
    // put all of your JS code from the lecture here
   
    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        switch (input) {
            case "list":
                console.log(todos);
                break;
            case "new":
                var newTodo = prompt("Enter a new todo");
                todos.push(newTodo);
                break;
            default:
                console.log("NOT A VALID RESPONSE - TRY AGAIN");
                break;
        }
        input = prompt("What would you like to do?");
    }

    console.log("OKAY. YOU QUIT THE APP");
}, 500);