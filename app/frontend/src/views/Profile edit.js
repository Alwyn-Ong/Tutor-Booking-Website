import {Radio, Typography, FormControl, FormLabel, FormControlLabel, RadioGroup, TextField, Button } from "@material-ui/core";
import React from "react";
import { Page } from "../components/Page";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./css/profile.css";

// https://stackoverflow.com/questions/62133040/unable-to-edit-form-fields-in-reactjs-after-fetched-from-server for form 
// https://reactjs.org/docs/handling-events.html Handling events




class Profile extends React.Component {

  constructor(props) {
      super(props);
      // Props can be used later when calling AJAX/API
      // Fake values
      this.state = { 
        profilePhoto: "willface.png",
        name: "Nick",
        gender: "Male",
        email: "Lorem Ipsum",
        phone: 91234567
      }
      this.submitChanges = this.submitChanges.bind(this);
  }

  submitChanges(e){
    // e.preventDefault();

    console.log("This was clicked");   
    
    console.log(this.state)
    
    // This is the part where the form value is being submitted
  }

  changeName(event){
    //Set new name as var
    var modifiedValue = event.target.value;
    //Set new name state
    this.setState({
      name: modifiedValue
    });   
  }

  changeGender(event){
    //Set new name as var
    var modifiedValue = event.target.value;
    //Set new name state
    this.setState({
      gender: modifiedValue
    });
  }

  changeEmail(event){
    //Set new name as var
    var modifiedValue = event.target.value;
    //Set new name state
    this.setState({
      email: modifiedValue
    });
  }

  changeNumber(event){
    //Set new name as var
    var modifiedValuenum = parseInt(event.target.value);
    //Set new name state
    this.setState({
      phone: modifiedValuenum
    });
  }


  render(){
    return(
      <div>
        <br></br>
        <Container>
            <Row>
              <Col xs={4}>
              <img src={this.state.profilePhoto} alt="Profile Photo" class="profilePhoto" ></img>
              </Col>
              <Col xs={8}>
                <form>
                  <TextField id="name" type="text" onChange={this.changeName.bind(this)} defaultValue={this.state.name} label="Name" />
                  <br></br>
                  <br></br>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup aria-label="gender" value={this.state.gender} onChange={this.changeGender.bind(this)}>
                      <FormControlLabel value="Female" control={<Radio />} label="Female" checked={this.state.gender == "Female"} />
                      <FormControlLabel value="Male" control={<Radio />} label="Male" checked={this.state.gender == "Male"}/>
                      <FormControlLabel value="Other" control={<Radio />} label="Other" checked={this.state.gender == "Other"}/>
                    </RadioGroup>
                  </FormControl>
                  <br></br>
                  <br></br>
                  <TextField id="email" type="email"  onChange={this.changeEmail.bind(this)} defaultValue={this.state.email} label="Email" />
                  
                  <br></br>
                  <br></br>
                  <TextField id="number" type="number"  onChange={this.changeNumber.bind(this)} defaultValue={this.state.phone} label="Number" />
                  <br></br>
                  <br></br>
                    <Button variant="contained" color="primary" onClick={this.submitChanges}>
                    Save profile changes
                    </Button>
                </form>
              </Col>
            </Row>
          </Container>



      </div>
    
    )
  }

}

export default Profile;