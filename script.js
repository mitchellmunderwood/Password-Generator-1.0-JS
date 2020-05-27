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

function generatePassword() {
    // config object to store user responses and password configurations
    const config = {
      uppercase: false, 
      lowercase: false, 
      numeric: false,
      special: false,
      length: 0
    }

    // user prompts to get password configs and validation to ensure at least 1 type of character is selected

    let no_char = false;

    while (!no_char) {
    config.uppercase = confirm("Do you want to include uppercase characters in your generated password?");
    config.lowercase = confirm("Do you want to include lowercase characters in your generated password?");
    config.numeric = confirm("Do you want to include numeric characters in your generated password?");
    config.special = confirm("Do you want to include special characters in your generated password?");
    no_char = (config.uppercase || config.lowercase || config.numeric || config.special)
    if (!no_char) {
      alert("you have to select at least one type of character to generate a password")
    }
    }


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

    let myPassword = '';

    // arrays for password characters
    const upperCaseCharacters = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const numericCharacters = [1,2,3,4,5,6,7,8,9,0];
    const specialCharacters = ["!","@","#","$","%","^","&","*","|","?",".","~"];
  
    // loop to generate password of given length, based on config properties
    while (myPassword.length !== config.length) {
      if (config.uppercase) {
        let randomNum = Math.floor(Math.random() * (upperCaseCharacters.length));
        myPassword = myPassword + upperCaseCharacters[randomNum]
        if (myPassword.length === config.length) {break;}
      }
      if (config.lowercase) {
        let randomNum = Math.floor(Math.random() * (lowerCaseCharacters.length));
        myPassword = myPassword + lowerCaseCharacters[randomNum]
        if (myPassword.length === config.length) {break;}
      }
      if (config.numeric) {
        let randomNum = Math.floor(Math.random() * (numericCharacters.length));
        myPassword = myPassword + numericCharacters[randomNum]
        if (myPassword.length === config.length) {break;}
      }
      if (config.special) {
        let randomNum = Math.floor(Math.random() * (specialCharacters.length));
        myPassword = myPassword + specialCharacters[randomNum]
        if (myPassword.length === config.length) {break;}
      }
  
    }
  
    console.log('Password', myPassword);
    console.log('Password Length', myPassword.length);

    // password return for function
    return(myPassword);

}  