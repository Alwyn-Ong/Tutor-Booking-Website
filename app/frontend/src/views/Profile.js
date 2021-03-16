// import {Radio, Typography, FormControl, FormLabel, FormControlLabel, RadioGroup, TextField, Button } from "@material-ui/core";
import React, { useState }from "react";
import { Page } from "../components/Page";
import Popup from 'reactjs-popup';


import "./css/profile.css";

// https://stackoverflow.com/questions/62133040/unable-to-edit-form-fields-in-reactjs-after-fetched-from-server for form 
// https://reactjs.org/docs/handling-events.html Handling events
// https://codepen.io/lakshithav24/pen/bGNozyw

const Card_component = (props) => {
  return (
      <div className="card">
        <header className="card-header">
          <div className="hello">
            <img src={props.imgSrc} alt="" />
          <div className="heading-box">
            <h1>{props.name}<span></span></h1> 
            
            <h3><span><i className="material-icons">location_city</i><input defaultValue={props.location} readOnly={props.toggle} /> </span></h3>
            <h4><span><i className="material-icons">person</i><input defaultValue={props.birthday} readOnly={props.toggle} /></span></h4>
            <small><span><i className="material-icons">emoji_people</i><input defaultValue={props.sex} readOnly={props.toggle} /> </span></small>
            </div>
            <div className="button-box">
            <a href="#"><i className="material-icons" onClick={props.toggleEdit}>{props.icon}</i></a>
            </div>
          </div>
        </header>
        <main className="card-main">
          <div className="activity">
            <i className="material-icons">call</i> 
            <span className="activity-name">phone</span>
            <span className="index">
            <input defaultValue={props.phone} readOnly={props.toggle}/>
              </span>
          </div>
          <div className="activity">
            <i className="material-icons">mail_outline</i>
            <span className="activity-name" onChange={props.changeEmail}>Email</span>
            <span className="index">
            <input defaultValue={props.email} readOnly={props.toggle}/>
            </span>
          </div>     
        </main>
      </div>
  )
}


class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/435311/React--daily-ui-006.jpg",
      name: "Thomas Lee",
      location: "Singapore",
      email: "thomas@hotmail.com",
      phone: 12345678,
      birthday: "20 March 1994",
      sex: 'Male',
      toggle: false,
      icon: "create",
    }
  }

  toggleEdit(e){
    e.preventDefault()
    let currentStatus = this.state.toggle
    console.log(this.state.toggle)
    if (currentStatus == false){
      this.setState({
        toggle: true,
        icon: "create"
      })
    }else{
      this.setState({
        toggle: false,
        icon: "done"
      })
    }
  }

  render(){
    return (
      <div>
        <Card_component 
                name={this.state.name}
                location={this.state.location}
                btnStyle={this.state.btnStyle}
                icon={this.state.icon}
                text={this.state.text}
                phone={this.state.phone}
                email={this.state.email}
                birthday={this.state.birthday}
                sex={this.state.sex}
                imgSrc={this.state.imgSrc}
                toggle={this.state.toggle}
                toggleEdit={this.toggleEdit.bind(this)}
                icon={this.state.icon}
        />
      </div>
      
    )
  }
}

export default Profile;