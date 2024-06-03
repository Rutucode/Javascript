let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

/*let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]*/

let newMessage = "Same here!"

messages.push(newMessage)
console.log (messages)

//-----------------------------------------------------------------------------------
for (let i = 0; i < 6; i += 1) {
    console.log(i)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 0; i <100; i += 10){
    console.log(i)
}
//-------------------------------------------------------------------------------------
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}
//--------------------------------------------------------------------------
//let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------

// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}
//--------------------------------------------------------------------------

console.log( course["tags"] )

let age = 75

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")    
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}
//--------------------------------------------------------------------------
let myAge = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
function discount(){
if (age < 6){
    return free;
}
else if  (age > 6 && age <= 17){
    return "child discount" ;
}
else if  (age > 18 && age <= 26){
    return "student discount" ;
}
else if  (age > 27 && age <= 66){
    return "full price" ;
}
else{
    return "senior citizen discount";
}
}
console.log (discount())
//--------------------------------------------------------------------------
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
function countries(){
    let allCountries = ""
        let string = "The 5 largest countries in the world: "
for (let i = 0; i < largeCountries.length; i++){

allCountries +=  largeCountries[i]+" "

 }
 string+=allCountries;
    return (string)
}
console.log(countries())
// Other method 0--------------
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}
//--------------------------------------------------------------------------
//let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
//["China","India","USA","Indonesia","Pakistan"]
largeCountries.pop()
console.log(largeCountries)

largeCountries.push("Pakistan")
console.log(largeCountries)

largeCountries.shift()
console.log(largeCountries)

largeCountries.unshift("China")
console.log(largeCountries)
//--------------------------------------------------------------------------
let dayOfMonth = 31
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
// if (dayOfMonth === true && weekday === true){
//    scary()
// }
// function scary(){
//     return " 😱"
// }

// console.log(scary())
//--------SOL 2------------------
if (dayOfMonth === 31 && weekday === "Friday"){
   console.log(" 😱")
}

//---------------------------------------------------------------------------