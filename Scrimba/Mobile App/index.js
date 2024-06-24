// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"; // Use your own URL

const appSettings = {
  databaseURL:
    "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings); // pass argument from other file
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

let inputValue = document.getElementById("input-field");

const addToCartBtn = document.getElementById("add-button");

addToCartBtn.addEventListener("click", () => {
  let inputValue = inputFieldEl.value;
  /* Scrimba suggested code as we'll use inputvalue multipe times
    let inputValue = inputFieldEl.value
    console.log(inputValue) */

  // Challenge: Use the Firebase function 'push' to push inputValue to the database
  push(shoppingListInDB, inputValue); //give ref

  // Challenge: Clear the input field when button is pressed
  inputValue.value = "";

  // Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>

  let addShoppingList = document.getElementById("shopping-list");

  addShoppingList.innerHTML += `<li> ${inputValue} <li>`; //append previous items

  emptyInputValue();
  addToList(inputValue); //use parameter
});
// Challenge: Refactor the line below into its own function.
// Challenge: Refactor the line below into its own function.

function emptyInputValue() {
  inputFieldEl.value = "";
}

function addToList(inputValue) {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
} //Append a new <li> function || //use parameter as value is coming from top
