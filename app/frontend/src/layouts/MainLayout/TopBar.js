import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import { Navigate, NavLink as RouterLink } from "react-router-dom";
import { Avatar, Button, Grid, Icon } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    zIndex: 100,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: "none",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "white",
    textTransform: "capitalize",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const viewProfile = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    // window.location.href = "/tutorProfile";
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  let notifications = [
    { remarks: "Toa Payoh", requestedTimeslot: "1-1200", imageURL:"http://localhost:8080/api/files/2"},
    { remarks: "Pasir Ris", requestedTimeslot: "2-1700", imageURL:"http://localhost:8080/api/files/3" },
  ];

  let renderTimeslot = (timeslot) => {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let timeSlotArr = timeslot.split("-");
    timeSlotArr[0] = days[timeSlotArr[0] - 1];
    return timeSlotArr.join(" - ");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      getContentAnchorEl={null}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {notifications.map((notification) => {
        return (
          // <MenuItem onClick={viewProfile}>Profile</MenuItem>
          <MenuItem>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Avatar
                  width="15px"
                  height="15px"
                  src={notification.imageURL}
                ></Avatar>
              </Grid>
              <Grid container item direction="column" xs={6}>
                <Grid item>
                  <Typography variant="h6">
                    {renderTimeslot(notification.requestedTimeslot)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">{`Location: ${notification.remarks}`}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <IconButton>
                  <CheckCircleOutlineIcon style={{ color: "green" }} />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton>
                  <CancelOutlinedIcon style={{ color: "red" }} />
                </IconButton>
              </Grid>
            </Grid>
          </MenuItem>
        );
      })}
    </Menu>
  );
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "bottom",
  //       horizontal: "center",
  //     }}
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "center",
  //     }}
  //     getContentAnchorEl={null}
  //     id={menuId}
  //     keepMounted
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={viewProfile}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem component={RouterLink} to={"/profile"}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Button component={RouterLink} to={"/"}>
            <Typography className={classes.title} variant="h3" noWrap>
              Tutor Booking System
            </Typography>
            <EmojiPeople fontSize="large" className={classes.title} />
          </Button>

          {/* <Button component={RouterLink} to={"/profile"}>
            <Typography className={classes.title} variant="h6" noWrap>
              Profile
            </Typography>
          </Button>
          <Button component={RouterLink} to={"/tutorprofile"}>
            <Typography className={classes.title} variant="h6" noWrap>
              Tutor Profile
            </Typography>
          </Button>
          <Button component={RouterLink} to={"/register"}>
            <Typography className={classes.title} variant="h6" noWrap>
              Register
            </Typography>
          </Button> */}

          {/* <Typography className={classes.title} variant="h6" noWrap>
            Home
          </Typography> */}
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* <Notifications data={["test"]} /> */}
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              component={RouterLink}
              to="/profile"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default TopBar;
