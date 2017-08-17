"use strict";

var number = 2;

while (number < 65536) {
    number = number * 2;
    console.log (number);
}

//EXERCISE 2

var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (cones > allCones) {
        console.log("Cannot sell you " + cones + " cones I only have " + allCones + "...");
        continue;
    }
    allCones -= cones;  // allCones = allCones - cones;
    console.log(cones + " cones sold...");
} while (allCones > 0);
    console.log("Yay! I sold them all!");

// 5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones


