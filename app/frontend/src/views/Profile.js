import { Typography } from "@material-ui/core";
import React from "react";
import { Page } from "../components/Page";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from './dog.jpg';
import "./css/profile.css";

// https://stackoverflow.com/questions/62133040/unable-to-edit-form-fields-in-reactjs-after-fetched-from-server for form 
// https://reactjs.org/docs/handling-events.html Handling events

const Profile = () => {

  return (
    <Container>
    <Row>
      <Col xs={4}>
      <img className="profilePhoto" src={logo} alt="profilePhoto" />
      </Col>
      <Col xs={8}>
        <form>
          <input type="text" defaultValue="Name"></input><br></br>
          <input type="text" defaultValue="Gender"></input><br></br>
          <input type="text" defaultValue="Summary"></input><br></br>
          <input type="text" defaultValue="Student/teacher"></input><br></br>
          <input type="text" defaultValue="Level"></input><br></br>
          <br></br>
          <button onclick="{submitChanges}">
            Save profile changes
          </button>
        </form>
      </Col>
    </Row>
  </Container>
  );
};

export default Profile;
