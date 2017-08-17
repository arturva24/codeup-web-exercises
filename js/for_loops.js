"use strict";
//
// var userinput = prompt ( "Pick a number between 1 and 10");
//
// var multiplier = userinput ;
//
//  for (var i = 0; i <= 10; i++) {
//      var result = multiplier * 1;
//      console.log(multiplier + ' x ' +i + ' = ' + result);
//  }
//


// loop exercise 3
//
// var  counter = Math.floor(Math.random() * 10) + 200;
//
// var limit = 10;
// for (counter;; a++) {
//     console.log (a);
// }


var  i = Math.floor(Math.random() * 10) + 20;
var limit = 10;

for (var i = 1; i < 200; i++) {

    if (i % 2 === 0) {
        console.log("This is an even number: " + i);
        continue;
    }

    // if (counter === i) {
    //     console.log("Yikes! Skipping number: " + i);
     else {

        console.log("Here is an odd number: " + i);
    }

    if (limit >= 50) {
        break;
    }

}