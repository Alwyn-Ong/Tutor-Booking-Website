import React from "react";
import { useEffect } from 'react';

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ProgressStepper from "../components/TutorProfile/ProgressStepper";

import { makeStyles } from "@material-ui/core";

let data = ["1-1000", "2-1000", "3-1000", "4-1000", "5-1000", "6-1000", "7-1000",
"1-1100", "2-1100", "3-1100", "4-1100", "5-1100", "6-1100", "7-1100",
"1-1200", "2-1200", "3-1200", "4-1200", "5-1200", "6-1200", "7-1200",
"1-1300", "2-1300", "3-1300", "4-1300", "5-1300", "6-1300", "7-1300",
"1-1400", "2-1400", "3-1400", "4-1400", "5-1400", "6-1400", "7-1400",
"1-1500", "2-1500", "3-1500", "4-1500", "5-1500", "6-1500", "7-1500",
"1-1600", "2-1600", "3-1600", "4-1600", "5-1600", "6-1600", "7-1600",
"1-1700", "2-1700", "3-1700", "4-1700", "5-1700", "6-1700", "7-1700",
"1-1800", "2-1800", "3-1800", "4-1800", "5-1800", "6-1800", "7-1800",
"1-1900", "2-1900", "3-1900", "4-1900", "5-1900", "6-1900", "7-1900",
"1-2000", "2-2000", "3-2000", "4-2000", "5-2000", "6-2000", "7-2000",
"1-2100", "2-2100", "3-2100", "4-2100", "5-2100", "6-2100", "7-2100",
"1-2200", "2-2200", "3-2200", "4-2200", "5-2200", "6-2200", "7-2200"
];

let TIME = ["aaa", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200"];

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
  const [userID, setUserId] = React.useState(3);
  const [isTutor, setIsTutor] = React.useState(false);
  const [qualification, setQualification] = React.useState("na")
  const [location, setLocation] = React.useState("Bedok")
  const [price, setPrice] = React.useState(0);
  const [levelTaught, setLevelTaught] = React.useState([]);
  const [primarySubjects, setPrimarySubjects] = React.useState([]);
  const [olevelSubjects, setOlevelSubjects] = React.useState([]);
  const [alevelSubjects, setAlevelSubjects] = React.useState([]);
  const [openTimeSlot, setOpenTimeSlot] = React.useState([]);
  const [openTimeSlotArr, setOpenTimeSlotArr] = React.useState([]);

  const [activeStep, setActiveStep] = React.useState(0)
  const [stepSkipped, setStepSkipped] = React.useState();
  const [steps, setSteps] = React.useState(['Your Professional Background', 'Teaching Details', 'Available Timeslot']);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const translateOpenTimeSlotToArray = (timeSlot) => {
    console.log(timeSlot)
    const array = generateStateMatrix(14, 8);
    for (const element of timeSlot) {
      var temp = element.split("-"); //0-day, 1-time
      var thisColumn = temp[0]
      var thisRow = TIME.indexOf(temp[1]);
      array[thisRow][thisColumn] = true;
    }
    return array;
  }

  const generateStateMatrix = (rows, cols) => {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => false)
    );
  };

  const classes = useStyles();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`http://localhost:8080/api/gettutorbyid/${userID}/`);
      const newData = await response.json();
      if (response.ok) {
        console.log(newData)
        setUserData(newData);
        setIsTutor(newData.isTutor)
        setQualification(newData.qualification)
        setLocation(newData.nearestMRT);
        setPrice(newData.price);
        setLevelTaught(Object.keys(newData.levelsTaught));
        if (newData.levelsTaught["Primary"])
          setPrimarySubjects(newData.levelsTaught["Primary"])
        if (newData.levelsTaught["O-Levels"])
          setOlevelSubjects(newData.levelsTaught["O-Levels"])
        if (newData.levelsTaught["A-Levels"])
          setAlevelSubjects(newData.levelsTaught["A-Levels"])

        //handle timeslot
        setOpenTimeSlot(newData.openTimeslot);
        setOpenTimeSlotArr(translateOpenTimeSlotToArray(newData.openTimeslot));
      }else{
        setOpenTimeSlot(data);
        setOpenTimeSlotArr(generateStateMatrix(14,8))
      }
    }
    fetchUserData();
  }, [userID]);

  console.log(olevelSubjects)

return (
  <>
    { }
    {/* <NavTabs isTutor={isTutor}></NavTabs> */}
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
          userID={userID}
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
          setOpenTimeSlot={setOpenTimeSlot}
          openTimeSlotArr={openTimeSlotArr}
          setOpenTimeSlotArr={setOpenTimeSlotArr}>
        </ProgressStepper>}
      </Grid>
    </Container>
  </>
)
};

export default TutorProfile;
