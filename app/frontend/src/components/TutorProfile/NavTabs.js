import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function ViewTabs(props) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="select tutor page view"
      >
        <Tab label="Edit Your Information" />
        <Tab label="View Your Posting" disabled={!props.isTutor}/>
      </Tabs>
    </Paper>
  );
}