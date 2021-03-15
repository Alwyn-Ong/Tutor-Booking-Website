import React, { Component } from "react";
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


class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userEmail: "Tiffany@gmail.com", //Can take in other values
      name: "",
      number: "",
      birthday: "",
      sex: ""
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumChange = this.handleNumChange.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
  }

  handleLogin(e){
    alert('A name was submitted: ' + this.state.sex);
    // need to send data back to DB from here
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleNumChange(e){
    this.setState({number: e.target.value});
  }

  handleBirthdayChange(e){
    this.setState({birthday: e.target.value});
  }

  handleSexChange(e){
    this.setState({sex: e.target.value});
  }
    
  render() {
    return (
      <form action="" method="get" id="frm" onSubmit={this.handleLogin}>
      <fieldset id="fld">
          <legend>Register!</legend>
          <h2>Complete your registration by filling up the form</h2>
          <br></br>
          <br></br>
  
          <input type="text" size="30" id="email" value={this.state.userEmail} maxlength="30" readOnly></input>
          
          <br></br>
          <br></br>
  
          <input type="text" size="30" id="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Your Name" maxlength="30" required></input>
          
          <br></br>
          <br></br>
  
          <input type="tel" size="30" id="phone" value={this.state.number} onChange={this.handleNumChange} placeholder="Your Phone Number" maxlength="8" pattern="[0-9]{8}" required></input>
          <br></br>
          <br></br>
          <div >
            <label id="sex" required>Please indicate your sex/gender:</label><br></br> 
            <input type="radio" name="sex" value="Male" onChange={this.handleSexChange} required/><span> Male</span><br></br>
            <input type="radio" name="sex" value="Female" onChange={this.handleSexChange} /><span> Female</span><br></br>
            <input type="radio" name="sex" value="Others" onChange={this.handleSexChange} /><span> Others</span>
          </div>
          
          
          <br></br>
          <br></br>
          {/* Copy radio button */}
          Birthday: <input type="date" value={this.state.birthday} onChange={this.handleBirthdayChange} required></input>
          <br></br>
          <br></br>
          
          <input type="submit" value="Create Account" class="btn"></input>
  
      </fieldset>
    </form>
  
    )
  }
}

export default Register;
 