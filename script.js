// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Variables 
var randNumberChars = "0123456789";
var randLowerChars = "abcdefghijklmnopqrstuvwxyz";
var randUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randSpecialChars = "$%^&*()#@!+{}|:><?~`";
var pwsinputall = '' ;


var get = document.querySelector("#generate");
// This puts the password value into the textbox
get.addEventListener("click", function () {
    pwd = generatePassword();
    document.getElementById("password").placeholder = pwd;
});

// Start function to generate password
function generatePassword() {
    
  // User input prompt for charecter amount
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    
  //If statement for action to be taken  
  if (!isNaN(enter) && enter >= 8 && enter <= 128) {
      alert("You chose to generate a password with: " + enter + " characters");
        } else {
      alert("Your Password must have at least 8 and no more than 128 characters");
      return"";
    }
    contUppercase = confirm("Would you like some uppercase characters?");
    if (contUppercase) {
      alert("Uppercase characters will be added.");
      pwsinputall += randUpperChars;
    }
    else {
      alert("Uppercase characters will not be added.");
    }
    
    contLowercase = confirm("Would you like some lowercase characters?");
    if (contLowercase) {
    alert("Lowercase characters will be added.");
    pwsinputall += randLowerChars;
    }
  else {
    alert("Lowercase characters will not be added.");
  }
  contSpecial = confirm("Would you like some special characters?");
    if (contSpecial) {
      alert("Special characters will be added.");
      pwsinputall += randSpecialChars;
    }
    else {
      alert("Special characters will not be added.");
    }
  contNumber = confirm("Would you like some Numeric Value?");
    if (contUppercase) {
      alert("Numeric value will be added.");
      pwsinputall += randNumberChars;      
      alert("Numeric value will be added.");
    }
    else {
      alert("Numeric Value will not be added.");
    }

    if (contUppercase === false && contLowercase === false && contNumbers === false && contSpecial === false) {
      return "One Charecter type is needed.";
    }

    else{
      // PWD variable is an array placeholder for user generated amount of length
    var pwd = "";
 
    //  generate random string equation
    for(var a=0; a < enter; a++){
      var rnum = Math.floor(Math.random()*pwsinputall.length);
      pwd += pwsinputall.substring(rnum,rnum+1);
    }
  }
      // Worked with a personal tutor to incorporate this option
    return pwd;
}


