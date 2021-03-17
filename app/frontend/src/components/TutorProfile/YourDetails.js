import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

  //hardcoded
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

export default function YourDetails(props) {
  const classes = useStyles();

  const handleChangeQualification = (event) => {
    const value = event.target.value
    props.setQualification(value);
  };

  const handleChangeLocation = (event) => {
    const value = event.target.value
    console.log(value)
    props.setLocation(value);
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
            value={props.qualification}
            onChange={handleChangeQualification}
          >
            <MenuItem value={"na"}>Not Available</MenuItem>
            <MenuItem value={"nitec"}>NITEC</MenuItem>
            <MenuItem value={"hnitec"}>Higher NITEC</MenuItem>
            <MenuItem value={"olevel"}>O-Level</MenuItem>
            <MenuItem value={"alevel"}>A-Level</MenuItem>
            <MenuItem value={"diploma"}>Diploma</MenuItem>
            <MenuItem value={"degree"}>Degree</MenuItem>
            <MenuItem value={"masters"}>Masters</MenuItem>
            <MenuItem value={"phd"}>PhD</MenuItem>
          </Select>
        </FormControl>
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
            value={props.location}
            onChange={handleChangeLocation}
          >
            {allNearestMRT.map((loc) => <MenuItem value={loc}>{loc}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

