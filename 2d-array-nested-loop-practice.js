// / 1. Refer to the 2D array below to answer the questions that follow
let fruits = [
  ["apple", "banana", "grape"],
  ["peach", "raspberry", "papaya"],
  ["apricot", "cherry", "pineapple"],
  ["watermelon", "nectarine", "tangerine"],
  ["mango", "strawberry", "blueberry"]
];
console.log(fruits[2][1]);
// it is cherry
console.log(fruits[3][2]);


// Which item is fruit[2][1]? Confirm your answer by printing it out.
// Which are the row/column coordinates of tangerine? Confirm your answer by printing it out.
// Change apricot to kiwi. Print out the array to make sure it worked.
// Create a new row to add to the end of the 2D array.
// This row will itself by an array and should contain blackberry, lemon, and clementine.
// Add it to the end of the fruits array. Print out the whole array to make sure
// your new row looks just like any other row.
// What is the row/column of lemon? Print it out to make sure.



// 2. Write two nested for loops. The first (outer) should run 4 times and
// the second (inner) should run 7 times.
// Inside the inner loop, print out the sentence:
// Right now, i is _____ and j is ____, filling in the blanks with the values.
// Before you run it, predict what the second line that your code prints will be.
// Write it down.... Now run it. Is it what you predicted?
var startString = "";
for (var j = 0; j < 7; j++) {
  startString += "*";
}
console.log(startString);

for (var i = 0; i < 7; i++) {
  var startString = "";
  for (var j = 0; j < 7; j++) {
    startString += "*";
  }
  console.log(startString);
  console.log("i is " + 4 + "and j is " + 7);
}


// 3. Use two nested loops to iterate (go through) the fruits array above.
// Inside the loops, print out the item at that particular row/column.
// Which item do you think will be printed second-to-last? Run the code to check.

for (var i = 0; i < fruits.length; i++) {
  for (var j = 0; j < fruits[i].length; j++) {
    console.log(fruits[i][j]);
  }
}

// 4. Create your own 2D array. It doesn't have to be too big, but it should
// have at least two rows and at least two columns, and at least 6 items overall.
// Print out a few values from your 2D array using the rol/column indexes.
// Make sure that what gets printed matches your expectations.
// Try changing a few values in the 2D array using row/column indexes.
// Print it out to make sure that your changes worked as intended.

var colors = [
  ["red", "blue", "pink"],
  ["orange", "green", "purple"],
  ["white", "brown", "black"]
];
console.log(colors[0][2]);
// 5. Write a function that takes in a 2D - array and a string as input.
// The function should return true if the string is found somewhere in the array, and false otherwise.
// Test it using the fruits array, including case with fruits that are there
// and other cases with fruits that are not.

function transposeArray(array, arrayLength) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push([]);
  };
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    };
  };
  return newArray;
}