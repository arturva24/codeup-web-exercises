"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];
console.log(users);

//Filter

let certainField = users.filter(users => users.languages.length >= 3);
console.log(certainField);


//Map

function userEmail(user, option) {
    return user.email
}

let eachEmail = users.map(userEmail);
console.log(eachEmail);


//Reduce

let totalUsers = users.reduce((everyone, user) => {
    everyone[user.id] = user ;
    return everyone;
}, {});
console.log(totalUsers);


// let result = {
//     1: "ryan",
//     2: "luis",
//     3: "zach",
//     4: "fernando",
//     5: "justin"
// };

