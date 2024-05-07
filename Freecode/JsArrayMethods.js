// PB: Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
//-------------------------------------------------------------------------------------
  // PB: Push ["dog", 3] onto the end of the myArray variable.
  // String uses Sq[] brakets as well
  // Setup
const ourArray = [["John", 23], ["cat", 2]];

// Only change code below this line
ourArray.push(["dog", 3])
//-------------------------------------------------------------------------------------

// PB: Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
// Setup
//const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
//-------------------------------------------------------------------------------------
// PB: Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
//const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
//const removedFromMyArray = myArray.shift();
//-------------------------------------------------------------------------------------
//PB: Add ["Paul", 35] to the beginning of the myArray variable using unshift().
// Setup
//const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//-------------------------------------------------------------------------------------
/* PB: Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list. */
const myList = [
  ["Mango", 12],
  ["Soap", 3],
  ["Tootpaste", 2],
  ["coconut", 4 ],
  ["Salt", 1]
];
//-------------------------------------------------------------------------------------
/* PB: Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.*/

function reusableFunction(){
  console.log("Hi World");
}
reusableFunction();
//-------------------------------------------------------------------------------------
/*Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments. */
function functionWithArgs(num1, num2){
  console.log(num1 + num2)
}
functionWithArgs(4, 5);
//-------------------------------------------------------------------------------------










