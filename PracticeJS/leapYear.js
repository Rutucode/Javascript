//Write a program to determine whether a given year is leap year or not
function leap(a){
    if(a % 400 == 0){
        return "leap year";
    }
    else if(a % 100 == 0){
     return "not a leap year";   
    }
   else if (a % 4 == 0){
        return "leap year";
    } else{
        return "not a leap year";
    }
}

let a = 3000
console.log (leap(a));