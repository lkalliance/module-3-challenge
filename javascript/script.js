// Available characters
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["!","@","#","$","%","^","&","(",")","+","=","-","_","~"];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* ----- FUNCTIONS ----- */

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate and return a new password, or a message why user needs to try again
function generatePassword() {
  
  let newPassword = "";

  // Collect the user's preferences for each kind of character
  let useLowerCase = confirm('Would you like to use lower-case letters in your password? Click "OK" for yes, "Cancel" for no.');
  let useUpperCase = confirm('Would you like to use UPPER-CASE LETTERS in your password? Click "OK" for yes, "Cancel" for no.');
  let useNumerals = confirm('Would you like to use numbers in your password? Click "OK" for yes, "Cancel" for no.');
  let useSpecial = confirm('Would you like to use "special characters" in your password? Click "OK" for yes, "Cancel" for no.');

  
  // Test to make sure the user picked at least one kind of character
  // If they didn't, return a pithy response
  if(!(useLowerCase || useUpperCase || useNumerals || useSpecial)) return pithyResponse(typeError);

  
  // Ask the user how long the password should be
  let howMany = prompt("Finally, how long would you like your password? Enter the number of characters here.");


  // Check to make sure the length value is valid and is an integer
  // If it isn't, return a pithy response
  if(!parseInt(howMany)) return pithyResponse(numberError);
  else if (howMany<8 || howMany>128) return pithyResponse(lengthError);

  /* IF WE'VE MADE IT THIS FAR, WE HAVE VALID PARAMETERS */


  // Concatenate the relevant arrays
  let noCharacters = [];
  let allAvailable = noCharacters.concat(useLowerCase?letters:[], useUpperCase?upperLetters:[], useNumerals?numbers:[], useSpecial?special:[]);
  

  // Assemble the password
  for(let i = 0; i < howMany; i++) {
    newPassword += allAvailable[Math.floor(Math.random() * allAvailable.length)];
  }
 
  return newPassword;
}

function pithyResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}