// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ totalPrice.toFixed(2) }`


// My Solution
/*
const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${Math.round(totalPrice)} `

Math.round
 */

//-----------------------------------------------------------------------

// if value is string , then convert to number 
//const totalPrice = "420.69235632455"
const btn = document.getElementById("buy-btn")
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`
