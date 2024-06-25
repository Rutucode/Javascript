import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const booksInDB = ref(database, "books");

const booksEl = document.getElementById("books");
//onValue function runs everytime there is edit to database

onValue(booksInDB, function (snapshot) {
  let booksArray = Object.values(snapshot.val());
  clearBooksListEl(); // clears before starting to append

  // Challenge: Write a for loop where you console log each book.

  for (let i = 0; i < booksArray.length; i++) {
    currentBooks = booksArray.length[i];
    // console.log(currentbooks)

    // Challenge: Use the appendBookToBooksListEl() function to append book instead of console logging

    appendBookToBooksListEl(currentBooks); // bookValu is not here so we substitue it with currentBooks
  }
});

function clearBooksListEl() {
  booksEl.innerHTML = "";
}

function appendBookToBooksListEl(bookValue) {
  booksEl.innerHTML += `<li>${bookValue}</li>`;
} // bookValue is parameter of function
