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

// let day = prompt("Write a number from 1 to 7");
// switch (day) {
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("I don't know that!")
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// alert("OK YOU WIN!")

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q' || guess === 'Q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }

// if (guess === 'q' || guess === 'Q') {
//     alert("OK, you quit.")
// } else {
//     alert(`Congrats! It took you ${attempts} guesses.`)
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]
// for (let line of seatingChart) {
//     for (let person of line) {
//         console.log(person)
//     }
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let person of people) {
//     console.log(person)
// }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91
// }
// let total = 0;
// let numberOfStudents = Object.values(testScores).length
// for (let eachScore of Object.values(testScores)) {
//     total += eachScore;
// }
// console.log(total / numberOfStudents)

//TODO list app (my answer):
// const todoList = [];

// while (true) {
//     let task = prompt("What would you like to do?");
//     if (task === "quit") {
//         console.log("Ok, you quit.");
//         break;
//     } else if (task === "new") {
//         let newTodo = prompt("Enter new todo:");
//         todoList.push(newTodo);
//         console.log(`${newTodo} added to the list`);

//     } else if (task === "list") {
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i}: ${todoList[i]}`)
//         }
//     } else if (task === "delete") {
//         let deleteNumber = parseInt(prompt("What item do you want to delete?"));
//         todoList.splice(deleteNumber, 1);
//         console.log(`item ${deleteNumber} successfully deleted.`)
//     }
// }

//My version with alerts:
// const todoList = [];

// while (true) {
//     let task = prompt("What would you like to do?");
//     if (task === "quit") {
//         alert("Ok, you quit.");
//         break;
//     } else if (task === "new") {
//         let newTodo = prompt("Enter new todo:");
//         todoList.push(newTodo);
//         alert(`${newTodo} added to the list`);

//     } else if (task === "list") {
//         for (let i = 0; i < todoList.length; i++) {
//             alert(`${i}: ${todoList[i]}`);
//         }
//     } else if (task === "delete") {
//         let deleteNumber = parseInt(prompt("What item do you want to delete?"));
//         todoList.splice(deleteNumber, 1);
//         alert(`item ${deleteNumber} successfully deleted.`)
//     }
// }



// TODOlist app: Colt's resolution:
// const todos = [];
// let input = prompt("What would you like to do?");
// while (input !== "quit" && input !== "q") {
//     if (input === "list") {
//         console.log("*************");
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("*************");
//     } else if (input === "new") {
//         const newTodo = prompt("Ok, what is the new todo?");
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list!`);
//     } else if (input === "delete") {
//         const index = parseInt(prompt("Ok, enter an index to delete:"));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`OK, deleted ${deleted[0]}.`)
//         } else {
//             console.log("Unknown index")
//             //This if is only to check if the index is really valid, because any string would be converted to a number and could delete unwanted items.
//         }
//     }
//     input = prompt("What would you like to do?")
// }
// console.log("OK, YOU QUIT THE APP.");


// function greet(firstName) {
//     console.log(`Hi, ${firstName}!`);
// }
// greet('Nona');

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant('I hate beets!');

// function repeat(message, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += message;
//     }
//     console.log(result);
// }
// repeat('HELLO', 5);

// Jonas challenge#1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Data2
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

let markHigherBMI;
let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;





if (markBMI > johnBMI) {
    markHigherBMI = true;
} else {
    markHigherBMI = false;
}


