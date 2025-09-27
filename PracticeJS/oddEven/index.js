// Problem1

function isEven(num){
if (num % 2 === 0){
    return true;
    } return false;
}
console.log(isEven(9))
console.log(isEven(2))

// Problem 2
// adds up only the even digits.
 
     
function getEvenDigitSum(num){
let unitDigit = 0;  // to store the digit we are currently checking
let sumOfDigits = 0;  // to store the sum of even digits

while (num > 0){   // loop runs until all digits are checked
    unitDigit = num % 10;  // get the last digit (modulus 10)

        if (unitDigit % 2 === 0){  // check if digit is even
            sumOfDigits += unitDigit; // add to sum if even
        }
        num = parseInt(num/10); // remove the last digit, look at the next one 
    }

    return sumOfDigits;
}

console.log(getEvenDigitSum(112));
console.log(getEvenDigitSum(212));

// Problem 3 

function getSumOfFirstNEvenNum(n){
    let sum = 0;
    let count = 1;
    let number= 2;

    while(count <= n){
        sum+= number;
        number+= 2;
        count++;
    }
    return sum;
}

console.log(getEvenDigitSum(5));
console.log(getEvenDigitSum(16));
console.log(getEvenDigitSum(289));

//problem 4 
function getSumOfFirstNOddNumber(n){
    let num = 1;
    let sum = 0;
    let count = 1;

    while(count <= n){
        sum += num;
        num+= 2;
        count++;
    }
    return sum;
}
console.log("getSumOfFirstNOddNumber (3) = " + getSumOfFirstNOddNumber(3)) //1+3+5
console.log(getSumOfFirstNOddNumber(5))

// Problem 5
function areaOfCircle(r){
    if (r === 0){
        return "invalid value"
    }
    let area = 3.14 * r * r
    return area;
}

console.log("area of circile radius(4)"+areaOfCircle(4));

// rectangle area l*b

function areaOfRectangle(l, b){
    if (l === 0 || b === 0){
        return "invalid value"
    }
   let  area = l*b;
    return area
}
console.log("area of rectangle "+areaOfRectangle(3, 8))
console.log("area of rectangle of length 0 & breadth 0 =" + areaOfRectangle(0, 0))

// Problem 
 function calculateFeetAndInchesToCentimeter(feet , inch){
    function feetToInch(feet) {
        let inches = feet * 12;
        return inches;
    }

    function inchToCentimeters(inch){
        let centimeters = inch * 2.54;
        return centimeters;
    }

    inch = feetToInch(feet) + inch;  // incase of 5 feet& 4 inch   feetToInch(feet = 5) + inch (4)

    let centimeters = inchToCentimeters(inch)
    return centimeters

 }


 console.log("my height is 5.4 inch = " + calculateFeetAndInchesToCentimeter(5, 4) + "centimeters" );

 //152.4 + 10.16

//  Problem 
// get first 5 numbers 
function isNumberDivisibleBy3and5(num){
    if (num % 3 === 0 && num % 5 === 0){
        return true
    } return false
} 

// function getFirstFiveNumbersDividedBy3And5(num1,num2)(params) {
    
// }