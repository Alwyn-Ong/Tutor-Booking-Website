import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function SubjectsAutoComplete(props) {
  const classes = useStyles();

  console.log(props.userSubjects)

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id={props.subjectname+"_subject"}
        options={props.data}
        getOptionLabel={(option) => option}
        defaultValue={props.userSubjects}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={props.subjectname + " Subjects Taught"}
            placeholder={props.subjectname + " Subjects Taught"}
          />
        )}
      />
    </div>
  );
}