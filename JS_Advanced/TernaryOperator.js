// Alternative to if else statements using the ternary operator

/*
Condition returns with truthy or falsy value
condition ? expressionIfTrue : expressionIfFalse
*/

const exerciseTimeMins = 20;

let message = "";
if (exerciseTimeMins < 30) {
  message = "You  need to try harder";
} else if (exerciseTimeMins >= 30 && exerciseTimeMins <= 60) {
  message = "Doing great, keep it up!";
} else {
  message = "Excellent!";
}

console.log(message);

// Using ternary operator

const exerciseMessage =
  exerciseTimeMins < 30 ? "You need to try harder" : "Doing great, keep it up!";

console.log(exerciseMessage);
// ------------------------------------------------------------------------------------
// Same example (with multiple conditions)
const exerciseMessageMultipleConditions =
  exerciseTimeMins < 30
    ? "You need to try harder"
    : exerciseTimeMins < 60
    ? "Doing great, keep it up!"
    : "Excellent!";

console.log(exerciseMessageMultipleConditions);

// ------------------------------------------------------------------------------------
// Another example
const playerGuess = 3;
const correctAnswer = 6;

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

const guessGame = playerGuess === correctAnswer ? "Correct!" : "Wrong!";
console.log(guessMessage);

// Original if else statement
// let message = ''
// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// }
// else {
//     message = 'Wrong!'
// }

// console.log(message)

const guessGameFunctionality =
  playerGuess === correctAnswer
    ? "Correct!"
    : playerGuess < correctAnswer
    ? "Too low!"
    : "Too high!";
console.log(guessMessage);
