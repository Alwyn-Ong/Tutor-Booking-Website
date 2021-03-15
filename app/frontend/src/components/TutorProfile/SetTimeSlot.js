import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LevelsTaughtTransferList from './LevelsTaughtTransferList';
import SubjectsAutoComplete from './SubjectsAutoComplete';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

export default function YourDetails(props) {
    const classes = useStyles();

    return (
        <Grid container className={props.instructions}>
            <Grid item xs={12}>
                <Typography variant="h2">
                    Enter your available timeslots
            </Typography>
            </Grid>
            <Grid item lg={6} sm={8} xs={12}>
                
            </Grid>
        </Grid>
    );
}

