// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on user input
function generatePassword() {
  var passwordLength = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );
  passwordLength = parseInt(passwordLength);

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string if the length is invalid
  }

  var lowercaseConfirm = confirm("Include lowercase characters?");
  var uppercaseConfirm = confirm("Include uppercase characters?");
  var numericConfirm = confirm("Include numeric characters?");
  var specialConfirm = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (
    !lowercaseConfirm &&
    !uppercaseConfirm &&
    !numericConfirm &&
    !specialConfirm
  ) {
    alert("At least one character type should be selected.");
    return ""; // Return an empty string if no character type is selected
  }

  // Define character sets based on user selection
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

  var allowedChars = "";

  // Append selected character sets to the allowed characters string
  if (lowercaseConfirm) {
    allowedChars += lowercaseChars;
  }
  if (uppercaseConfirm) {
    allowedChars += uppercaseChars;
  }
  if (numericConfirm) {
    allowedChars += numericChars;
  }
  if (specialConfirm) {
    allowedChars += specialChars;
  }

  var password = "";

  // Generate password by randomly selecting characters from the allowed characters string
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
