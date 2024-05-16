
function even(a){
    // console.log(a%2);
     if(a % 2 == 0){
         return true;
     } else{
         return false;
     }
 }
 
 let num = 8
 if (even(num)){
     console.log(num + "is a even number");
 } else{
     console.log(num + "is not a even number");
 }