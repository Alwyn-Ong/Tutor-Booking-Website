import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LevelsTaughtTransferList from './LevelsTaughtTransferList';
import SubjectsAutoComplete from './SubjectsAutoComplete';
import Typography from '@material-ui/core/Typography';

const levelList = ["Primary", "A-Levels", "O-Levels"]

const useStyles = makeStyles((theme) => ({
    autocomplete: {
        display: "flex",
        justifyContent: "center",
        paddingBottom: 10,
        alignItems: "center",
    }
}));

const subjectsList = [
    "English",
    "Mathematics",
    "Science",
    "Economics",
    "Geography",
    "History",
    "Literature"]

export default function YourDetails(props) {
    const classes = useStyles();

    return (
        <Grid container className={props.instructions}>
            <Grid item xs={12}>
                <Typography variant="h2">
                    Enter your teaching details
                </Typography>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <LevelsTaughtTransferList
                    data={levelList}
                    levelTaught={props.levelTaught}
                    setLevelTaught={props.setLevelTaught}
                ></LevelsTaughtTransferList>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
                <Grid item lg={12} className={classes.autocomplete}>
                    {(props.levelTaught.indexOf("Primary") !== -1) && <SubjectsAutoComplete
                        data={subjectsList}
                        userSubjects={props.primarySubjects}
                        setUserSubjects={props.setPrimarySubjects}
                        subjectname="Primary">
                    </SubjectsAutoComplete>}
                </Grid>
                <Grid item lg={12} className={classes.autocomplete}>
                    {(props.levelTaught.indexOf("O-Levels") !== -1) && <SubjectsAutoComplete
                        data={subjectsList}
                        userSubjects={props.olevelSubjects}
                        setUserSubjects={props.setOlevelSubjects}
                        subjectname="O-Level">
                    </SubjectsAutoComplete>}
                </Grid>
                <Grid item lg={12} className={classes.autocomplete}>
                    {(props.levelTaught.indexOf("A-Levels") !== -1) && <SubjectsAutoComplete
                        data={subjectsList}
                        userSubjects={props.alevelSubjects}
                        setUserSubjects={props.setAlevelSubjects}
                        subjectname="A-Level">
                    </SubjectsAutoComplete>}
                </Grid>
            </Grid>
        </Grid>
    );
}

