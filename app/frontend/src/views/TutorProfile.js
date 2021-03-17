import React from "react";

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import ProgressStepper from "../components/TutorProfile/ProgressStepper";
import NavTabs from "../components/TutorProfile/NavTabs";

import { makeStyles } from "@material-ui/core";

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

const TutorProfile = () => {

  //hardcoded
  let userID = 1;
  let allNearestMRT = [
    'Bedok',
    'Bishan',
    'Boon Keng',
    'Bukit Timah',
    'Chinatown',
    'Hougang',
    'Jurong',
    'Orchard',
    'Pasir Ris',
    'Sengkang',
    'Sentosa',
    'Serangoon',
    'Simei',
    'Woodlands']

  const [isTutor, setIsTutor] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0)
  const [stepSkipped, setStepSkipped] = React.useState();
  const [steps, setSteps] = React.useState(['Your Professional Background', 'Teaching Details', 'Available Timeslot']);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const classes = useStyles();

  return (
    <>
    <NavTabs isTutor={isTutor}></NavTabs>
    <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    <Container className={classes.root}>
      <Grid className={classes.grid} xs={12} style={{width:"100%"}}>
          {<ProgressStepper isTutor={isTutor}
                            steps={steps} 
                            activeStep={activeStep} 
                            setActiveStep={setActiveStep} 
                            stepSkipped={stepSkipped} 
                            setStepSkipped={setStepSkipped}
                            skipped={skipped}
                            setSkipped={setSkipped}
                            isStepSkipped={isStepSkipped}>
            </ProgressStepper>}
      </Grid>
    </Container>
    </>
  )
};

export default TutorProfile;
