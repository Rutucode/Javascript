function odd(a){
    if(a % 2 != 0){
        return true;
    } else {
        return false;
    }
}

let num = 8;
if (odd(num)){
    console.log (num + " is a odd number");
} else {
    console.log (num + " is not a odd number");
}
