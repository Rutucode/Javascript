import { add } from "./function"

console.log(add(2,8))
const appSettings = {
    databaseURL: "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(`${inputValue} added to database`)
})