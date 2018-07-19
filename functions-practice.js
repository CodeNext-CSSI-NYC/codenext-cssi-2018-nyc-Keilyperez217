// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"

function sound() {
  console.log("meow")

}

sound();
sound();
sound();
// 1b. Call it three times in a row. Run your code to make sure it works.



// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
function square(x) {
  return (x * x);
}
console.log(square(2));
console.log(square(3));
console.log(square(4));


// 2b. Call it three times with three different parameters. Run your code to make sure it works.



// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.

function absoluteDifference(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else {
    console.log(num2 + " is greaterthan " + num1);
  }
}
absoluteDifference(6, 2);
absoluteDifference(4, 6);
absoluteDifference(8, 6);
// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.



// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
function name(name1) {
  return ("hello" + name1)

}


name1(keily)
name2(samantha)
name3(perez)
// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.
function colors() {
  return (colors)
}
colors(red)
colors(blue)
colors(greenf)




// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?