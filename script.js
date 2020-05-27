// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

function generatePassword() {
    // config object to store user responses and password configurations
    const config = {
      uppercase: false, 
      lowercase: false, 
      numeric: false,
      special: false,
      length: 0
    }

    // user prompts to get password configs
    config.uppercase = confirm("Do you want to include uppercase characters in your generated password?");
    config.lowercase = confirm("Do you want to include lowercase characters in your generated password?");
    config.numeric = confirm("Do you want to include numeric characters in your generated password?");
    config.special = confirm("Do you want to include special characters in your generated password?");

    // variables and validation of user input to enforce parameters
    let wordLength = 0;
    let ans = "NaN";
  
    while (!parseInt(ans)) {
      ans = parseInt(prompt("How many characters would you like you password to be?"));
      if (!ans) {
        alert("The password length must be a number");
      }
      while (ans < 8 || ans > 128) {
        if (ans < 8) {
          ans = 'NaN';
          alert("Password length cannot be shorter than 8 characters.")
        } else if (ans > 128) {
          ans = 'NaN';
          alert("Password length cannot exceed 128 characters")
        }
      }
    }
  
    wordLength = Math.floor(ans);
    config.length = wordLength;
    console.log(config);

}  