// console.log("HELLO WORLD!");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!")
//     console.log(random);
// }
// else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!")
//     console.log(random);
// }

// let dayOfWeek = prompt('What day is today?');
// if (dayOfWeek === 'Monday') {
//     console.log("UGHH I hate Mondays!")
// } else if (dayOfWeek === 'Saturday') {
//     console.log("YAY I love Saturdays!")
// } else if (dayOfWeek === 'Sunday') {
//     console.log("YAY I looove Sundays!")
// } else {
//     console.log("MEH");
// }

// const password = prompt("Please enter a new password");
// if (password.length >= 6) {
//     console.log("Long enough password!")
// } else {
//     console.log("Password too short! Must be 6+ characters")
// }
// if (password.indexOf(' ') === -1) {
//     console.log("Good job! No space.")
// } else {
//     console.log("Cannot contain spaces.")
// }

// const password = prompt("Please enter a new password");
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password! Thanks.")
//     } else {
//         console.log("Cannot contain spaces.")
//     }
// }
// else {
//     console.log("Password too short! Must be 6+ characters")
// }

// const userInput = prompt("Enter something")
// if (userInput) {
//     console.log("TRUTHY!")
// } else {
//     console.log("FALSY!")
// }

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password!")
// } else {
//     console.log("Invalid password!")
// }

// const age = prompt("Enter your age please.");
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("INVALID AGE!")
// }

// let firstName = prompt("Enter your first name:");
// if (!firstName) {
//     firstName = prompt("PLEASE enter the fucking name!");
// }

let day = prompt("Write a number from 1 to 7");
switch (day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("I don't know that!")
}