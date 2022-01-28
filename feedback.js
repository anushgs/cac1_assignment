let validEmail;
let validPassword;

onlyChar = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return false;
  else return true;
};

onlyDigits = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return true;
  else return false;
};

checkEmail = (email) => {
  const emailRegex = /([a-z0-9\.\-_]{5,25})@christuniversity.in$/;

  if (emailRegex.test(email)) {
    validEmail = 1;
    document.getElementById("emailmsg").innerText = "Valid Email";
    document.getElementById("emailmsg").className = "showmsg success";
    enableButton();
    return;
  } else {
    validEmail = 0;
    document.getElementById("emailmsg").innerText =
      "should end with @christuniversity.in";
    document.getElementById("emailmsg").className = "showmsg error";
    enableButton();
    return;
  }
};

validatePassword = (password) => {
  if (password.length === 0) {
    document.getElementById("passwordMsg").innerHTML = "";
    return;
  }

  var regexPattern = new Array();

  regexPattern.push('[~`!@#$%^&*;:"<>,./?]');
  regexPattern.push("[-_+={}]");
  regexPattern.push("[()|]");
  regexPattern.push("[A-Z]");
  regexPattern.push("[0-9]");
  regexPattern.push("[a-z]");

  // Check the conditions

  let count = 0;
  if (password.length >= 8) {
    for (var i = 0; i < regexPattern.length; i++) {
      if (new RegExp(regexPattern[i]).test(password)) {
        count++;
      }
    }

    let color = "";

    let strength = "";

    switch (count) {
      case 0:
      case 1:
      case 2:
        strength = "Weak Password";
        color = "red";
        break;
      case 3:
        strength = "Average Password";
        color = "orange";
        break;

      case 4:
        strength = "Strong Password";
        color = "green";
        break;
    }
    if (strength === "Strong Password") {
      validPassword = 1;
      enableButton();
    } else if (
      strength === "Weak Password" ||
      strength === "Average Password"
    ) {
      validPassword = 0;
      enableButton();
    }
    document.getElementById("passwordMsg").innerHTML = strength;

    document.getElementById("passwordMsg").style.color = color;
  } else {
    validPassword = 0;
    enableButton();
    document.getElementById("passwordMsg").innerHTML = "min 8 characters";

    document.getElementById("passwordMsg").style.color = "red";
  }
};

enableButton = () => {
  if (validPassword && validEmail === 1) {
    document.getElementById("mybutton").disabled = false;
  } else {
    document.getElementById("mybutton").disabled = true;
  }
};

resetForm = () => {
  window.location.reload();
};
