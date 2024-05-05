
// This is in-line code

/*This is a multi-line code */

var myName;

// Setup
var a;

// Only change code below this line
a = 7;

//PROBLEM: Assign the contents of a to variable b.

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;

//PROBLEM: Define a variable a with var and initialize it to a value of 9.
var a = 9;

//PROBLEM: Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

/*var myName = "your name";

"your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.*/

var myFirstName = "your name";

var myLastName = " your last name"

//PROBLEM: Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

/*When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined. */

// Only change code below this line
var a;
var b;
var c;

a = 5;
b = 10;
c = "I am a"
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//In JavaScript all variables and function names are case sensitive. This means that capitalization matters.
/* Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized. */

//PROBLEM: Modify the existing declarations and assignments so their names use camelCase.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//PROBLEM: Update the code from var  to let keyword
let catName = "Oliver";
let catSound = "Meow!";

/* PROBLEM: Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables. */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//Change the 0 so that sum will equal 20.

const sum = 10 + 10;

//Change the 0 so the difference is 12.
const difference = 45 - 33;

//Change the 0 so that product will equal 80.
const product = 8 * 10;

//Change the 0 so that the quotient is equal to 2.
const quotient = 66 / 33;

//Change the code to use the ++ operator on myVar.
let myVar = 87;

// Only change code below this line
myVar = myVar++ + 1;

//Change the code to use the -- operator on myVar.
//let myVar = 11;

// Only change code below this line
myVar = myVar-- - 1;

//Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 8.3;

//Change the 0.0 so that product will equal 5.0
// const product = 2.0 * 2.5;

//Change the 0.0 so that quotient will equal to 2.2.
// const quotient = 4.4 / 2.0; // Change this line

//Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//Convert the assignments for a, b, and c to use the -= operator.
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//Convert the assignments for a, b, and c to use the *= operator.
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;

//Convert the assignments for a, b, and c to use the /= operator.
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;