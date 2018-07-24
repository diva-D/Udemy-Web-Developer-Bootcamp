var todos = [];

window.setTimeout(function () {
    // put all of your JS code from the lecture here

    var input = prompt("What would you like to do?");

    while (input !== "quit") {
        switch (input) {
            case "list":
                listTodo();
                break;
            case "new":
                newTodo();
                break;
            case "delete":
                deleteTodo();
                break;
            default:
                console.log("NOT A VALID RESPONSE - TRY AGAIN");
                break;
        }
        input = prompt("What would you like to do?");
    }

    console.log("OKAY. YOU QUIT THE APP");
}, 500);

function listTodo() {
    todos.forEach(function (todo, index) {
        console.log("**********")
        console.log(index + ": " + todo);
    });
}

function newTodo() {
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    var indexDelete = prompt("Enter the index of the todo you want to delete");
    todos.splice(indexDelete, 1);
    console.log("Deleted todo");
}