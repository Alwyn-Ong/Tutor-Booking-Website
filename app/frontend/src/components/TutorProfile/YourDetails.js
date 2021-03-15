import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    width: '100%',
  },
  textEntry: {
    width: '100%',
  },
  button: {

    width: "outlined",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    width: '100%',
  }
}));

export default function YourDetails(props) {
  const classes = useStyles();
  const [qualification, setQualification] = React.useState("na")
  const [location, setLocation] = React.useState("other")
  const [showSubject, setShowSubject] = React.useState(false)

  const handleChangeQualification = (event) => {
    const value = event.target.value
    console.log(value)
    setQualification(value);

    if (["diploma", "bachelors", "degree", "phd"].indexOf(value) != -1) {
      setShowSubject(true)
    } else {
      setShowSubject(false)
    }
  };

  const handleChangeLocation = (event) => {
    const value = event.target.value
    console.log(value)
    setLocation(value);
  };

  return (
    <Grid container className={props.instructions}>
      <Grid item xs={12}>
        <br></br>
        <Typography variant="h2">
          Your professional background and information
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <br></br>
        <Typography variant="h5">
          Qualifications
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="qualificationSelectLabel">Highest Qualification</InputLabel>
          <Select
            labelId="highestQualificationSelect"
            id="highestQualificationSelect"
            value={qualification}
            onChange={handleChangeQualification}
          >
            <MenuItem value={"na"}>Not Available</MenuItem>
            <MenuItem value={"nitec"}>NITEC</MenuItem>
            <MenuItem value={"hnitec"}>Higher NITEC</MenuItem>
            <MenuItem value={"olevel"}>O-Level</MenuItem>
            <MenuItem value={"alevel"}>A-Level</MenuItem>
            <MenuItem value={"diploma"}>Diploma</MenuItem>
            <MenuItem value={"bachelors"}>Bachelors</MenuItem>
            <MenuItem value={"degree"}>Masters</MenuItem>
            <MenuItem value={"phd"}>PhD</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {showSubject && <TextField className={classes.textEntry} id="qualificationSubject" label="Subject" />}
      </Grid>
      <Grid item className={classes.divider} xs={12}>
      </Grid>
      <Grid item xs={12}>
      <Typography variant="h5">
          Enter your location
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="locationSelectLabel">Nearest MRT</InputLabel>
          <Select
            labelId="nearestLocationSelect"
            id="nearestLocationSelect"
            value={location}
            onChange={handleChangeLocation}
          >
            <MenuItem value={"bedok"}>Bedok</MenuItem>
            <MenuItem value={"eunos"}>Eunos</MenuItem>
            <MenuItem value={"cityhall"}>City Hall</MenuItem>
            <MenuItem value={"serangoon"}>Serangoon</MenuItem>
            <MenuItem value={"dhobyghaut"}>Dhoby Ghaut</MenuItem>
            <MenuItem value={"orchard"}>Orchard</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

