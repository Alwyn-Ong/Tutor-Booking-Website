import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function EnableSwitch(props) {

  const handleChange = (event) => {
    var change = ({ ...props, [event.target.name]: event.target.checked });
    console.log(change)
    props.setIsTutor(change.turnOffTutorListing)
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={props.checked}
            onChange={handleChange}
            name="turnOffTutorListing"
            color="primary"
          />
        }
        label="List this account as a tutor account"
      />
    </FormGroup>
  );
}