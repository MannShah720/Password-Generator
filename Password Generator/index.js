const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const letSymbol = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let out1El = document.getElementById("out1")
let out2El = document.getElementById("out2")
let lengthEl = document.getElementById("length")
let numEl = document.getElementById("num")
let symbolEl = document.getElementById("symbol")
let buttonEl = document.getElementById("btn")

let array = []

buttonEl.addEventListener("click", function() {
    out1El.textContent = ""
    out2El.textContent = ""
    if (numEl.checked && symbolEl.checked) {
        array = characters
    } else if (numEl.checked) {
        array = letNum
    } else if (symbolEl.checked) {
        array = letSymbol
    } else {
        array = letters
    }
    for (i = 0; i < lengthEl.value; i++) {
        let randNum1 = Math.floor(Math.random() * array.length)
        let randNum2 = Math.floor(Math.random() * array.length)
        out1El.textContent += array[randNum1]
        out2El.textContent += array[randNum2]
    }
});
