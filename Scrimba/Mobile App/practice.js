/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

let inputField = document.getElementById("input-field")
let addToCartBtn = document.getElementById("add-button")

addToCartBtn.addEventListener("click", ()=>{
  recordItem()  
})

function recordItem(){
  console.log("Tomatos")  
}

// Scrimba code

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})

//------------------------------------------------------