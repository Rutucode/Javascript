// document.getElementById('count-el').innerText = 5;

/*let count = 0;
console.log(count)*/

// 1. Create a variable, myAge, and set its value to your age

// 2. Log the myAge variable to the console
/*
let myAge = 23;
console.log(myAge)
*/

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
/*
let count = 0

function   increment() {
    count = count + 1
   console.log(count)
 }*/
 //-------

 //NEXT STEP
 // camelCase
let countEl = document.getElementById("count-el")  // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count // IMP
}
//used getElementById and inside function "countEl" made equal to count


// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}
