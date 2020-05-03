// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passcode = generatePassword();
  var passcodeText = document.querySelector("#password");

  passwordText.value = passcode;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
var passCodespec = confirm("would you want special characters in your passcode?");
var passCodeLow = confirm("would you want lower case letters in your passcode?");
var passCodeCap = confirm("would you want upper case letters in your passcode?");
var passCodeNum = confirm("would you want numbers in your passcode?");
var passCode = parseInt(prompt("How many characters should make up your passcode?"));
const form = document.querySelector('passcodeGeneratorForm')
const characterAmountNumber = document.querySelector('characterAmountNumber')
const characterAmountRange = document.querySelector('characterAmountRange')



//code for password generator

var characters = ["#", "!", "@", "$", "<", "^", "%", "*", "&", ")", "+", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var choices = [];

if (passCodespec) {
  choices.push(characters);
}
if (passCodeLow) {
  choices.push(lowerletters);
}
if (passCodeCap) {
  choices.push(capitalLetters);
}
if (passCodeNum) {
  choices.push(numbers);
}

var result = "";

for (var i = 0; i < passCode; i++) {
  var choice = choices[Math.floor(Math.random() * choices.length)];
  console.log (choice)
  var randomSpec = choice[Math.floor(Math.random() * choice.length)];
  result += randomSpec
}

function generatePassword() {
  var length = 8
  char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  result = "";
  for (var i = 0, n = passCode.length; i < length; i++) {
    result += characters.charAT(Math.floor(Math.random() * n));
  }
  return result;
}


