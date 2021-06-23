// Assignment Code

var generateBtn = document.querySelector("#generate");

//Array Characters

var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
//Empty array for password
var passwordArray = [];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword =  function(){
  //passwordArray = [];
  //selectChar();
  //passwordSize();
  buildPassword();
}
// Method to select characters allowed in the password generation, checks if no chacarters are selected, and empties array after every click to generate password.
var selectChar = function(){
  if(confirm("Add lowercase?")){
    passwordArray = passwordArray.concat(lowerCasedCharacters);
    alert("Lowercase added");
  }
  if(confirm("Add Uppercase?")){
    passwordArray = passwordArray.concat(upperCasedCharacters);
    alert("Uppercase added");
  }
  if(confirm("Add numeric?")){
    passwordArray = passwordArray.concat(numericCharacters);
    alert("Numeric added");
  }
  if(confirm("Add special?")){
    passwordArray = passwordArray.concat(specialCharacters);
    alert("Special added");
  }
  if(!passwordArray.length){
    alert("Choose at least one character type");
    generatePassword();
  }
  else{
    return passwordArray;
  }

}

//Method to select size of password to generate, it checks if input is NaN and if number is between specified range 8-128
var passwordSize = function(){
  var numberOfChar = parseInt(prompt("Enter how many characters you would like in your password", "Password Length"));
  while(isNaN(numberOfChar) || numberOfChar < 8 || numberOfChar > 128 ){
    numberOfChar = parseInt(prompt("Make sure to enter a number. The character range is 8-128", "Password Length"));
  }
  return numberOfChar;
}

var buildPassword = function(){
  
}