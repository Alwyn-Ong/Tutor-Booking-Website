import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Timetable from './Timetable';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "10%",
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(0),
        width: '100%',
    }
}));

export default function YourDetails(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.root} xs={12}>
                <Typography variant="h2">
                    Enter your available timeslots
            </Typography>
            </Grid>
            <Grid item lg={2} sm={12} xs={12}>
            </Grid>
            <Grid className={classes.root} item lg={8} sm={12} xs={12}>
                <Timetable></Timetable>
            </Grid>
            <Grid item lg={2} sm={12} xs={12}>
            </Grid>
        </Grid>
    );
}

