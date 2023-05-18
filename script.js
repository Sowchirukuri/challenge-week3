// Assignment Code
function generatePassword(){
  var length=prompt("Enter the length of the password (8-128 characters):");

  //checks the input length
  if(length < 8 || length > 128 || isNaN(length)){
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  //checks atleast one character type is selected
  if(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
    alert("Please select atleast one character type.");
    return;
  }

//defines the character sets
var charset="";
if(includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
if(includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(includeNumeric) charset += "0123456789" ;
if(includeSpecial) charset += "!@#$%^&*";

//generates the password using math.random() 
var pwd = "";
      
      for (var i = 0; i < length; i++) {
        var randomPwd = Math.round(Math.random() * charset.length);
        pwd += charset.charAt(randomPwd);
      }

      alert("Your generated password is:\n" + pwd);
    }


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
