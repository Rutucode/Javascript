let personObject = {
  name: "Rutuja",
  age: "24",
  country: "India",
};

function myData() {
  let dataLog = `${object.name} is ${object.age} years old and lives in ${object.country}`;
  return dataLog;
}

console.log(myData());
// ---------------------------------------------------------------------------------------------------------
function ticketAge(age) {
  if (age < 6) {
    return "Free";
  } else if (age >= 6 && age <= 17) {
    return "child discount";
  } else if (age >= 18 && age <= 26) {
    return "stuDent discount";
  } else if (age >= 27 && age < 66) {
    return "full price";
  } else {
    return "senior citizen discount";
  }
}

console.log(ticketAge(26));

// ---------------------------------------------------------------------------------------------------------

// I returned in loop so loop stopped
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

function forLoopFunction() {
  let largestCountriesList = "The 5 largest countries in the world: ";
  for (let i = 0; i < largeCountries.length; i++) {
    //console.log(largeCountries[i])
    largestCountriesList += ` - ${largeCountries[i]}\n `;
  }
  return largestCountriesList;
}

console.log(forLoopFunction());

// Other way (Better)
function loopFunction() {
  let countriesList = "The 5 largest countries in the world:\n";
  for (const country of largeCountries) {
    countriesList += `- ${country}\n`;
  }
  return countriesList;
}

loopFunction();

// --------------------------------------------------------------------------------------------------------

// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random
// emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let fighter1 = fighters[Math.floor(Math.random() * fighters.length)];
  let fighter2 = fighters[Math.floor(Math.random() * fighters.length)];
  stageEl.textContent = `${fighter1} VS ${fighter2}`;

  /*
        stageEl.textContent =`${fighters[Math.floor(Math.random() * fighters.length)]} vs ${fighters[Math.floor(Math.random() * fighters.length)]}` ;
    */
});

// --------------------------------------------------------------------------------------------------------
// Challenge:
// We have a list of fruits that contains apples and oranges.
// Write a function that puts all the apples in the appleShelf <div>
// and all the oranges on the orangeShelf <div>.

let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
function addToShelf() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎") {
      appleShelf.textContent += fruits[i];
    } else if (fruits[i] === "🍊") {
      orangeShelf.textContent += fruits[i];
    }
  }
}
addToShelf();

function separateFruits() {
  appleShelf.textContent = "";
  orangeShelf.textContent = "";
  for (const fruit of fruits) {
    if (fruit === "🍎") {
      appleShelf.textContent += fruit;
    } else if (fruit === "🍊") {
      orangeShelf.textContent += fruit;
    }
  }
}
separateFruits();
