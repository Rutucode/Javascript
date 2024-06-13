let a = 15
let b = 20
let c = 24

//let  mode = (a > b > c);

function modeChoice(){
if  (a < b && b < c){    
  return "Strict mode";
}

else {
  return "Soft mode";
 }
}
  console.log(modeChoice())