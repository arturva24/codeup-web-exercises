"use strict";


(function(){

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["art", "alex", "andy", "erik", "ram"];


    // Fernando's alternate version to add new arrays
    // var names = new Array("fer", "luis", "ryan", "zach");


    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(names[4]);

    //adding for-loops to exercise above

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


    //adding for-each loop to exercise above

    names.forEach(function (element, index, array){
        console.log(element);
    })

})();