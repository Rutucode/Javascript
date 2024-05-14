//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
/*We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3. */

function timesFive(num){
    return num * 5;
  }
  
  const anawer = timesFive(5)
//-------------------------------------------------------------------------------------
/*Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.*/
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//-------------------------------------------------------------------------------------
//The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.
function myLocalScope() {
    // Only change code below this line
  const myVar = 3;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//-------------------------------------------------------------------------------------
  //Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
//-------------------------------------------------------------------------------------
    //Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
    // Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
//-------------------------------------------------------------------------------------
    //Call the processArg function with an argument of 7 and assign its return value to the variable processed.
    // Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//-------------------------------------------------------------------------------------
/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
  // Only change code below this line
arr.push(item);
var removedItem = arr.shift();

  return removedItem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
 
 
//-------------------------------------------------------------------------------------
// PB: Modify the welcomeToBooleans function so that it returns true instead of false.
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
//-------------------------------------------------------------------------------------

// PB: Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";
}


  // Only change code above this line

//-------------------------------------------------------------------------------------

//PB:  Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//-------------------------------------------------------------------------------------
//PB: Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
//-------------------------------------------------------------------------------------
//The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
//-------------------------------------------------------------------------------------
//Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
//-------------------------------------------------------------------------------------
//Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
//-------------------------------------------------------------------------------------
//Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
  if (val > 100 ) {  // Change this line
    return "Over 100";
  }

  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//-------------------------------------------------------------------------------------
//Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//-------------------------------------------------------------------------------------
//Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//-------------------------------------------------------------------------------------
//Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//-------------------------------------------------------------------------------------
// Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
//-------------------------------------------------------------------------------------
//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
//-------------------------------------------------------------------------------------
//Combine the if statements into a single if/else statement.
/*function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4); */
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
//-------------------------------------------------------------------------------------
//Convert the logic to use else if statements.
/*function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7); */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";
 }
}

testElseIf(7);
//-------------------------------------------------------------------------------------
//Change the order of logic in the function so that it will return the correct statements in all cases.
/*function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7); */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
//-------------------------------------------------------------------------------------
/*Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

 */
function testSize(num) {
  // Only change code below this line
if (num < 5) {
return "Tiny";
}
else if (num < 10) {
return "Small";
}
else if (num < 15) {
return "Medium";
}
 else if (num < 20) {
return "Large";
}
else if (num >= 20) {
return "Huge";
}
  return "Change Me";
  // Only change code above this line
}

testSize(7);
//-------------------------------------------------------------------------------------
/*In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
   if (strokes === 1){
  return "Hole-in-one!";
}
else if (strokes <= par-2){
  return "Eagle";
}
else if (strokes == par-1){
  return "Birdie";
}
else if (strokes === par){
  return "Par";
}
else if (strokes === par + 1){
  return "Bogey";
}
else if (strokes === par + 2){
  return "Double Bogey";
} 
  else {
  return "Go Home!";
}
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

/*----- sol 2 */
function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes === 1) return "Hole-in-one!";

  else if ((strokes - par) <= -2) return 'Eagle';

  else if ((strokes - par) === -1) return 'Birdie';

  else if (strokes === par) return 'Par';

  else if ((strokes - par) === 1) return 'Bogey';

  else if ((strokes - par) === 2) return 'Double Bogey';

  else return 'Go Home!';
  // Only change code above this line
  //------ if we write else if   instead of else soln is accepeted
  /*
  else if (strokes >= par + 3) {
  return "Go Home!";
}*/
  /* EXPLAINATION
  In JavaScript, the else statement does not take a condition like else (strokes >= par + 3). It should be just else without any condition. The else statement is executed if none of the preceding if or else if conditions are true. */
}

// Change these values to test
golfScore(5, 1);
/*----- sol 3 */
//const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
//-------------------------------------------------------------------------------------
/*Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta*/
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
case 1 :   
answer = "alpha";
break;

case 2 :   
answer = "beta";
break;
case 3 :   
answer = "gamma";
break;
case 4 :   
answer = "delta";
break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//-------------------------------------------------------------------------------------
/*Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
*/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c": 
  answer = "cat";
  break;
  
  default: 
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
//-------------------------------------------------------------------------------------
/*Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High */
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1 :
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High"
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
//-------------------------------------------------------------------------------------
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

//Change the chained if/else if statements into a switch statement.
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case "bob":
  answer = "Marley";
  break;

   case 42: 
   answer = "The Answer";
   break;
   
   case 1: 
   answer = "There is no #1";
   break; 
   
   case 99: 
   answer = "Missed me by this much!";
   break;
   
   case 7: 
   answer = "Ate Nine";
}
  // Only change code above this line
  return answer;
}

chainToSwitch(7);
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
