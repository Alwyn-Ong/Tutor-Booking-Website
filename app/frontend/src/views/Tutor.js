import {
  Avatar,
  Chip,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Typography,
  Backdrop,
} from "@material-ui/core";
import {
  ContactSupportOutlined,
  Email,
  Facebook,
  LinkedIn,
  Call,
  School,
  LocalLibrary,
  Person,
  Money,
  MonetizationOn,
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import React from "react";
import Timetable from "../components/Timetable";
import Reviews from "../components/Reviews";
import { Page } from "../components/Page";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

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
          >
            <Grid
              container
              item
              xs={12}
              md={3}
              direction="column"
              spacing={1}
              justify="center"
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
            </Grid>
            <Grid container direction="column" spacing={3} item xs={12} md={9}>
              <Grid item>
                <Divider variant="middle" />
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
              <Grid item>
                {value ? (
                  <Reviews reviews={data.reviews} />
                ) : (
                  <Timetable isTutor={false} data={data.openTimeslot} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Page>
  );
};

export default Tutor;
