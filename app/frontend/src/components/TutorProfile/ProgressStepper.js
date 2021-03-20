import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import YourDetails from "./YourDetails";
import TeachingDetails from "./TeachingDetails";
import Typography from '@material-ui/core/Typography';
import SetTimeSlot from "./SetTimeSlot";

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

  const sendUserData = async () => {
    console.log(props.primarySubjects);
    console.log(props.olevelSubjects);
    console.log(props.alevelSubjects);

    let userObject = {
      "userID": props.userID,
      "qualification:": props.qualification,
      "nearestMRT": props.location,
      "price": props.price,
    };
    let subjectArray = [];
    if (props.primarySubjects.length > 0){
      subjectArray.push(
        {
          "levelsTaught": "Primary",
          "subjectTaught": props.primarySubjects,
        });
    }

    if (props.olevelSubjects.length > 0)
      subjectArray.push(
        {
          "levelsTaught": "O-Levels",
          "subjectTaught": props.olevelSubjects,
        });
    if (props.alevelSubjects.length > 0)
      subjectArray.push(
        {
          "levelsTaught": "A-Levels",
          "subjectTaught": props.alevelSubjects
        });
    let timeslotArray = [];
    for (var item of props.openTimeSlot) {
      timeslotArray.push({ "timeslot": item });
    }
    let sendObject = {
      "user": userObject,
      "subjects": subjectArray,
      "timeslots": timeslotArray,
    }
  
    console.log(sendObject);
  
    return fetch(`http://localhost:8080/api/updatetutorprofile/`,
          {
            method: 'PUT',
            body: JSON.stringify(sendObject)
          }).then(response => response.json())
  }

  const hasSubjects = () => {
    if (!props.primarySubjects && !props.olevelSubjects && !props.alevelSubjects)
      return false
    return true
  }

  const handleNext = () => {
    let newSkipped = props.skipped;
    if (props.isStepSkipped(props.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(props.activeStep);
    }

    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    props.setSkipped(newSkipped);
  }

  if (props.activeStep === 3) {
    if (!props.qualification || !props.location || !props.price || !hasSubjects || !props.openTimeSlot) {
      alert("Please fill in all the values.");
      props.setActiveStep(2);
    } else {
      let responseJSON = sendUserData();
      console.log(responseJSON);
    }
  }

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
      <Grid container className={classes.root}>
        <Grid className={classes.grid}>
          {(props.activeStep === 0) && <YourDetails
            qualification={props.qualification}
            setQualification={props.setQualification}
            location={props.location}
            setLocation={props.setLocation}
            price={props.price}
            setPrice={props.setPrice}>
          </YourDetails>}
          {(props.activeStep === 1) && <TeachingDetails
            levelTaught={props.levelTaught}
            setLevelTaught={props.setLevelTaught}
            primarySubjects={props.primarySubjects}
            setPrimarySubjects={props.setPrimarySubjects}
            olevelSubjects={props.olevelSubjects}
            setOlevelSubjects={props.setOlevelSubjects}
            alevelSubjects={props.alevelSubjects}
            setAlevelSubjects={props.setAlevelSubjects}>
          </TeachingDetails>}
          {(props.activeStep === 2) && <SetTimeSlot
            openTimeSlot={props.openTimeSlot}
            setOpenTimeSlot={props.setOpenTimeSlot}
            openTimeSlotArr={props.openTimeSlotArr}
            setOpenTimeSlotArr={props.setOpenTimeSlotArr}>
          </SetTimeSlot>}
        </Grid>
      </Grid>
      <div>
        {props.activeStep === props.steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Back
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
                {props.activeStep === props.steps.length - 1 ? (props.isTutor ? "Update" : "Create") : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}