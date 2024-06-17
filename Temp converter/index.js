//Fahrenheit To Celsius Converter

let inputs = ""
const inputEl = document.getElementById("temp1")
const inputBtn = document.getElementById("input-btn")
const outputEl = document.getElementById("output")
let formula = // c/5 = (f-32)/9 


function  celToFah(celsius){
  const fahrenheit = celsius * 1.8 + 32
  return fahrenheit;
}


//console.log(fahrenheitToCelsius(55))


function fahrenheitToCelsius(fahrenheit){
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}
//console.log(celToFah(25))

document.getElementById("input-btn").addEventListener("click", function(){
  //inputs.push(inputEl.value)
  //inputEl.value = ""
  inputContent()
})

function inputContent(){ 
    let degree = ""
   let celtemp = fahrenheitToCelsius(inputEl.value)  
     degree += "<div>" +celtemp+ " °C</div>"
outputEl.innerHTML = degree
} 