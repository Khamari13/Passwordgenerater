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

if (passcodeSpec) {
  choices.push(specialCharacters);
}
if (passcodeLowAlp) {
  choices.push(lowerletters);
}
if (passCodeCapAlp) {
  choices.push(capitalLetters);
}
if (passCodeNum) {
  choices.push(numbers);
}

var resuult = "";

for (var i = 0; passCode; i++) {
  var choice = choices[Math.floor(Math.random)];
  var randomSpec = choice[Math.floor(Math.random)];
  reult += randomSpec
}

for (var i = 0; passCode; i++) {
  var choice = choices[Math.floor(Math.random)];
  var randomCap = choice[Math.floor(Math.random)];
  reult += randomSpec
}

for (var i = 0; passCode; i++) {
  var choice = choices[Math.floor(Math.random)];
  var randomLow = choice[Math.floor(Math.random)];
  reult += randomSpec
}

for (var i = 0; passCode; i++) {
  var choice = choices[Math.floor(Math.random)];
  var randomNum = choice[Math.floor(Math.random)];
  reult += randomSpec
}

alert()


