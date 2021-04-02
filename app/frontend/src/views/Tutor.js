import MomentUtils from "@date-io/moment";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Page } from "../components/Page";
import Reviews from "../components/Reviews";
import Timetable from "../components/Timetable";
import Stats from "../components/Tutor/Stats";
import WeekPicker from "../components/Tutor/WeekPicker";

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

  let id = useParams().id;

  // For Backdrop
  const [isLoading, setIsLoading] = React.useState(true);

  // From api
  const [data, setData] = React.useState({});

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  isLoading &&
    fetch(`http://localhost:8080/api/gettutorbyid/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => console.log("error", error));

  // data.email = "mailto:" + "aojj97@gmail.com";

  // For the tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(data);

  // For save
  const sendTimeslotRequest = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        loading: "Accepting Request",
        success: "Successfully accepted request!",
        error: "Error when accepting request.",
      }
    );
  };

  return (
    <Page maxWidth="xl">
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
            <Grid container direction="column" spacing={3} item xs={12} md={7}>
              {/* <Grid item>
                <Accordion expanded>
                  <AccordionSummary
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
              <Grid item>
                <Stats />
              </Grid>
              <Grid item>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Timetable" />
                  <Tab label="Reviews" />
                </Tabs>
              </Grid>
              <Grid item>
                <Divider variant="middle" />
              </Grid>
              {value ? (
                <Grid item>
                  <Reviews reviews={data.reviews} />
                </Grid>
              ) : (
                <>
                  <Grid item>
                    <Timetable isTutor={false} data={data.openTimeslot} />
                  </Grid>
                  <Grid item>
                    <MuiPickersUtilsProvider utils={MomentUtils} locale="en">
                      <WeekPicker />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item container direction="column" spacing={2}>
                    <Grid item>
                      <TextField id="outlined-basic" label="Remarks" />
                    </Grid>
                    <Button variant="contained" onClick={sendTimeslotRequest}>
                      Send Request
                    </Button>
                    <Grid></Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Page>
  );
};

export default Tutor;
