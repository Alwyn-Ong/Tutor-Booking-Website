import MomentUtils from "@date-io/moment";
import {
  Avatar,
  Backdrop,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Call,
  Email,
  LocalLibrary,
  MonetizationOn,
  Person,
  School,
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "moment/locale/de";
import React from "react";
// import ReactModalLogin from "react-modal-login"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoginModalWrapper from "../components/Auth/LoginModalWrapper";
import { Page } from "../components/Page";
import Reviews from "../components/Reviews";
import Timetable from "../components/Timetable";
import Stats from "../components/Tutor/Compare";
import WeekPicker from "../components/Tutor/WeekPicker";
import { toast } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

// TODO: Change to get data from API
const Tutor = () => {
  // data = {
  //   name: "John Tutor",
  //   bio: "Made to be a tutor",
  //   facebook: "www.facebook.com",
  //   linkedin: "www.linkedin.com",
  //   email: "alwyn.ong.2018@sis.smu.edu.sg",
  //   qualification: "Bachelor of Science (Information Systems)",
  //   subjects: ["A-Level Physics", "A-Level Maths"],
  //   gender: "Male",
  //   review: 4.5,
  //   price: 100,
  // };
  const classes = useStyles();

  const [toScroll, setToScroll] = React.useState(true);

  if (toScroll) {
    window.scrollTo(0, 0);
    setToScroll(false);
  }

  let id = useParams().id1;
  let id2 = useParams().id2;

  // For Backdrop
  const [isLoading, setIsLoading] = React.useState(true);

  // From api
  const [data, setData] = React.useState({});
  const [data2, setData2] = React.useState({});

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  isLoading &&
    fetch(`http://localhost:8080/api/gettutorbyid/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(data);
      })
      .catch((error) => console.log("error", error));

  isLoading &&
    fetch(`http://localhost:8080/api/gettutorbyid/${id2}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData2(result);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => console.log("error", error));

  // For the tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(data);

  let auth = useSelector((state) => state.auth);
  let name = useSelector((state) => state.name);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const [sendTimeslot, setSendTimeslot] = React.useState(false);

  // Integration of send timeslot
  const [timeslotRequest, setTimeslotRequest] = React.useState({
    remarks: "",
    timeslots: [],
    date: "",
  });

  console.log(timeslotRequest);
  const handleRemarksChange = (e) => {
    setTimeslotRequest((state) => {
      return {
        ...state,
        remarks: e.target.value,
      };
    });
  };

  // For save
  //TODO: Integrate
  const sendTimeslotRequest = () => {
    if (timeslotRequest.timeslots.length == 0) {
      toast.error("Please select a timeslot and update before sending!");
      return;
    }
    if (!auth.name) {
      setIsOpenModal(true);
    } else {
      setSendTimeslot(true);
    }
  };

  if (sendTimeslot && auth.id) {
    for (let i = 0; i < timeslotRequest.timeslots.length; i++) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        remarks: timeslotRequest.remarks,
        requestedTimeslot: timeslotRequest.timeslots[i].timeslot,
        studentId: auth.id,
        tutorId: id,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8080/api/saverequest", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        loading: "Sending Request",
        success: "Successfully sent request!",
        error: "Error when sending request.",
      }
    );
    setSendTimeslot(false);
  }
  // React.useEffect(() => {
  //   return () => {
  //     toast.promise(
  //       new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           resolve();
  //         }, 2000);
  //       }),
  //       {
  //         loading: "Sending Request",
  //         success: "Successfully sent request!",
  //         error: "Error when sending request.",
  //       }
  //     );
  //   };
  // }, [auth]);

  // For modal
  // const [modalState, setModalState] = React.useState({
  //   showModal: false,
  //   loading: false,
  //   error: null,
  // });
  // const modalStateRef = React.createRef();

  // // console.log(modalState);
  // const openModal = () => {
  //   console.log(modalStateRef);
  //   modalStateRef.current.setState((state) => {
  //     return {
  //       ...state,
  //       showModal: true,
  //     };
  //   });
  // };
  // const closeModal = () => {
  //   setModalState((state) => {
  //     return {
  //       ...state,
  //       showModal: false,
  //       error: null,
  //     };
  //   });
  // };

  // const startLoading = () => {
  //   setModalState((state) => {
  //     return {
  //       ...state,
  //       loading: true,
  //     };
  //   });
  // };

  // const finishLoading = () => {
  //   setModalState((state) => {
  //     return {
  //       ...state,
  //       loading: false,
  //     };
  //   });
  // };

  // const afterTabsChange = () => {
  //   setModalState((state) => {
  //     return {
  //       ...state,
  //       error: null,
  //     };
  //   });
  // };

  // const onLoginSuccess = (args) => {
  //   toast.success("Login successful!");
  //   console.log(response);
  // };

  // const onLoginFail = (method, response) => {
  //   toast.error("Login failed...");
  //   setModalState((state) => {
  //     return {
  //       ...state,
  //       error: response,
  //     };
  //   });
  // };

  return (
    <Page maxWidth="xl">
      {/* <LoginModal/> */}
      {/* <LoginModal
        modalState={modalState}
        closeModal={closeModal}
        startLoading={startLoading}
        finishLoading={finishLoading}
        afterTabsChange={afterTabsChange}
        onLoginSuccess={() => {
          onLoginSuccess;
        }}
        onLoginFail={onLoginFail}
      /> */}
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {!isLoading && (
        <>
          <Grid
            container
            spacing={3}
            style={{ paddingTop: "30px" }}
            wrap="wrap"
            justify="space-around"
          >
            <Grid
              container
              item
              xs={12}
              md={3}
              direction="column"
              spacing={1}
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                <Avatar className={classes.large} src={data.imageURL} />
              </Grid>
              <Grid item>
                <Typography variant="h2">{data.name}</Typography>
              </Grid>
              {/* <Grid item>
                <Rating
                  name="half-rating-read"
                  value={data.rating}
                  readOnly
                  precision={0.5}
                />
              </Grid> */}
              <Grid item>
                <Typography variant="h5">
                  {data.rating ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        // justifyContent: "center",
                      }}
                    >
                      <Rating
                        name="half-rating-read"
                        value={data.rating}
                        readOnly
                        precision={0.1}
                      />
                      <span>({data.reviews.length})</span>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        display: "inline-flex",
                      }}
                    >
                      <Rating
                        name="half-rating-read"
                        value={0}
                        readOnly
                        max={1}
                      />
                      <span style={{ fontSize: "small" }}>No reviews yet</span>
                    </div>
                  )}
                </Typography>
              </Grid>

              <Grid item>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${data.email}`;
                  }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `tel:${data.phoneNumber}`;
                  }}
                >
                  <Call />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography>
                  <School /> {data.qualification}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <LocalLibrary /> Teaches:
                </Typography>
              </Grid>
              <Grid item container spacing={1} justify="flex-start">
                {Object.keys(data.levelsTaught).map((key) => {
                  let subjects = data.levelsTaught[key];
                  return subjects.map((subject) => {
                    return (
                      <Grid item>
                        <Chip label={`${key} - ${subject}`} size="small" />
                      </Grid>
                    );
                  });
                })}
              </Grid>
              <Grid item>
                <Typography>
                  <Person /> {data.gender}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <MonetizationOn /> {` ${data.price}/hr`}
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: "20px" }}>
                <Typography variant="h4">{data.description}</Typography>
              </Grid>
              {/* <Grid item>
                <Accordion expanded>
                  <AccordionSummary
                    // expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <AssessmentOutlinedIcon /> Compare with other tutors
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stats />
                  </AccordionDetails>
                </Accordion>
              </Grid> */}
            </Grid>
            {/* <Grid item md={4}>
                <Accordion
                    expanded
                    >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AssessmentOutlinedIcon/> Compare with other tutors</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stats />
                  </AccordionDetails>
                </Accordion>
            </Grid> */}
            <Grid container direction="column" spacing={3} item xs={12} md={6}>
              {/* <Grid item> */}
                <Stats tutorId={id} data={data} data2={data2}/>
              {/* </Grid> */}
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={3}
              direction="column"
              spacing={1}
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                <Avatar className={classes.large} src={data2.imageURL} />
              </Grid>
              <Grid item>
                <Typography variant="h2">{data2.name}</Typography>
              </Grid>
              {/* <Grid item>
                <Rating
                  name="half-rating-read"
                  value={data.rating}
                  readOnly
                  precision={0.5}
                />
              </Grid> */}
              <Grid item>
                <Typography variant="h5">
                  {data2.rating ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        // justifyContent: "center",
                      }}
                    >
                      <Rating
                        name="half-rating-read"
                        value={data2.rating}
                        readOnly
                        precision={0.1}
                      />
                      <span>({data2.reviews.length})</span>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        display: "inline-flex",
                      }}
                    >
                      <Rating
                        name="half-rating-read"
                        value={0}
                        readOnly
                        max={1}
                      />
                      <span style={{ fontSize: "small" }}>No reviews yet</span>
                    </div>
                  )}
                </Typography>
              </Grid>

              <Grid item>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${data2.email}`;
                  }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `tel:${data2.phoneNumber}`;
                  }}
                >
                  <Call />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography>
                  <School /> {data2.qualification}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <LocalLibrary /> Teaches:
                </Typography>
              </Grid>
              <Grid item container spacing={1} justify="flex-start">
                {Object.keys(data2.levelsTaught).map((key) => {
                  let subjects = data2.levelsTaught[key];
                  return subjects.map((subject) => {
                    return (
                      <Grid item>
                        <Chip label={`${key} - ${subject}`} size="small" />
                      </Grid>
                    );
                  });
                })}
              </Grid>
              <Grid item>
                <Typography>
                  <Person /> {data2.gender}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <MonetizationOn /> {` ${data2.price}/hr`}
                </Typography>
              </Grid>
              <Grid item style={{ marginTop: "20px" }}>
                <Typography variant="h4">{data2.description}</Typography>
              </Grid>
              
            </Grid>
          </Grid>
        </>
      )}
    </Page>
  );
};

export default Tutor;
