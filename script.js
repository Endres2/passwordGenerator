// Assignment Code

var generateBtn = document.querySelector("#generate");

//Array Characters thank you Dan :)

var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
//Empty array for password
var passwordArray = [];
var passwordChar = [];
var passwordLength = 0;
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword =  function(){
  //reset local variables to regenerate password as many times as clicked
  passwordArray = [];
  passwordChar = [];
  passwordLength = 0;
  passwordChar = selectChar();
  passwordLength = passwordSize();
  var password = buildPassword(passwordChar,passwordLength);
  console.log(password);
  return password;
  
}
// Method to select characters allowed in the password generation, checks if no chacarters are selected, and empties array after every click to generate password.
var selectChar = function(){
  //Select types of characters to include in password
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
  //if passwordArray is empty prompts user to select at least one type of character
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
  //Prompts user for an input and makes it an integer
  var numberOfChar = parseInt(prompt("Enter how many characters you would like in your password", "Password Length"));
  //User will be prompted until input is a number and it is in range 8-128
  while(isNaN(numberOfChar) || numberOfChar < 8 || numberOfChar > 128 ){
    numberOfChar = parseInt(prompt("Make sure to enter a number. The character range is 8-128", "Password Length"));
  }
  //return size for buildPassword method
  return numberOfChar;
}

var buildPassword = function(characters, size){
  var awesomePassword=[];
  //loop as many times as number of characters specified
  for(let i = 0; i < size; i++){
    randomIndex = Math.floor(Math.random()*characters.length-1);
    //Make a string from a randomly selected index based on the length of our returned array
    awesomePassword.unshift(characters[randomIndex]);
  }
  return awesomePassword.join("");
}