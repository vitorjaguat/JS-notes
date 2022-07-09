"use strict";

// // console.log("HELLO WORLD!");
// // let random = Math.random();
// // if (random < 0.5) {
// //     console.log("YOUR NUMBER IS LESS THAN 0.5!")
// //     console.log(random);
// // }
// // else {
// //     console.log("YOUR NUMBER IS GREATER THAN 0.5!")
// //     console.log(random);
// // }

// // let dayOfWeek = prompt('What day is today?');
// // if (dayOfWeek === 'Monday') {
// //     console.log("UGHH I hate Mondays!")
// // } else if (dayOfWeek === 'Saturday') {
// //     console.log("YAY I love Saturdays!")
// // } else if (dayOfWeek === 'Sunday') {
// //     console.log("YAY I looove Sundays!")
// // } else {
// //     console.log("MEH");
// // }

// // const password = prompt("Please enter a new password");
// // if (password.length >= 6) {
// //     console.log("Long enough password!")
// // } else {
// //     console.log("Password too short! Must be 6+ characters")
// // }
// // if (password.indexOf(' ') === -1) {
// //     console.log("Good job! No space.")
// // } else {
// //     console.log("Cannot contain spaces.")
// // }

// // const password = prompt("Please enter a new password");
// // if (password.length >= 6) {
// //     if (password.indexOf(' ') === -1) {
// //         console.log("Valid password! Thanks.")
// //     } else {
// //         console.log("Cannot contain spaces.")
// //     }
// // }
// // else {
// //     console.log("Password too short! Must be 6+ characters")
// // }

// // const userInput = prompt("Enter something")
// // if (userInput) {
// //     console.log("TRUTHY!")
// // } else {
// //     console.log("FALSY!")
// // }

// // const password = prompt("Enter your password");
// // if (password.length >= 6 && password.indexOf(' ') === -1) {
// //     console.log("Valid password!")
// // } else {
// //     console.log("Invalid password!")
// // }

// // const age = prompt("Enter your age please.");
// // if (age >= 0 && age < 5 || age >= 65) {
// //     console.log("FREE")
// // } else if (age >= 5 && age < 10) {
// //     console.log("$10")
// // } else if (age >= 10 && age < 65) {
// //     console.log("$20")
// // } else {
// //     console.log("INVALID AGE!")
// // }

// // let firstName = prompt("Enter your first name:");
// // if (!firstName) {
// //     firstName = prompt("PLEASE enter the fucking name!");
// // }

// // let day = prompt("Write a number from 1 to 7");
// // switch (day) {
// //     case "1":
// //         console.log("Monday");
// //         break;
// //     case "2":
// //         console.log("Tuesday");
// //         break;
// //     case "3":
// //         console.log("Wednesday");
// //         break;
// //     case "4":
// //         console.log("Thursday");
// //         break;
// //     case "5":
// //         console.log("Friday");
// //         break;
// //     case "6":
// //         console.log("Saturday");
// //         break;
// //     case "7":
// //         console.log("Sunday");
// //         break;
// //     default:
// //         console.log("I don't know that!")
// // }

// // const seatingChart = [
// //     ['Kristen', 'Erik', 'Namita'],
// //     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
// //     ['Yuma', 'Sakura', 'Jack', 'Erika']
// // ]
// // for (let i = 0; i < seatingChart.length; i++) {
// //     const row = seatingChart[i];
// //     console.log(`ROW #${i + 1}`)
// //     for (let j = 0; j < row.length; j++) {
// //         console.log(row[j]);
// //     }
// // }

// // let input = prompt("Hey, say something!")
// // while (true) {
// //     input = prompt(input);
// //     if (input.toLowerCase() === "stop copying me") {
// //         break;
// //     }
// // }
// // alert("OK YOU WIN!")

// // let maximum = parseInt(prompt("Enter the maximum number!"));
// // while (!maximum) {
// //     maximum = parseInt(prompt("Enter a valid number!"));
// // }

// // const targetNum = Math.floor(Math.random() * maximum) + 1;

// // let guess = parseInt(prompt("Enter your first guess!"));
// // let attempts = 1;

// // while (parseInt(guess) !== targetNum) {
// //     if (guess === 'q' || guess === 'Q') break;
// //     attempts++;
// //     if (guess > targetNum) {
// //         guess = prompt("Too high! Enter a new guess:");
// //     } else {
// //         guess = prompt("Too low! Enter a new guess:");
// //     }
// // }

// // if (guess === 'q' || guess === 'Q') {
// //     alert("OK, you quit.")
// // } else {
// //     alert(`Congrats! It took you ${attempts} guesses.`)
// // }

// // const seatingChart = [
// //     ['Kristen', 'Erik', 'Namita'],
// //     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
// //     ['Yuma', 'Sakura', 'Jack', 'Erika']
// // ]
// // for (let line of seatingChart) {
// //     for (let person of line) {
// //         console.log(person)
// //     }
// // }

// // const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// // for (let person of people) {
// //     console.log(person)
// // }

// // const testScores = {
// //     keenan: 80,
// //     damon: 67,
// //     kim: 89,
// //     shawn: 91
// // }
// // let total = 0;
// // let numberOfStudents = Object.values(testScores).length
// // for (let eachScore of Object.values(testScores)) {
// //     total += eachScore;
// // }
// // console.log(total / numberOfStudents)

// //TODO list app (my answer):
// // const todoList = [];

// // while (true) {
// //     let task = prompt("What would you like to do?");
// //     if (task === "quit") {
// //         console.log("Ok, you quit.");
// //         break;
// //     } else if (task === "new") {
// //         let newTodo = prompt("Enter new todo:");
// //         todoList.push(newTodo);
// //         console.log(`${newTodo} added to the list`);

// //     } else if (task === "list") {
// //         for (let i = 0; i < todoList.length; i++) {
// //             console.log(`${i}: ${todoList[i]}`)
// //         }
// //     } else if (task === "delete") {
// //         let deleteNumber = parseInt(prompt("What item do you want to delete?"));
// //         todoList.splice(deleteNumber, 1);
// //         console.log(`item ${deleteNumber} successfully deleted.`)
// //     }
// // }

// //My version with alerts:
// // const todoList = [];

// // while (true) {
// //     let task = prompt("What would you like to do?");
// //     if (task === "quit") {
// //         alert("Ok, you quit.");
// //         break;
// //     } else if (task === "new") {
// //         let newTodo = prompt("Enter new todo:");
// //         todoList.push(newTodo);
// //         alert(`${newTodo} added to the list`);

// //     } else if (task === "list") {
// //         for (let i = 0; i < todoList.length; i++) {
// //             alert(`${i}: ${todoList[i]}`);
// //         }
// //     } else if (task === "delete") {
// //         let deleteNumber = parseInt(prompt("What item do you want to delete?"));
// //         todoList.splice(deleteNumber, 1);
// //         alert(`item ${deleteNumber} successfully deleted.`)
// //     }
// // }



// // TODOlist app: Colt's resolution:
// // const todos = [];
// // let input = prompt("What would you like to do?");
// // while (input !== "quit" && input !== "q") {
// //     if (input === "list") {
// //         console.log("*************");
// //         for (let i = 0; i < todos.length; i++) {
// //             console.log(`${i}: ${todos[i]}`);
// //         }
// //         console.log("*************");
// //     } else if (input === "new") {
// //         const newTodo = prompt("Ok, what is the new todo?");
// //         todos.push(newTodo);
// //         console.log(`${newTodo} added to the list!`);
// //     } else if (input === "delete") {
// //         const index = parseInt(prompt("Ok, enter an index to delete:"));
// //         if (!Number.isNaN(index)) {
// //             const deleted = todos.splice(index, 1);
// //             console.log(`OK, deleted ${deleted[0]}.`)
// //         } else {
// //             console.log("Unknown index")
// //             //This if is only to check if the index is really valid, because any string would be converted to a number and could delete unwanted items.
// //         }
// //     }
// //     input = prompt("What would you like to do?")
// // }
// // console.log("OK, YOU QUIT THE APP.");


// // function greet(firstName) {
// //     console.log(`Hi, ${firstName}!`);
// // }
// // greet('Nona');

// // function rant(message) {
// //     console.log(message.toUpperCase());
// //     console.log(message.toUpperCase());
// // }
// // rant('I hate beets!');

// // function repeat(message, numTimes) {
// //     let result = '';
// //     for (let i = 0; i < numTimes; i++) {
// //         result += message;
// //     }
// //     console.log(result);
// // }
// // repeat('HELLO', 5);

// // // Jonas sc2 challenge#1
// // let massMark = 78;
// // let heightMark = 1.69;
// // let massJohn = 92;
// // let heightJohn = 1.95;

// // // Data2
// // massMark = 95;
// // massJohn = 85;
// // heightMark = 1.88;
// // heightJohn = 1.76;

// // let markHigherBMI;
// // let markBMI = massMark / heightMark ** 2;
// // let johnBMI = massJohn / heightJohn ** 2;

// // if (markBMI > johnBMI) {
// //     markHigherBMI = true;
// // } else {
// //     markHigherBMI = false;
// // }

// // Jonas sc 2 challenge 2
// // let massMark = 78;
// // let heightMark = 1.69;
// // let massJohn = 92;
// // let heightJohn = 1.95;

// // // Data2
// // massMark = 95;
// // massJohn = 85;
// // heightMark = 1.88;
// // heightJohn = 1.76;


// // let markBMI = massMark / heightMark ** 2;
// // let johnBMI = massJohn / heightJohn ** 2;
// // let markHigherBMI = markBMI > johnBMI;

// // if (markHigherBMI) {
// //     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// // } else console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`);

// //Using ternary operator:
// // markHigherBMI ? console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`) : console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`);

// // Jonas sc2 challenge 3
// // let dolphinsScore = (96 + 108 + 89) / 2;
// // let koalaScore = (88 + 91 + 110) / 2;


// // if (dolphinsScore >= 100 && dolphinsScore > koalaScore) {
// //     console.log(`Dolphins are the winners, they got ${dolphinsScore} points!`);
// // } else if (koalaScore >= 100 && koalaScore > dolphinsScore) {
// //     console.log(`Koalas are the winners, they got ${koalaScore} points!`);
// // } else if (koalaScore === dolphinsScore && koalaScore >= 100) {
// //     console.log(`There was a draw! Both teams scored ${dolphinsScore} points.`);
// // } else {
// //     console.log("There was no winner, because the highest score was less than 100.")
// // }

// // //Data bonus 1
// // dolphinsScore = (97 + 112 + 101) / 2;
// // koalaScore = (109 + 95 + 123) / 2;
// // if (dolphinsScore >= 100 && dolphinsScore > koalaScore) {
// //     console.log(`Dolphins are the winners, they got ${dolphinsScore} points!`);
// // } else if (koalaScore >= 100 && koalaScore > dolphinsScore) {
// //     console.log(`Koalas are the winners, they got ${koalaScore} points!`);
// // } else if (koalaScore === dolphinsScore && koalaScore >= 100) {
// //     console.log(`There was a draw! Both teams scored ${dolphinsScore} points.`);
// // } else {
// //     console.log("There was no winner, because the highest score was less than 100.")
// // }

// // //Data bonus 2
// // dolphinsScore = (97 + 112 + 101) / 2;
// // koalaScore = (109 + 95 + 106) / 2;
// // if (dolphinsScore >= 100 && dolphinsScore > koalaScore) {
// //     console.log(`Dolphins are the winners, they got ${dolphinsScore} points!`);
// // } else if (koalaScore >= 100 && koalaScore > dolphinsScore) {
// //     console.log(`Koalas are the winners, they got ${koalaScore} points!`);
// // } else if (koalaScore === dolphinsScore && koalaScore >= 100) {
// //     console.log(`There was a draw! Both teams scored ${dolphinsScore} points.`);
// // } else {
// //     console.log("There was no winner, because the highest score was less than 100.")
// // }


// //Jonas sc2 challenge 4
// // let tip;
// // let bill = 430;
// // bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill;
// // console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

// //Jonas' answer:
// // const bill = 275;
// // const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2;
// // console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);


// //Jonas sc3 challenge 1:
// // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // const scoreAverageD1 = calcAverage(44, 23, 71);
// // const scoreAverageK1 = calcAverage(65, 54, 49);
// // const scoreAverageD2 = calcAverage(85, 54, 41);
// // const scoreAverageK2 = calcAverage(23, 34, 27);

// // const checkWinner = function (avgD, avgK) {
// //     if (avgD >= 2 * avgK) {
// //         console.log(`Dolphins win (${avgD} vs. ${avgK})`);
// //     } else if (avgK >= 2 * avgD) {
// //         console.log(`Koalas win (${avgK} vs. ${avgD})`);
// //     } else {
// //         console.log(`No team wins! (${avgK} vs. ${avgD})`);
// //     }
// // }
// // checkWinner(scoreAverageD1, scoreAverageK1);
// // checkWinner(scoreAverageD2, scoreAverageK2);

// //Jonas sc3 challenge 3:
// // function calcTip(bill) {
// //     let tip;
// //     bill >= 50 && bill <= 300 ? tip = 0.15 * bill : tip = 0.2 * bill;
// //     return tip;
// // }
// // console.log(calcTip(100));
// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // console.log(tips)
// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(total)

// //Jonas' solution:
// // const calcTip = function(bill) {
// //     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// // }
// // //Arrow function: 
// // //  const calcTip = bill => bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// // const bills = [125, 555, 44];

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // console.log(tips)
// // const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(total)


// //Jonas video 44 (Object Methods), challenge:
// // const jonas = {
// //     firstName: 'Jonas',
// //     lastName: 'Schmedtmann',
// //     birthYear: 1991,
// //     job: 'teacher',
// //     friends: ['Micheal', 'Peter', 'Steven'],
// //     hasDriversLicense: true,
// //     driversLicense: function () {
// //         if (this.hasDriversLicense) {
// //             return 'a';
// //         } else {
// //             return 'no';
// //         }
// //     },
// //     calcAge: function () {
// //         return 2022 - this.birthYear;
// //     }
// // }

// // console.log(jonas.calcAge());
// // //31

// // //First try (ok):

// // // let canDrive;

// // // jonas.hasDriversLicense ? canDrive = 'a' : canDrive = 'no';

// // // console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old teacher, and he has ${canDrive} driver's license.`)

// // //Second try:
// // console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old teacher, and he has ${jonas.driversLicense()} driver's license.`)

// //Jonas' solution:

// // const jonas = {
// //     firstName: 'Jonas',
// //     lastName: 'Schmedtmann',
// //     birthYear: 1991,
// //     job: 'teacher',
// //     friends: ['Micheal', 'Peter', 'Steven'],
// //     hasDriversLicense: true,
// //     driversLicense: function () {
// //         if (this.hasDriversLicense) {
// //             return 'a';
// //         } else {
// //             return 'no';
// //         }
// //     },
// //     calcAge: function () {
// //         return 2022 - this.birthYear;
// //     },
// //     getSummary: function () {
// //         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// //     }
// // }
// // console.log(jonas.getSummary());

// //Jonas sc3 challenge 3:
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return this.mass / this.height ** 2;
//     }
// }
// console.log(mark.calcBMI(), john.calcBMI())

// //Hardcoding the phrase:
// console.log(`Mark Miller's BMI (${mark.calcBMI()}) is higher than John Smith's (${john.calcBMI()})`)

// //Making a conditional to discover who's BMI is higher:
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
// } else if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2022 - 1991,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven'],
//     true
// ];
// const jonasBW = [];
// for (let i = jonas.length - 1; i >= 0; i--) {
//     jonasBW.push(jonas[i]);
// }

// const workout = [];
// for (let exercise = 1; exercise < 4; exercise++) {
//     for (let repetition = 1; repetition < 6; repetition++) {
//         workout.push([`Exercise ${exercise}: repetition ${repetition}`]);
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     if (dice === 6) {
//         console.log("You got a 6!");
//     }
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// tips = [];
// totals = [];
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(calcTip(bills[i]) + bills[i]);
// }

// //Bonus:
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));

// Jonas sc 5 challenge 1

// const printForecast = function (arr) {
//     let oneDay = "";
//     let allDays = "";
//     for (let i = 0; i < arr.length; i++) {
//         oneDay = `... ${arr[i]} degrees Celsius in ${i + 1} days `;
//         allDays += oneDay;
//     }
//     return allDays;
// };

// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);

//Jonas sc 9 challenge 1:

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ], [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// 1.
// // let players1 = game.players[0];
// // let players2 = game.players[1];
// let [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);



// 2.
// let [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);


// //3. 
// let allPLayers = [...players1, ...players2]
// console.log(allPLayers)

// //4.
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final)

// //5.
// let { team1, x: draw, team2 } = game.odds
// console.log(team1)
// console.log(draw)
// console.log(team2)

// // //6.
// const printGoals = function (pla1, ...pla) {
//     let plaT = [pla1, ...pla];
//     let numGoals = 0;
//     let scored = game.scored;
//     //     // for (let player of plaT) {
//     //     //     if (scored.includes(player)) {
//     //     //         numGoals++

//     //     //     }

//     //     // }
//     for (let player of plaT) {
//         for (let goal of scored) {
//             if (player === goal) {
//                 numGoals++
//             }
//         }
//     }
//     console.log(numGoals);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');


// //7.
// const odds1 = game.odds.team1; // already assigned
// const odds2 = game.odds.team2; // already assigned
// console.log(odds1 < odds2 && 'team1');
// console.log(odds1 > odds2 && 'team2');

//Jonas' solution:
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


//Jonas sc 9 challenge 2:
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ], [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// //1.
// const goals = game.scored;
// console.log(goals)
// for (const [index, item] of goals.entries()) {
//     console.log(`Goal ${index + 1}: ${item}`)
// }

// //2.
// const odds = Object.values(game.odds)
// // console.log(odds)
// let avg = 0;
// let sum = 0;
// for (const x of odds) {
//     sum += x;
// }
// avg = sum / odds.length;
// console.log(avg);

// //3.
// const [y, z, w] = odds;
// console.log(`Odd of victory ${game.team1}: ${y}`);
// console.log(`Odd of draw: ${z}`);
// console.log(`Odd of victory ${game.team2}: ${w}`);

// //4.
// const scorers = {}
// let sumGoals


// // scorers[goals[0]] = 1;

// // for (const i of scored) {
// //     scored.filter(j => j === i).length;
// // }

// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers)
// //wow! it worked!

//Jonas sc 9 challenge 3
// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);
//1.
// const events = []
// for (const [key, value] of gameEvents) {
//     events.push(value);
// }
// const eventsSet = new Set(events)
// console.log(eventsSet)
// const uniqueEventsArr = [...eventsSet]
// console.log(uniqueEventsArr)

// //Jonas' solution:
// gameEvents.values(); //Map's values
// new Set(gameEvents.values()) //set of values
// //solution:
// const events = [...new Set(gameEvents.values())];
// console.log(events)

// //2.
// gameEvents.delete(64)
// console.log(gameEvents)

// //3. 
// const avg = 90 / gameEvents.size;
// console.log(`An event happened, on avarage, every ${avg} minutes`)

// //4.
// for (const [min, ev] of gameEvents) {
//     if (min <= 45) {
//         console.log(`[FIRST HALF] ${min}: ${ev}`)
//     } else {
//         console.log(`[SECOND HALF] ${min}: ${ev}`)
//     }
// }
// // Jonas'solution:
// for (const [min, ev] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${ev}`)
// }


//Jonas sc 9 challenge 4

// const txt = document.createElement('textarea')
// txt.style.width = '400px';
// txt.style.height = '300px';

// document.body.append(txt);
// const btn = document.createElement('button');
// btn.style.width = '100px';
// btn.style.height = '50px';
// btn.textContent = 'Convert!'
// document.body.append(btn);

// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const inputValue = document.querySelector('textarea').value;
//     console.log(inputValue)
//     const arr = inputValue.split('\n')
//     console.log(arr)
//     let vSign = '';
//     for (const x of arr) {

//         vSign += '✅';
//         const line = x.trim().toLowerCase()
//         const line2 = line.slice(0, line.indexOf('_')) + line[line.indexOf('_') + 1].toUpperCase() + line.slice(line.indexOf('_') + 2);
//         const line3 = line2.padEnd(20, ' ') + vSign;
//         console.log(line3)
//     }
// })

//Jonas' solution (worse than mine, I guess, cause he divided each word into 2 parts and then joined the parts together again...)

// document.querySelector('button').addEventListener('click', function () {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');

//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');

//         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
//     }
// })

// underscoreCase     
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

//Jonas sc 9 Extra challenge (video 125)
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// MY FIRST TRY:
// const arrFlights = flights.split('+');
// console.log(arrFlights)
// for (const line of arrFlights) {
//     const step1 = line.replace('_', ' ');
//     const step2 = arrFlights.indexOf(line) % 2 !== 1 ? '🔴' + step1 : step1;
//     // console.log(step2)
//     const step3 = step2.slice(0, step2.indexOf(';')) + step2.slice(step2.indexOf(';') + 1, step2.indexOf(';') + 4).toUpperCase() + step2.slice(step2.indexOf(';') + 4)
//     const step4 = step3.replace('_', ' ').replace(';', ' ')
//     console.log(step4)
// }


//SECOND TRY based on Jonas' solution:

// const arrFlights = flights.split('+');
// for (const flight of arrFlights) {
//     const [type, from, to, time] = flight.split(';');
//     // console.log(type, from, to, time)
//     const output = `${type.startsWith('_Del') ? '🔴' + type.replaceAll('_', ' ') : '' + type.replaceAll('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()}  (${time})`.padStart(45, ' ');

//     console.log(output)
// }


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)



//Jonas sc 10 challenge 1
//MY SOLUTION:

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section! 
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         let [op0, op1, op2, op3] = this.answers;
//         let input = Number(prompt("What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number"));
//         if (typeof input === 'number' && input >= 0 && input <= 3) {
//             if (input === 0) {
//                 this.answers[0]++
//             } else if (input === 1) {
//                 this.answers[1]++
//             } else if (input === 2) {
//                 this.answers[2]++
//             } else if (input === 3) {
//                 this.answers[3]++
//             }
//         } else console.log('WRONG!');
//         this.displayResults();
//     },
//     displayResults() {
//         console.log(`Poll results are ${this.answers}`)
//     }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// const data1 = { answers: [5, 2, 3] };
// const data2 = { answers: [1, 5, 3, 9, 6, 1] };

// const data1Display = poll.displayResults.bind(data1)();
// console.log(data1Display);
// const data2Display = poll.displayResults.bind(data2)();
// console.log(data2Display);


//JONAS' SOLUTION:
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section! 
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         //the question and options can be imported from the object!
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//         //using short-circuiting &&
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         }
//     }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] })
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string')

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')


//Jonas sc 10 challenge 2
//My solution:
// (function () {
//     const header = document.querySelector('h1'); header.style.color = 'red';
//     document.body.addEventListener('click', function () {
//         header.style.color = 'blue'
//     })
// })();

//Jonas sc11 challenge 1
// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK 😀
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
//My solution:
// const julia1 = [3, 5, 2, 12, 7]
// const kate1 = [4, 1, 15, 8, 3]
// const julia2 = [9, 16, 6, 8, 3]
// const kate2 = [10, 5, 6, 1, 4]

// const checkDogs = function (arr1, arr2) {
//     const jDogs = arr1.slice(1).slice(0, -2);
//     const kDogs = arr2;
//     console.log(jDogs, kDogs)
//     jDogs.forEach(function (dog, i) {
//         dog >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`) : console.log(`Dog number ${i + 1} is still a puppy`)
//     });
//     kDogs.forEach(function (dog, i) {
//         dog >= 3 ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`) : console.log(`Dog number ${i + 1} is still a puppy`)
//     });
// }
// checkDogs(julia1, kate1)

//Jonas sc 11 challenge 2
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old(which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
// GOOD LUCK 😀

//MY SOLUTION:
// const Data1 = [5, 2, 4, 1, 15, 8, 3]
// const Data2 = [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//     const humAge = ages.map(function (age) {
//         return age <= 2 ? age * 2 : 16 + age * 4;
//     });
//     const adults = humAge.filter(function (age) {
//         return age >= 18;
//     });
//     const avg = adults.reduce(function (acc, age) {
//         return acc + age;
//     }, 0) / adults.length;
//     //const avg = adults.reduce(function (acc, age) {
//     //return acc + age;
// }, 0) / adults.length;

// console.log(avg)
// }

// calcAverageHumanAge(Data1)
// calcAverageHumanAge(Data2)

//Jonas sc 11 challenge 3
//Rewrite the previous challenge solution using chaining and arrow functions:

const Data1 = [5, 2, 4, 1, 15, 8, 3]
const Data2 = [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
    return ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

console.log(calcAverageHumanAge(Data1))
console.log(calcAverageHumanAge(Data2))
