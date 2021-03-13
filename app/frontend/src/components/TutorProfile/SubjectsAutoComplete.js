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
  const [options, setOptionsData] = React.useState(props.data)

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={props.data}
        getOptionLabel={(option) => option.title}
        defaultValue={setOptionsData[1]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={props.subjectname}
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}