// javascript



function shouldWake( hourofday, barking ){
    
    if(hourofday >= 23 || hourofday < 0 ){
        
    console.log(" dont wake up");
    }
    else if (hourofday < 8 && hourofday >= 0 && barking){
         console.log(" wakeup "); 
    }
    else{
        console.log("sleep")
    }
}

 console.log(shouldWake(15, true)) 


 //---------------------------------------------------------
// javascript



function sumOfDigits(num){
    let sum = 0;
    let number = num; 
    
    while ( number > 0) {
     let   digit = (number % 10);
    // console.log(digit+ "digit")
     
        number = Math.round(number / 10);
   //   console.log(number + "number")  
       
        sum += digit 
      }
      return sum
 }
 console.log(sumOfDigits(123))

    
//--------------------------------------------------
// javascript

function sumOfFirstAndLastDigits(num){
    let sum = 0;
    let number = num; 
    
    while ( number > 0) {
     let   digit = (number % 10);
     
        number = Math.round(number / 10); 
    
       if (count === 0){
        sum = digit + number
       }
       else if (count > 0 && num == 0){
            sum = digit + number  
        }
       }
    
      //  sum = digit + sum
    
      return sum
 }
 console.log(sumOfFirstAndLastDigits(123))
console.log(sumOfFirstAndLastDigits(1234)); 
console.log(sumOfFirstAndLastDigits(4567));  

//--------------------------------------------------
/*
let facNum = 12
function getfactor(num){
    for (i = 2; i <= num; i++){
        if (num % i === 0){
            return ()
        } else{

        }
    }
}

*/