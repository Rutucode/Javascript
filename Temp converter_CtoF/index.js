// Celsius To Fahrenheit Converter

let inputs = ""
const inputEl = document.getElementById("temp1")
const inputBtn = document.getElementById("input-btn")
const outputEl = document.getElementById("output")


function  celToFah(celsius){
  const fahrenheit = celsius * 1.8 + 32
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}
//console.log(celToFah(25))

document.getElementById("input-btn").addEventListener("click", function(){
 
  inputContent()
})

function inputContent(){ 
    let degree = ""
   let celtemp = celToFah(inputEl.value)  
     degree += "<div>" + celtemp + " °F</div>"
outputEl.innerHTML = degree
} 