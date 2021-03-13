import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Tab, Tabs, Typography
} from "@material-ui/core";
import { Email, Facebook, LinkedIn } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import React from "react";
import Timetable from "../components/Timetable";
import { Page } from "../components/Page";

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
}));

// TODO: Change to get data from API
const Tutor = ({ data }) => {
  data = {
    name: "John Tutor",
    bio: "Made to be a tutor",
    facebook: "www.facebook.com",
    linkedin: "www.linkedin.com",
    email: "alwyn.ong.2018@sis.smu.edu.sg",
    qualification: "A-Level",
    gender: "Male",
    review: 4.5,
    price: 100,
  };

  data.email = "mailto:" + data.email;

  const classes = useStyles();

  // For the tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page >
      <Grid container spacing={3} direction="column" style={{paddingTop: "20px"}}>
        <Grid container item spacing={3}>
          <Grid item xs={6} lg={4}>
            <Avatar className={classes.large} />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item>
                <Typography>{data.name}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <Typography>{data.bio}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <IconButton
                  onClick={() => {
                    window.open(`http://${data.facebook}`);
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(`http://${data.linkedin}`);
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.href(`${data.email}`);
                  }}
                >
                  <Email />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item>
                <Typography>{data.qualification}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <Typography>{data.gender}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <Typography>{`$${data.price}/hr`}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item>
                <Rating
                  name="half-rating-read"
                  value={data.review}
                  readOnly
                  precision={0.5}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
          {value ? null : <Timetable/>}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Tutor;
