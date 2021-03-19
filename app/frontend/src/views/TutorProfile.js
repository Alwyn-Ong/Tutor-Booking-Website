import React from "react";
import {useEffect} from 'react';

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

  const [userData, setUserData] = React.useState();
  const [userID, setUserId] = React.useState(1);
  const [isTutor, setIsTutor] = React.useState(false);
  const [qualification, setQualification] = React.useState("na")
  const [location, setLocation] = React.useState("Bedok")
  const [price, setPrice] = React.useState(0);
  const [levelTaught, setLevelTaught] = React.useState([]);
  const [primarySubjects, setPrimarySubjects] = React.useState([]);
  const [olevelSubjects, setOlevelSubjects] = React.useState([]);
  const [alevelSubjects, setAlevelSubjects] = React.useState([]);
  const [openTimeSlot, setOpenTimeSlot] = React.useState([]);

  const [activeStep, setActiveStep] = React.useState(0)
  const [stepSkipped, setStepSkipped] = React.useState();
  const [steps, setSteps] = React.useState(['Your Professional Background', 'Teaching Details', 'Available Timeslot']);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const classes = useStyles();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`http://localhost:8080/api/gettutorbyid/${userID}/`);
      const newData = await response.json();
      console.log(newData)
      setUserData(newData);
      setIsTutor(newData.isTutor)
      setQualification(newData.qualification.toLowerCase())
      setLocation(newData.nearestMRT);
      setPrice(newData.price);
      setLevelTaught(Object.keys(newData.levelsTaught));
      if (newData.levelsTaught["Primary"])
        setPrimarySubjects(newData.levelsTaught["Primary"])
      if (newData.levelsTaught["O-Levels"])
        setOlevelSubjects(newData.levelsTaught["O-Levels"])
      if (newData.levelsTaught["A-Levels"])
        setAlevelSubjects(newData.levelsTaught["A-Levels"])
      setOpenTimeSlot(newData.openTimeslot);
    };
    fetchUserData();
  }, [userID]);

  return (
    <>
      {}
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
        <Grid className={classes.grid} style={{ width: "100%" }}>
          {<ProgressStepper isTutor={isTutor}
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            stepSkipped={stepSkipped}
            setStepSkipped={setStepSkipped}
            skipped={skipped}
            setSkipped={setSkipped}
            isStepSkipped={isStepSkipped}
            qualification={qualification}
            setQualification={setQualification}
            location={location}
            setLocation={setLocation}
            price={price}
            setPrice={setPrice}
            levelTaught={levelTaught}
            setLevelTaught={setLevelTaught}
            primarySubjects={primarySubjects}
            setPrimarySubjects={setPrimarySubjects}
            olevelSubjects={olevelSubjects}
            setOlevelSubjects={setOlevelSubjects}
            alevelSubjects={alevelSubjects}
            setAlevelSubjects={setAlevelSubjects}
            openTimeSlot={openTimeSlot}
            setOpenTimeSlot={setOpenTimeSlot}>
          </ProgressStepper>}
        </Grid>
      </Container>
    </>
  )
};

export default TutorProfile;
