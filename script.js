// Assignment Code
var generateBtn = document.querySelector("#generate");
//All the characters available for inclusion
var lowerCaseTop = ("abcdefghijklmnopqrstuvwxyz")
var upperCaseTop = ("ABCDEFGHIJKLMNOPQRSTUVWZYZ")
var numericCharactersTop = ("0123456789")
var specialCharactersTop = ("!@#$%^&*()")


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//Defining generatePassword function
function generatePassword(){
  var passwordLength = prompt("How long would you like your password to be?\nYour password must be 8-128 characters");// console.log (passwordLength);
  var lowerCase = confirm("Do want your password to include lowercase?");//console.log (lowerCase);
  var upperCase = confirm("Do want your password to include uppercase?");//console.log (upperCase);
  var numericCharacters = confirm("Do want your password to include numeric characters?");//console.log (numericCharacters);
  var specialCharacters = confirm("Do want your password to include special characters?");
  console.log(passwordLength,lowerCase,upperCase,numericCharacters,specialCharacters);

 // generate Password conditions
 // WHEN all prompts are answered
 // THEN a password is generated that matches the selected criteria

  var generatePassword ="";

  if(lowerCase==true) {
    generatePassword += lowerCaseTop;

  }

  if (upperCase==true) {
    generatePassword += upperCase;
    
  }

  if (numericCharacters == true){
    generatePassword += numericCharacters

  }

  if (specialCharacters == true){
    generatePassword += specialCharacters

  }


//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

  return "New password will appear here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
