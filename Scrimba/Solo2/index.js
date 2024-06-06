const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let generateBtn = document.getElementById("generate")
let randomPass1 = document.getElementById("password1")
let randomPass2 = document.getElementById("password2")

let charLength  = 15

function randonchar(){
    let randomPass = Math.floor(Math.random() * characters.length) 
    return characters[randomPass]
}

//return randonchar()

function generatedPassword() {
    let randomPass = ""
for (let i = 0; i < 15; i++){
    randomPass += randonchar()
}
return randomPass;
}

//const passwordOne = generatedPassword()
document.getElementById("password1").innerText = (generatedPassword())

console.log(generatedPassword())

