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
import {
  Avatar,
  Button,
  Chip,
  createMuiTheme,
  Grid,
  Icon,
  ThemeProvider,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import {
  amber,
  blue,
  green,
  indigo,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  yellow,
} from "@material-ui/core/colors";
import { toast } from "react-hot-toast";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { updateLogout } from "../../actions/authActions";

// For login modal
import LoginModal from "../../components/Auth/LoginModal";

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
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isAccountMenuOpen = Boolean(accountAnchorEl);

  const handleNotificationsMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = (event) => {
    setAccountAnchorEl(null);
  };

  const viewProfile = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    // window.location.href = "/tutorProfile";
  };

  // For redux login/logout
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const updateLogoutDispatch = () => {
    dispatch(updateLogout());
  };
  const handleLoginout = () => {
    if (auth.name) {
      //Logout
      updateLogoutDispatch();
      toast.success("Logged out!");
    } else {
      //Login
      openModal();
    }
    setAccountAnchorEl(null);
  };

  // For login modal
  const modalStateRef = React.createRef();

  // console.log(modalState);
  const openModal = () => {
    console.log(modalStateRef);
    modalStateRef.current.setState((state) => {
      return {
        ...state,
        showModal: true,
      };
    });
  };

  // TODO: Integrate with API
  let defaultNotifications = [
    {
      requestId: 1,
      remarks: "Toa Payoh",
      requestedTimeslot: ["1-1200"],
      imageURL: "http://localhost:8080/api/files/2",
    },
    {
      requestId: 2,
      remarks: "Pasir Ris",
      requestedTimeslot: ["2-1700", "6-1700"],
      imageURL: "http://localhost:8080/api/files/3",
    },
    {
      requestId: 3,
      remarks: "Bishan",
      requestedTimeslot: ["3-1700"],
      imageURL: "http://localhost:8080/api/files/4",
    },
    {
      requestId: 4,
      remarks: "Serangoon",
      requestedTimeslot: ["1-1000"],
      imageURL: "http://localhost:8080/api/files/5",
    },
    {
      requestId: 5,
      remarks: "Woodlands",
      requestedTimeslot: ["5-1200"],
      imageURL: "http://localhost:8080/api/files/6",
    },
    {
      requestId: 6,
      remarks: "Jurong East",
      requestedTimeslot: ["4-1800", "6-1800"],
      imageURL: "http://localhost:8080/api/files/7",
    },
    {
      requestId: 7,
      remarks: "Sengkang",
      requestedTimeslot: ["3-1900"],
      imageURL: "http://localhost:8080/api/files/8",
    },
  ];

  //TODO: Integrate
  const [notifications, setNotifications] = React.useState([]);
  const [fetchNotification, setFetchNotification] = React.useState(true);

  if (fetchNotification && auth.id) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/api/getallrequestfortutor/" + auth.id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setNotifications(result);
        setFetchNotification(false);
      })
      .catch((error) => console.log("error", error));
  }

  let renderTimeslot = (timeslot) => {
    // let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    let timeSlotArr = timeslot.split("-");
    timeSlotArr.push(days[timeSlotArr[0] - 1]);
    // return timeSlotArr.join(" - ");
    return timeSlotArr;
  };

  const monTheme = createMuiTheme({
    palette: {
      primary: {
        main: red[400],
      },
    },
  });
  const tueTheme = createMuiTheme({
    palette: {
      primary: {
        main: orange[800],
      },
    },
  });
  const wedTheme = createMuiTheme({
    palette: {
      primary: {
        // main: yellow["300"],
        // main: "#fff500",
        main: pink[900],
      },
    },
  });
  const thuTheme = createMuiTheme({
    palette: {
      primary: {
        main: green[800],
      },
    },
  });
  const friTheme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });
  const satTheme = createMuiTheme({
    palette: {
      primary: {
        main: indigo[500],
      },
    },
  });
  const sunTheme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
    },
  });

  const dailyThemes = [
    monTheme,
    tueTheme,
    wedTheme,
    thuTheme,
    friTheme,
    satTheme,
    sunTheme,
  ];

  //TODO: Integrate with backend
  const acceptRequest = (requestId, studentId) => {
    var requestOptions = {
      method: "PUT",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/api/acceptrequest/" + requestId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.promise(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if (result.details === "query success") {
                resolve();
                setNotifications((state) => {
                  return state.filter(
                    (notification) => notification.requestId != requestId
                  );
                });
              } else {
                reject();
              }
            }, 2000);
          }),
          {
            loading: "Accepting Request",
            success: "Successfully accepted request!",
            error: "Error when accepting request.",
          }
        );
      })
      .catch((error) => console.log("error", error));

    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      `http://localhost:8080/api/addbooking/${auth.id}/${studentId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const rejectRequest = (requestId) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(
      "http://localhost:8080/api/deleterequest/" + requestId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.promise(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if (result.details === "query success") {
                resolve();
                setNotifications((state) => {
                  return state.filter(
                    (notification) => notification.requestId != requestId
                  );
                });
              } else {
                reject();
              }
            }, 2000);
          }),
          {
            loading: "Deleting Request",
            success: "Successfully deleted request!",
            error: "Error when deleting request.",
          }
        );
      })
      .catch((error) => console.log("error", error));
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
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
      {notifications && notifications.map((notification) => {
        return (
          // <MenuItem onClick={viewProfile}>Profile</MenuItem>
          <MenuItem>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Avatar
                  width="15px"
                  height="15px"
                  src={
                    "http://localhost:8080/api/files/" + notification.studentId
                  }
                ></Avatar>
              </Grid>
              <Grid container item direction="column" xs={6}>
                <Grid item>
                  <Typography variant="h6">
                    {`${notification.remarks}`}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Grid container spacing={1}>
                      {/* {notification.requestedTimeslot.map((timeslot) => {
                        return (
                          <Grid item>
                            <ThemeProvider
                              theme={
                                dailyThemes[renderTimeslot(timeslot)[0] - 1]
                              }
                            >
                              <Chip
                                variant="outlined"
                                size="small"
                                color="primary"
                                avatar={
                                  <Avatar>{renderTimeslot(timeslot)[2]}</Avatar>
                                }
                                label={renderTimeslot(timeslot)[1]}
                              ></Chip>
                            </ThemeProvider>
                          </Grid>
                        );
                      })} */}
                      <Grid item>
                        <ThemeProvider
                          theme={
                            dailyThemes[
                              renderTimeslot(
                                notification.requestedTimeslot
                              )[0] - 1
                            ]
                          }
                        >
                          <Chip
                            variant="outlined"
                            size="small"
                            color="primary"
                            avatar={
                              <Avatar>
                                {
                                  renderTimeslot(
                                    notification.requestedTimeslot
                                  )[2]
                                }
                              </Avatar>
                            }
                            label={
                              renderTimeslot(notification.requestedTimeslot)[1]
                            }
                          ></Chip>
                        </ThemeProvider>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() =>
                    acceptRequest(
                      notification.requestId,
                      notification.studentId
                    )
                  }
                >
                  <CheckCircleOutlineIcon style={{ color: "green" }} />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  onClick={() => rejectRequest(notification.requestId)}
                >
                  <CancelOutlinedIcon style={{ color: "red" }} />
                </IconButton>
              </Grid>
            </Grid>
          </MenuItem>
        );
      })}
    </Menu>
  );

  const renderAccountMenu = (
    <Menu
      anchorEl={accountAnchorEl}
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
      open={isAccountMenuOpen}
      onClose={handleAccountMenuClose}
    >
      <MenuItem
        component={RouterLink}
        to={"/profile"}
        onClick={handleAccountMenuClose}
      >
        Profile
      </MenuItem>
      <MenuItem
        component={RouterLink}
        to={"/dashboard"}
        onClick={handleAccountMenuClose}
      >
        My Dashboard
      </MenuItem>
      <MenuItem onClick={handleLoginout}>
        {auth.name ? "Logout" : "Login"}
      </MenuItem>
    </Menu>
  );

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
      <MenuItem onClick={handleNotificationsMenuOpen}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge
            badgeContent={(notifications && notifications.length) || 0}
            color="secondary"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        // component={RouterLink} to={"/profile"}
        onClick={handleAccountMenuOpen}
      >
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
      <LoginModal ref={modalStateRef} />
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
              aria-label="show new notifications"
              color="inherit"
              onClick={handleNotificationsMenuOpen}
            >
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleAccountMenuOpen}
              // component={RouterLink}
              // to="/profile"

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
      {renderAccountMenu}
    </div>
  );
};

export default TopBar;
