var generateBtn = document.querySelector("#generate");

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function generatePassword() {


  var charInput = parseInt(prompt("How long do you want your password to be? Between 8 and 128"));
  if (charInput < 8 || charInput > 128) {
    alert("Are you kidding me? I said between 8 and 128. That deffs wasn't between 8 and 128.");
    return
  }


  var passwordArray = []
  var holdingArray = []


  if (confirm("Do you want lowercases?")) {
    holdingArray = holdingArray.concat(lowerCase)
  }
  if (confirm("Do you want uppercases?")) {
    holdingArray = holdingArray.concat(upperCase)
  }
  if (confirm("Maybe some numbers?")) {
    holdingArray = holdingArray.concat(numValue)
  }
  if (confirm("What about special characters?")) {
    holdingArray = holdingArray.concat(specChar)
  }
  if (holdingArray.length == 0) {
    alert("Didnt make the cut. Try again.")
  }

  for (let i = 0; i < charInput; i++) {
    var randomChar = holdingArray[Math.floor(Math.random() * holdingArray.length)];
    passwordArray.push(randomChar);
  }

  return passwordArray.join("").toString()

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);