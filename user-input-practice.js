// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
let readline = require("readline-sync")
let number = readline.question(" Please enter your number: ");
console.log(" The square root of " + number + " is " + Math.sqrt(number));
// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
let name = readline.question("please enter your name: ");
console.log(" Your name has " + name.length);
// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
let word = readline.question("please enter any word ");
console.log(" The word " + word + " starts with the letter " + word.charAt(0));
// 4. Ask the user to enter two numbers, and print out
// "The average of ___ and ___ is ____", but with the blanks filled in.
let onenumber = readline.question("please enter one number ");
let twonumber = readline.question("plese enter another number two ");
let sum = parseInt(onenumber) + parseInt(twonumber);
console.log("The average of " + onenumber + " and " + twonumber + " is " + sum / 2);