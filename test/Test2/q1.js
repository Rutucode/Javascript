//Question 1 --------------------------
//Write a JavaScript function to check whether the given values are the same or not.

let a = 10;
let b = 12;

function checkNum(){
    if(a === b){
        return true;
    } else {
        return false;
    }
}

//Question 2 --------------------------
//2.Write a JavaScript program to test whether the first character of a string is uppercase or not

 
function checkChar(char){
    let firstchar = char[0]
    if (char[0] === firstchar.toUpperCase()){
        return true;
    } else{
        return false;
    }
}

console.log(checkChar("Jyoti"))

//Question 2 --------------------------
/*4.Write a JavaScript program to count number of words in string.
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing */

function length(str){

    return str.length;

}

console.log (length("santosh"))