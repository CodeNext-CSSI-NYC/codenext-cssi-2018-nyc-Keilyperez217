// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
 let readline = require("readline-sync")
 let number = readline.question(" Please enter your number: ");
 if (number > 0) {
   console.log ("it is a positive");
 } else if (number < 0) {
  console.log("it is a negative");

} else {
  console.log ("number is either positive or negative")

}
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
  let a = readline.question ("please enter firt numbers: ");
  let b = readline.question ("please enther second number: ");
  let c = readline.question ("please enter third number: ");

  if  (a > b && a > c) {
      console.log ("a is the biggest number");
  } else if (b > a && b > c ){
    console.log ("b is the biggest number");
  } else {
    console.log("c is the biggest number");
  }


// 3. Ask the user for a number and print whether it is odd or even
      let d = readline.question("please enter a number ");
      if (d % 2 == 0){
        console.log("it is even");

      } else {
        console.log("it is odd");
      }

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
      let userletter = readline.question ("please enter a letter")
      let vowel1  = "a";
      let vowel2  = "e";
      let vowel3  = "i";
      let vowel4  = "o";
      var vowel5  = "u";
      if (userletter == vowel1 || userletter == vowel2 || userletter == vowel3 || userletter == vowel4 || userletter == vowel5){
        console.log ("it is a vowel");
      } else {
        console.log(" it is a consonant");
      }


// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)

// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
