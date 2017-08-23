"use strict";

//using FOR for the break exercise

// var userType = prompt("Enter a number between 1 and 50");
//
//
// for (var i = 1; i < 50; i++) {
//
//     if (i % 2 === 0) {
//         // Skip the even numbers.
//         continue;
//     }
//
//     if (userType === i) {
//         console.log("Yikes! Skipping number: " + i);
//     } else {
//
//         console.log("Here is an odd number: " + i);
//     }
//
//     if (i >= 49) {
//         break;
//     }
//
// }

//using while for break exercise
// Fernando example
//
// while (true) {
//     //asks a question
//     var number = prompt("Give me an odd number between 1 and 50");
//     number = parseInt(number);
//     if ((number >= 1 && number <= 50) && (number % 2 == 1) ) {
//         console.log("Found an odd number");
//         break;
//     }
// }

// Fernando example

    var number = prompt("Give me an odd number between 1 and 50");
    number = parseInt(number);
for (var i = 1; i <= 50; i+=2) {

    if ( number === i ) {
        console.log("Number to skip is: " + i);
        continue;

    }


    console.log ("Here is an odd number: " + i);
}