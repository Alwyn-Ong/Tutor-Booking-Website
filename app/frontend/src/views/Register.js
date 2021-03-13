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
        <legend>Register</legend>

        <input type="email" size="30" id="email" placeholder="Enter a Valid Email" maxlength="30" required></input>
        <br></br>
        <br></br>

        <input type="text" size="30" id="name" placeholder="Please enter your name" maxlength="30" required></input>
        <br></br>
        <br></br>

        <input type="number" size="30" id="number" placeholder="What's your number" maxlength="8" required></input>
        <br></br>
        <br></br>

        <input type="text" size="30" id="gender" placeholder="Your gender" maxlength="30" required></input>
        <br></br>
        <br></br>
        {/* Copy radio button */}

        Birthday: <input type="date"></input>
        <br></br>
        <br></br>

        <input type="submit" value="Set up account" class="btn"></input>

        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
      </fieldset>
  </form>



  )
}

export default Register;
 