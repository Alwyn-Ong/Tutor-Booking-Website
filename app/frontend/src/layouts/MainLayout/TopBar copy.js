import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
//   Badge,
} from "react-bootstrap";

import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);


const TopBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Tutor Booking System <EmojiPeopleIcon /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          {/* <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">View your profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              View tutor profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
        <Button variant="primary">
          Notifications <Badge variant="light">9</Badge>
          <span className="sr-only">unread messages</span>
        </Button>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <EmojiPeopleIcon />
          </StyledBadge>
        </IconButton>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
