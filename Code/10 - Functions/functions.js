//isEven - true if even, false otherwise
function isEven(num) {
    return num % 2 === 0;
}

isEven(2);

//factorial - returns factorial of a number
// 4! = 4 * 3 * 2 * 1, 0! = 1

function factorial(num) {
    var total = 1;
    if (num === 0) {
        return total;
    } else {
        for (var i = num; i > 1; i--) {
            total *= i
        }
    }
    console.log(total);
    return total;
}

factorial(0);

//kebabtoSnake, replace "-" with "_"
function kebabtoSnake(str) {
    return str.replace(/-/gi, "_");
}

kebabtoSnake("test-string-1");