import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  textEntry: {
    marginTop: theme.spacing(3),
    width: '70%',
  },
  button: {

    width: "outlined",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function YourDetails(props) {
  const classes = useStyles();
  const [qualification, setQualification] = React.useState("na")
  const [showSubject, setShowSubject] = React.useState(false)

  const handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    setQualification(value);

    if (["diploma", "bachelors", "degree", "phd"].indexOf(value) != -1) {
      setShowSubject(true)
    } else{
      setShowSubject(false)
    }
  };

  return (
    <Grid container className={props.instructions}>
      <Grid item xs={12}>
        <Typography variant="h2">
          Enter your professional background
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="qualificationSelectLabel">Highest Qualification</InputLabel>
          <Select
            labelId="highestQualificationSelect"
            id="highestQualificationSelect"
            value={qualification}
            onChange={handleChange}
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

      {showSubject && <TextField className={classes.textEntry} id="qualificationSubject" label="Subject" />}
    </Grid>
  );
}

