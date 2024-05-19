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
 /*
let countEl = document.getElementById("count-el")  // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count // IMP
}
//used getElementById and inside function "countEl" made equal to count
//___________________

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}*/
//----------------------------NEW-------------------------------------------------

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
console.log(saveEl)
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
  let  saveNum = count + "-" + "" ;
     //  saveEl.innerText = "Previous entires:" + " " + saveNum;
      saveEl.innerText += saveNum;
    console.log(count)
    countEl.textContent = 0 //to restat from zero
    count = 0
    
}
save()


