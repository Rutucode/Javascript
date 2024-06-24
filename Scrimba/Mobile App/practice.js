/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

//--------------------------

let inputField = document.getElementById("input-field");
let addToCartBtn = document.getElementById("add-button");

addToCartBtn.addEventListener("click", () => {
  recordItem();
});

function recordItem() {
  console.log("Tomatos");
}

// Scrimba code

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  console.log(inputValue);
});

//------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  // Add Self url
  databaseURL:
    "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const booksInDB = ref(database, "shoppingList");

const booksEl = document.getElementById("books");

onValue(booksInDB, function (snapshot) {
  let booksArray = Object.values(snapshot.val());

  // Challenge: Write a for loop where you console log each book.
  for (let i = 0; i < booksArray; i++) {
    console.log(booksArray[i]);
  }
});

function clearBooksListEl() {
  booksEl.innerHTML = "";
}

function appendBookToBooksListEl(bookValue) {
  booksEl.innerHTML += `<li>${bookValue}</li>`;
}

//------------------------------------------------------

// Object to arrays syntax

let scrimbaUsers = {
  "00": "sindre@scrimba.com",
  "01": "per@scrimba.com",
  "02": "frode@scrimba.com",
};

console.log(Object.values(scrimbaUsers));

console.log(Object.keys(scrimbaUsers));

console.log(Object.entries(scrimbaUsers));

//------------------------------------------------------
// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values

let scrimbaUsersEmails = Object.values(scrimbaUsers);
// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys

let scrimbaUsersIDs = Object.keys(scrimbaUsers);
// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values

let scrimbaUsersEntries = Object.entries(scrimbaUsers);

// console.log(scrimbaUsersEmails)
// console.log(scrimbaUsersIDs)
// console.log(scrimbaUsersEntries)

//------------------------------------------------------
