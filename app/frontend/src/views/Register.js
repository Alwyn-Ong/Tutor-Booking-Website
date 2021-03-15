import React from "react";
import { Page } from "../components/Page";
import { makeStyles, Radio,RadioGroup,FormLabel, FormControlLabel } from "@material-ui/core";
import "./css/register.css"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function Register() {
  const userEmail = "Tiffany@gmail.com" //This can be changed to take in the user email from Gmail


  var formFinished = false;
  var loginForm = document.getElementById("login-form");
  var inputField = document.getElementById("inputField");
  var placeholder = document.getElementById("placeholder");
  var background = document.getElementById("background");
  var progress = document.getElementById("progress");
  var arrowLeftContainer = document.getElementById("arrow-left-container");
  var arrowRightContainer = document.getElementById("arrow-right-container");
  var errorMessage = document.getElementById("error-message");
  var endScreen = document.getElementById("end-screen");
  var underlineBlank = document.getElementById("underline-blank");
  var restartButton = document.getElementById("restart")
  var questions = [
    "What's your first name?",
    "What's your last name?",
    "What's your email?",
    "Enter your password",
    "Enter your password again"
  ];
  var answers = ["", "", "", "", ""];
  var questionNumber = 0;
  var value, message, error, errorCount;
  
  function onLoad() {
    checkInput();
    setTimeout(function () {inputField.focus();}, 200);
    var height = window.innerHeight;
    var width = window.innerWidth;
    loginForm.style.top = (height - 70) / 2 + "px";
    endScreen.style.top = (height - 34) / 2 + "px";
    restartButton.style.top = (height - 34) / 2 - 40 + "px";
    loginForm.style.left = (width - 510) / 2 + "px";
    restartButton.style.left = (width - 130) / 2 + "px";
  }
  
  function keyPress() {
    if (event.key == "Enter") {
      if (verifyInput()) {
        preNextQuestion();
      } else {
        falseResponse();
      }
    }
  }
  
  function preNextQuestion() {
    progress.style.width = (questionNumber + 1) * 20 + "%";
    if (inputField.value !== "") {
      if (questionNumber == 0 || questionNumber == 1 || questionNumber == 2 || questionNumber == 3) {
        nextQuestion();
      } else if (questionNumber == 4) {
        finishForm();
      }
    }
    loginForm.style.marginTop = "20px";
    setTimeout(function() {loginForm.style.marginTop = "0px"}, 300)
  }
  
  function nextQuestion() {
    questionNumber++;
    inputField.style.opacity = "0";
    placeholder.style.opacity = "0";
    inputField.blur();
    underlineBlank.style.opacity = "0";
    arrowLeftContainer.style.display = 'block';
    setTimeout(function () {
      arrowLeftContainer.style.opacity = "1";
      inputField.value = answers[questionNumber];
      placeholder.innerHTML = questions[questionNumber];
      inputField.style.opacity = "1";
      placeholder.style.opacity = "1";
      checkInput();
      inputField.focus();
      if (questionNumber == 3 || questionNumber == 4) {
        inputField.type = "password";
        inputField.style.letterSpacing = "2px";
      } else {
        inputField.type = "text";
        inputField.style.letterSpacing = "normal";
      }
    }, 550);
    setTimeout(function () {
      underlineBlank.style.opacity = "1";
    }, 1050);
  }
  
  function previousQuestion() {
    questionNumber--;
    progress.style.width = (questionNumber) * 20 + "%";
    inputField.style.opacity = "0";
    placeholder.style.opacity = "0";
    inputField.blur();
    underlineBlank.style.opacity = "0";
    if (questionNumber != 0) {
      arrowLeftContainer.style.display = 'block';
    } else {
      arrowLeftContainer.style.opacity = "0";
    }
    setTimeout(function () {
      if (questionNumber != 0) {
        arrowLeftContainer.style.opacity = "1";
      } else {
        arrowLeftContainer.style.display = "none"
      }
      inputField.value = answers[questionNumber];
      placeholder.innerHTML = questions[questionNumber];
      inputField.style.opacity = "1";
      placeholder.style.opacity = "1";
      checkInput();
      inputField.focus();
      if (questionNumber == 3 || questionNumber == 4) {
        inputField.type = "password";
        inputField.style.letterSpacing = "2px";
      } else {
        inputField.type = "text";
        inputField.style.letterSpacing = "normal";
      }
    }, 550);
    setTimeout(function () {
      underlineBlank.style.opacity = "1";
    }, 1050);
  }
  
  function verifyInput() {
    value = inputField.value
    if (inputField.value !== "") {
      if (questionNumber == 0 || questionNumber == 1) {
        if (value.indexOf(" ") == -1) {
          if (onlyLetters()) {
            value = value.toLowerCase();
            var firstLetter = value.charAt(0);
            value = firstLetter.toUpperCase() + value.substring(1);
            return true;
          } else {
            message = "Only letters allowed."
            return false;
          }
        } else {
          message = "Spaces not allowed."
          return false;
        }
      } else if (questionNumber == 2) {
        if (char_count(value, "@") == 1 && value.lastIndexOf(".") > value.indexOf("@") + 1 && value.lastIndexOf(".") < value.length - 1) {
          if (value.indexOf(" ") == -1) {
            return true;
          } else {
            message = "Spaces not allowed."
            return false;
          }
        } else {
          message = "Invalid E-mail address." 
          return false;
        }
      } else if (questionNumber == 3) {
        return true;
      } else if (questionNumber == 4) {
        if (value == answers[3]) {
          return true;
        } else {
          message = "Passwords do not match.";
          return false;
        }
      }
    } else {
      message = "Field cannot be empty.";
      return false;
    }
  }
    
  function char_count(str, letter) {
   var letter_Count = 0;
   for (var position = 0; position < str.length; position++) {
      if (str.charAt(position) == letter) {
        letter_Count += 1;
      }
   }
    return letter_Count;
  }
  
  function falseResponse() {
    errorCount = 0;
    error = true;
    checkInput();
    errorMessage.innerHTML = message;
    errorMessage.style.display = "block";
    setTimeout(function(){errorMessage.style.opacity = "1"}, 10)
    underline.classList.remove(...underline.classList);
    underline.classList.add("underline-error");
    loginForm.style.marginLeft = "-10px";
    setTimeout(function() {loginForm.style.marginLeft = "10px";}, 100);
    setTimeout(function() {loginForm.style.marginLeft = "0px";}, 200);
  }
  
  function checkInput() {
    answers[questionNumber] = inputField.value;
    placeholder.classList.remove(...placeholder.classList);
    if (error && errorCount != 0) {
      error = false;
      errorMessage.style.opacity = "0";
      setTimeout(function(){errorMessage.style.display = "block"}, 300);
      underline.classList.remove(...underline.classList);
      underline.classList.add("underline");
    }
    if (error) {
      errorCount++;
      if (inputField.value == "") {
        placeholder.classList.add("placeholder-blank-error");
      } else {
        placeholder.classList.add("placeholder-filled-error");
      }
    } else {
      if (inputField.value == "") {
        placeholder.classList.add("placeholder-blank");
      } else {
        placeholder.classList.add("placeholder-filled");
      }
    }
  }
  
  function onlyLetters() {
    var character = "";
    var currentPosition = 0;
    while (currentPosition < value.length) {
      character = value.substring(currentPosition, currentPosition + 1);
      if (!character.match(/[a-z]/i)) {
        return false;
      }
      currentPosition++;
    }
    return true;
  }
  
  function finishForm() {
    error = false;
    errorMessage.style.opacity = "0";
    setTimeout(function(){errorMessage.style.display = "block"}, 300);
    underline.classList.remove(...underline.classList);
    underline.classList.add("underline");
    formFinished = true;
    underlineBlank.style.opacity = "0";
    underline.style.opacity = "0";
    inputField.style.opacity = "0";
    arrowLeftContainer.style.opacity = "0";
    arrowRightContainer.style.opacity = "0";
    placeholder.style.opacity = "0";
    loginForm.style.transition = "width 0.5s, margin-top 0.3s, margin-left 0.3s, left 0.5s";
    setTimeout(function () {
      underlineBlank.style.display = "none";
      underline.style.display = "none";
      inputField.style.display = "none";
      arrowLeftContainer.style.display = "none";
      arrowRightContainer.style.display = "none";
      placeholder.style.display = "none";
      loginForm.style.width = "0";
      loginForm.style.left = window.innerWidth / 2 + "px"
    }, 500);
    setTimeout(function () {
      endScreen.style.display = "block";
      restartButton.style.display = "block";
      endScreen.innerHTML =
        "Welcome " + answers[0] + " " + answers[1] + "!";
      loginForm.style.transition = "width 0.5s, margin-top 0.3s, margin-left 0.3s";
      setTimeout(function () {
        endScreen.style.opacity = "1";
        restartButton.style.opacity = "1";
      }, 10);
    }, 1000);
  }
  
  function restart() {
    answers = ["", "", "", "", ""];
    questionNumber = 0;
    formFinished = false;
    endScreen.style.opacity = "0";
    restartButton.style.opacity = "0";
    inputField.value = "";
    inputField.type = "text";
    placeholder.innerHTML = questions[questionNumber]
    setTimeout(function() {
      progress.style.width = "0";
      endScreen.style.display = "none";
      restartButton.style.display = "none";
      underlineBlank.style.display = "block";
      underline.style.display = "block";
      inputField.style.display = "block";
      arrowRightContainer.style.display = "block";
      placeholder.style.display = "block";
      setTimeout(function () {
        loginForm.style.top = (window.innerHeight - 70) / 2 + "px";
        loginForm.style.left = (window.innerWidth - 510) / 2 + "px";
        loginForm.style.width = "510px";
        inputField.style.letterSpacing = "0px";
        setTimeout(function() {
          inputField.focus();
          setTimeout(function () {
            underlineBlank.style.opacity = "1";
          }, 550);
          underline.style.opacity = "1";
          placeholder.classList.add("placeholder-blank");
          placeholder.classList.remove("placeholder-filled");
          inputField.style.opacity = "1";
          arrowRightContainer.style.opacity = "1";
          placeholder.style.opacity = "1";
        }, 500)
      }, 10);
    }, 500)
  }

  return (
    <form action="" method="get" id="frm">
    <fieldset id="fld">
        <legend>Final register</legend>

        <div id="background" class="background"></div>
          <div id="progress" class="progress"></div>    
          <div id="login-form" class="login-form">
            <input onkeypress="keyPress()" oninput="checkInput()" spellcheck="false" type="text" id="inputField" class="inputText"></input>
            <div id="placeholder" class="placeholder-blank">What's your first name?</div>
            <div id="underline-blank" class="underline-blank"></div>
            <div id="underline" class="underline"></div>
            <div onclick="if(verifyInput()) {preNextQuestion()} else {falseResponse()}" id="arrow-right-container" class="arrow-right-container">
              <div id="arrow-right" class="arrow-right"></div>
            </div>
            <div onclick="previousQuestion()" id="arrow-left-container" class="arrow-left-container">
              <div id="arrow-left" class="arrow-left"></div>
            </div>
            <p id="error-message"></p>
          </div>
          <div id="end-screen" class="end-screen"></div>
          <button id="restart" class="btn-23" onclick="restart()">Restart</button>
      </fieldset>

  </form>



  )
}

export default Register;
 