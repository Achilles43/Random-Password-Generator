const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function setPasswords() {
    let passwordLength = document.querySelector(".arrows-span").textContent;
    let password = "";
     for(let i=0; i<passwordLength;i++){
        let randomNum = Math.floor(Math.random() * characters.length);    
        password += characters[randomNum];
    } 
    return password
}

function generatePassword() {
    document.getElementById("input1").value = setPasswords()
    document.getElementById("input2").value = setPasswords()
}

document.querySelector("#input1").style="color:white;font-size:0.95rem;font-weight:bold"
document.querySelector("#input2").style="color:white;font-size:1rem;font-weight:bold"

//become red on mousclick:
let becomeRed = document.querySelector(".arrows-span");
document.querySelector('.arrow-left').onmousedown = function () {
    becomeRed.style.color = "red";
}
document.querySelector('.arrow-left').onmouseup = function () {
    becomeRed.style.color = "black";
}
//become green on mousclick:
let becomeGreen = document.querySelector(".arrows-span");
document.querySelector('.arrow-right').onmousedown = function () {
    becomeGreen.style.color = "#36d399";
}
document.querySelector('.arrow-right').onmouseup = function() {
    becomeGreen.style.color = "black";
}

// number of characters in password:
let numberOfCharacters = 5;
function arrowRight() {
    numberOfCharacters += 1;
    let getClassOfSpan = document.querySelector(".arrows-span");

    if(numberOfCharacters>22){
        numberOfCharacters=22;
    }
    getClassOfSpan.textContent = numberOfCharacters;
}; 

function arrowLeft() {
    numberOfCharacters -= 1;
    let getClassOfSpan = document.querySelector(".arrows-span");
    
    if (numberOfCharacters<6) {
        numberOfCharacters = 5;
    }
    getClassOfSpan.textContent = numberOfCharacters;
};

function copy1() {
    let copyText = document.getElementById("input1").value;
    navigator.clipboard.writeText(copyText);
        alert("Copied Text: " + copyText);
};

function copy2() {
    let copyText = document.getElementById("input2").value;
    navigator.clipboard.writeText(copyText);
        alert("Copied Text: " + copyText);
}

    

