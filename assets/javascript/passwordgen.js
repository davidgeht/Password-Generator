// function generates a random password based on user choices
function generate(){ 
    // variables of different characters types and character sets
    var passWord = "";
    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    var numericalCharacters = "0123456789";
    var specialCharacters = "!@#$%^&*()";
    var allChar = lowerCaseCharacters + upperCaseCharacters + numericalCharacters + specialCharacters;
    var exclNumCharac = lowerCaseCharacters + upperCaseCharacters + specialCharacters;
    var exclSpeclCharac = lowerCaseCharacters + upperCaseCharacters + numericalCharacters;
    var exclBoth = lowerCaseCharacters + upperCaseCharacters;

    // variables of users password choices
    var pwCharacterLength = prompt("How many characters would you like your password to contain?","8-126 characters"); 
    // Character length restriction
        if (pwCharacterLength< 8){
             return  alert("Character length must be a minimum of 8 characters")
             return   pwCharacterLength;
        } else if (pwCharacterLength> 124){ 
            return  alert("Character length must be less then 124 characters")
         };

    var incSpecialChar = confirm("Do you want to include special characters ?");
    var incNumChar = confirm("Do you want to include numeric characters ?");

    // character set function (based on users choices it creates the character set that the generator then uses)
    function characterSet(){ 
        if (incSpecialChar === true && incNumChar === true){ return allChar;}
        else if (incSpecialChar === false && incNumChar === true){return exclSpeclCharac;}
        else if (incSpecialChar === true && incNumChar === false){return exclNumCharac;}
        else {return exclBoth;}
        }; 


    // loop that generates the password.
    for (var i = 0; i<=pwCharacterLength; i++){
        passWord += characterSet().charAt(Math.floor(Math.random() * Math.floor(characterSet().length)))
        }
        console.log(passWord);
        document.getElementById("password").innerHTML= passWord;
}

// funtion to copy password
function copyPassword(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the password: "+ copyText.value);
}


