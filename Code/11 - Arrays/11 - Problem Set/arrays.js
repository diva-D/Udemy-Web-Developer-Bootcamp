// *** printReverse() ***
/* 
Takes array as argument prints out elements in array
in reverse order (but don't actually reverse the array)
*/

function printReverse(array) {
    for(var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

// *** isUniform() *** 
/*
Takes array as argument and returns true if ALL elements are identical
*/

function isUniform(array) {
    var result = true;
    array.forEach(function (element) {
        if (element !== array[0]) {
            result = false;
        }
    });
    console.log(result);
}

// *** sumArray() *** 
/*
Accepts an array of numbers and returns the sum of all of them
*/

function sumArray(array) {
    var total = 0;
    array.forEach(function(element) {
        total += element;
    });
    console.log(total);
}

// for version
/*
function sumArray2(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log(total);
}
*/

// *** max()  *** 
// Accepts an array of numbers and returns the maximum value from the array

function max(array) {
    var maximum = null;
    array.forEach(function(element) {
        if (element > maximum) {
            maximum = element;
        }
    });
    console.log(maximum);
}

