// Assignment Code
var generateBtn = document.querySelector("#generate");




// const form = document.querySelector('passcodeGeneratorForm')
// const characterAmountNumber = document.querySelector('characterAmountNumber')
// const characterAmountRange = document.querySelector('characterAmountRange')



//code for password generator
function generatePassword() {
  var passCodespec = confirm("would you want special characters in your passcode?");
  var passCodeLow = confirm("would you want lower case letters in your passcode?");
  var passCodeCap = confirm("would you want upper case letters in your passcode?");
  var passCodeNum = confirm("would you want numbers in your passcode?");
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
  if(choices.length === 0){
    alert('You must select one character type!')
    return
  }
  var passCode = parseInt(prompt("How many characters should make up your passcode?"));
  var result = "";
  if(passCode<9 || passCode > 128){
    alert('Password must be greater than 8 and less than 129 characters')
    return 
  }
  for (var i = 0; i < passCode; i++) {
    var choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice)
    var randomSpec = choice[Math.floor(Math.random() * choice.length)];
    result += randomSpec
  }
  return result
}
// function generatePassword() {
//   var length = 8
//   char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   result = "";
//   for (var i = 0, n = passCode.length; i < length; i++) {
//     result += characters.charAT(Math.floor(Math.random() * n));
//   }
//   return result;
// }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== undefined) {
    passwordText.value = password;

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


