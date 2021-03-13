import React from "react";
import { Page } from "../components/Page";
import { makeStyles } from "@material-ui/core";
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
  const date = new Date()
  
  return (
    <form action="mailto:s_sample@yahoo.com" method="get" id="frm">
    <fieldset id="fld">
        <legend>Sign Up</legend>
        <label for="email"></label>
        <input type="email" size="30" id="email" placeholder="Enter a Valid Email" maxlength="30" required></input><br></br><br></br>

        <label for="pass"></label>
        <input type="password" size="30" id="pass" placeholder="Enter Password" maxlength="30" required></input><br></br><br></br>

        <label for="pass"></label>
        <input type="password" size="30" id="repeatpass" placeholder="Repeat Password" maxlength="40" required></input><br></br><br></br>

        Birthday: <input type="date"></input><br></br><br></br><br></br><br></br>

        <label><input type="radio" name="st" required>I accepted the terms of use, cookie and privacy policy</input></label><br></br><br></br><br></br>

        <input type="submit" value="Create Account" class="btn"></input>
        <input type="reset" value="Clear" class="btn"></input>
        <br></br><br></br>
        Do you already have an account? <a href="">Login</a><br></br><br></br><br></br>
      </fieldset>
  </form>



  )
}

export default Register;
 