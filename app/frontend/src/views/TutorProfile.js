import React from "react";

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";

import ProgressStepper from "../components/TutorProfile/ProgressStepper";
import EnableSwitch from "../components/TutorProfile/EnableSwitch";
import YourDetails from "../components/TutorProfile/YourDetails";
import NavTabs from "../components/TutorProfile/NavTabs";
import TeachingDetails from "../components/TutorProfile/TeachingDetails";
import Typography from '@material-ui/core/Typography';
import SetTimeSlot from "../components/TutorProfile/SetTimeSlot";

import { makeStyles } from "@material-ui/core";
import {
  highestQualificationData,
  levelsTaughtData,
  primarySubjectsData,
  oLevelSubjectsData,
  aLevelSubjectsData
} from "../components/TutorProfile/data"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "10%",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(0),
    width: '100%',
  },
  grid: {
    padding: theme.spacing(1)
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const Homepage = () => {

  const [isTutor, setIsTutor] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0)

  const classes = useStyles();

  return <Container maxWidth="lg" className={classes.root}>
    <NavTabs></NavTabs>
    <Grid container xs={12} className={classes.root}>
      {/* <Grid className={classes.grid} xs={12}>
        <EnableSwitch className={classes.enableSwitch} isTutor={!isTutor} setIsTutor={setIsTutor}></EnableSwitch>
      </Grid> */}
      <Grid className={classes.grid} xs={12}>
        {(activeStep === 0) && <YourDetails></YourDetails>}
        {(activeStep === 1) && <TeachingDetails></TeachingDetails>}
        {(activeStep === 2) && <Typography className={classes.instructions}><SetTimeSlot></SetTimeSlot></Typography>}
      </Grid>
      <Grid className={classes.grid} xs={12}>
        {<ProgressStepper setActiveStep={setActiveStep} activeStep={activeStep}></ProgressStepper>}
      </Grid>
    </Grid>

  </Container>;
};

export default Homepage;
