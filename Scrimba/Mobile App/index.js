/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/


let inputValue = document.getElementById("input-field");

const addToCartBtn = document.getElementById("add-button");

addToCartBtn.addEventListener("click", () =>{
    console.log(inputValue.value)

    /* Scrimba suggested code as we'll use inputvalue multipe times
    
    let inputValue = inputFieldEl.value
    console.log(inputValue) */
})