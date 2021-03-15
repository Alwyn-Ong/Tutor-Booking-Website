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
  const userEmail = "Tiffany@gmail.com" //This can be changed to take in the user email from Gmail
  

  return (
    <form action="" method="get" id="frm">
    <fieldset id="fld">
        <legend>Final register</legend>

        <h2>Complete your registration by filling up the form!</h2>

        <br></br>
        <br></br>

        <input type="text" size="30" id="email" value={userEmail} maxlength="30" readonly></input>
        <br></br>
        <br></br>

        <input type="text" size="30" id="name" placeholder="Please enter your name" maxlength="30" required></input>
        <br></br>
        <br></br>

        <input type="tel" size="30" id="phone" placeholder="Your Phone Number" maxlength="8" pattern="[0-9]{8}"></input>
        <br></br>
        <br></br>

        <label id="gender">Sex:</label>
        <input type="radio" name="msex" value="Male" /><span>Male</span>
        <input type="radio" name="fsex" value="Female" /><span>Female</span>
        
        <br></br>
        <br></br>
        {/* Copy radio button */}

        Birthday: <input type="date" required></input>
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
 