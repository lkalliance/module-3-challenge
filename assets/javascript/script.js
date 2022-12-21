// Available characters
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const special = ["!","@","#","$","%","^","&","(",")","+","=","-","_","~"];

// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordArea = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to password field
passwordArea.addEventListener("click", autoSelect);




/* ----- FUNCTIONS ----- */

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.textContent = password;
  passwordText.className = password.includes(" ")?"error":"end";
}

// Generate and return a new password, or a message why user needs to try again
function generatePassword() {
  
  let newPassword = "";

  // Collect the user's preferences for each kind of character
  let useLowerCase = confirm('Would you like to use lower-case letters in your password? Click or tap "OK" for yes, "Cancel" for no.');
  let useUpperCase = confirm('Would you like to use UPPER-CASE LETTERS in your password? Click or tap "OK" for yes, "Cancel" for no.');
  let useNumerals = confirm('Would you like to use numbers in your password? Click or tap "OK" for yes, "Cancel" for no.');
  let useSpecial = confirm('Would you like to use "special characters" in your password? Click or tap "OK" for yes, "Cancel" for no.');

  
  // Test to make sure the user picked at least one kind of character
  // If they didn't, return a pithy response
  if(!(useLowerCase || useUpperCase || useNumerals || useSpecial)) return pithyResponse(typeError);

  
  // Ask the user how long the password should be
  let howMany = prompt("Finally, how long would you like your password? Enter the number of characters here, from 8 to 128.");


  // Check to make sure the length value is valid and is an integer
  // If it isn't, return a pithy response
  if(!parseInt(howMany)) return pithyResponse(numberError);
  else if (howMany < 8 || howMany > 128) return pithyResponse(lengthError);


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

// This function randomly selects a pithy response from the provided array of responses
// The arrays are defined in the "pithy.js" file.
function pithyResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// This function auto-selects the text in the "#password" box when the user clicks or taps on it
function autoSelect(e) {
  // check to make sure the content of the field is actually the password
  // if not, leave now
  if ( e.target.className != "end" ) return;

  // select the the contents of the div
  let newPwd = new Range();
  let text = e.target.firstChild;
  newPwd.setStart(text, 0);
  newPwd.setEnd(text, text.length);
  window.getSelection().addRange(newPwd);
}