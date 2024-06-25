// Challenge: Import 'initializeApp' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// Challenge: Import 'getDatabase' from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/",
}; // Use your own URL

const app = initializeApp(appSettings); // pass argument from other file
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

let inputFieldEl = document.getElementById("input-field");

const addToCartBtn = document.getElementById("add-button");
let shoppingListEl = document.getElementById("shopping-list");

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

  shoppingListEl.innerHTML += `<li> ${inputValue} <li>`; //append previous items

  emptyInputValue();
  // addToList(inputValue); //use parameter
});

/*
Challenge:
Call the onValue function with
shoppingListInDB as the first argument and
function(snapshot) {} as the second argument
*/
onValue(shoppingListInDB, function (snapshot) {
  //console.log(snapshot.val())
 // Challenge: Change the onValue code so that it uses snapshot.exists() to show items when there are items in the database and if there are not displays the text 'No items here... yet'.

  if (snapshot.exists()){
      // Challenge: Use Object.values() to convert snapshot.val() from an Object to an Array. Create a variable for this.


    let snapshotValuArr = Object.entries(snapshot.val());
  
    clearShoppingListEl();
  
    //console.log(snapshotValuArr)
  
    // Challenge: Write a for loop to iterate on itemsArray and console log each item
    for (let i = 0; i < snapshotValuArr.length; i++) {
     
      // Challenge: Use the appendItemToShoppingListEl(itemValue) function inside of the for loop to append item to the shopping list element for each iteration.
      let itemArry = snapshotValuArr[i];
       // Challenge: Make two let variables:
          // currentItemID and currentItemValue and use currentItem to set both of
      // them equal to the correct values.
      
      let currentItemID = itemArry[0]
      let currentItemValue = itemArry[1]
      addToList(itemArry);
      //console.log(snapshotValuArr[i]);
    }
   } else {
    shoppingListEl.innerHTML =  'No items here... yet'
    }
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

// Challenge: Refactor the line below into its own function.
// Challenge: Refactor the line below into its own function.

function emptyInputValue() {
  inputFieldEl.value = "";
}

function addToList(item) {
 // shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
 let itemId = item[0]
 let itemValue = item[1]

//create Element
let newItem = document.createElement("li")
   
    // Challenge: Make it so the item name shows instead of 'Something'
    newItem.textContent = inputValue
     // Challenge: Attach an event listener to newEl and make it so you console log the id of the item when it's pressed.
    newItem.addEventListener("click", () =>{
     // Challenge: Make a let variable called 'exactLocationOfItemInDB' and set it equal to ref(database, something) where you substitute something with the code that will give you the exact location of the item in question.
     let exactLocationOfItemInDB = ref(database, `shoppingList/${itemId}`)
      // Challenge: Use the remove function to remove the item from the database
     remove(exactLocationOfItemInDB)
    }) // give full location/path - shoppingList/${itemId}

    shoppingListEl.append(newItem)

} //Append a new <li> function || //use parameter as value is coming from top
