// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const specialChars = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]
var passwordLength = 0
var askNumbers = prompt("Include numbers?", "Y")
var askSpecial = prompt("Include special characters?", "Y")
var askUpper = prompt("Include uppercase letters?", "Y")
var askLower = prompt("Include lowercase letters?", "Y")

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt('How long would you like the password? Please pick a number between 8 - 128.'));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
}if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password cannot be outside the parameters of 8-128. Please adjust.");
} else {
   switch(askNumbers) {
     case "Y", "Yes", "y", "yes":
       askNumbers = true;
       break;
     case "N", "No", "n", "no":
       askNumbers = false;
       break;
     default:
      askNumbers = true;
   };
   switch(askUpper) {
    case "Y", "Yes", "y", "yes":
      askUpper = true;
      break;
    case "N", "No", "n", "no":
      askUpper = false;
      break;
    default:
     askUpper = true;
  };
  switch(askLower) {
    case "Y", "Yes", "y", "yes":
      askLower = true;
      break;
    case "N", "No", "n", "no":
      askLower = false;
      break;
    default:
     askLower = true;
  };
  switch(askSpecial) {
    case "Y", "Yes", "y", "yes":
      askSpecial = true;
      break;
    case "N", "No", "n", "no":
      askSpecial = false;
      break;
    default:
     askSpecial = true;
  };
};

if(askNumbers === false && askLower === false && askUpper === false && askSpecial === false) {
 options= alert("At least one option needs to be selected!");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
