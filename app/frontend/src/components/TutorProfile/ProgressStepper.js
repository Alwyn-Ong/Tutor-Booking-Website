import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import YourDetails from "./YourDetails";
import TeachingDetails from "./TeachingDetails";
import Typography from '@material-ui/core/Typography';
import SetTimeSlot from "./SetTimeSlot";

import {
  highestQualificationData,
  levelsTaughtData,
  primarySubjectsData,
  oLevelSubjectsData,
  aLevelSubjectsData
} from "./data"

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

export default function HorizontalLinearStepper(props) {

  const classes = useStyles()

  const handleNext = () => {
    let newSkipped = props.skipped;
    if (props.isStepSkipped(props.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(props.activeStep);
    }

    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setSkipped(newSkipped);
  };

  const handleBack = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(props.activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    props.setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container xs={12} className={classes.root}>
      <Grid className={classes.grid} xs={12}>
        {(props.activeStep === 0) && <YourDetails></YourDetails>}
        {(props.activeStep === 1) && <TeachingDetails></TeachingDetails>}
        {(props.activeStep === 2) && <Typography className={classes.instructions}><SetTimeSlot></SetTimeSlot></Typography>}
      </Grid>
    </Grid>
      <div>
        {props.activeStep === props.steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button disabled={props.activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button 
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {props.activeStep === props.steps.length - 1 ? (props.isTutor?"Update":"Create") : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}