// Available characters
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const special = ["!","@","#","$","%","^","&","(",")","+","=","-","_","~"];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // This function starts and ends the process for generating
  // the new password, including getting the user's preferences
  let newPassword = "";

  // Collect the user's preferences for each kind of character
  let useLowerCase = confirm('Would you like to use lower-case letters in your password? Click "OK" for yes, "Cancel" for no.');
  let useUpperCase = confirm('Would you like to use upper-case letters in your password? Click "OK" for yes, "Cancel" for no.');
  let useNumerals = confirm('Would you like to use numbers in your password? Click "OK" for yes, "Cancel" for no.');
  let useSpecial = confirm('Would you like to use special characters in your password? Click "OK" for yes, "Cancel" for no.');

  // Create reference object to pass to character generator
  let kindsOfCharacters = {
    lowerCase: useLowerCase,
    upperCase: useUpperCase,
    numerals: useNumerals,
    special: useSpecial
  }
  
  // Test to make sure the user picked at least one kind of character
  // If they didn't, return a pithy response
  if(!(useLowerCase || useUpperCase || useNumerals || useSpecial)) return "Well you have to use SOME kind of character! Try again or leave before I contact the authorities.";
  
  // Ask the user how long the password should be
  let howMany = prompt("Finally, how long would you like your password? Enter the number of characters here.");

  // Check to make sure the length value is valid
  // If it isn't, return a pithy response
  if(!typeof(howMany)=="number" || howMany<8 || howMany>128) return "Come on. You know that the password has to be from 8 to 128 characters. I know that you know. And you know that I know that you know. Get your head out of your bum!";


  /* IF WE'VE MADE IT THIS FAR, WE HAVE VALID PARAMETERS */

  while(newPassword.length < howMany) {
    // until the new password is long enough, add a new character
    newPassword+=generateCharacter(kindsOfCharacters);
  }

  return newPassword;
}


function generateCharacter(kinds) {
  return "a";
}
