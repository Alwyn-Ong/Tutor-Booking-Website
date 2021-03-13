import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LevelsTaughtTransferList from './LevelsTaughtTransferList';
import SubjectsAutoComplete from './SubjectsAutoComplete';
import Typography from '@material-ui/core/Typography';

const levelList = ["Primary", "A-Level", "O-Level"]

const olevelSubjectsList = [
    {title: "Accounting"},
    {title: "Arabic"},
    {title: "Biology"},
    {title: "Chemistry"},
    {title: "Commerce"},
    {title: "Computer Science"},
    {title: "English Language"},
    {title: "Geography"},
    {title: "History"},
    {title: "Islamic Studies"},
    {title: "Literature in English"},
    {title: "Additional Mathematics"},
    {title: "Mathematics D"},
    {title: "Physics"},
    {title: "Combined Science"},
    {title: "Sociology"},
    {title: "Statistics"},
    {title: "Tamil"}
]

const alevelSubjectsList = [
    {title: "Accounting"},
    {title:"History"},
    {title:"Applied Science"},
    {title:"Biology"},
    {title:"Chemistry"},
    {title:"Computer Science"},
    {title:"Economics"},
    {title:"English Language"},
    {title:"English Language and Literature"},
    {title:"Further Mathematics"},
    {title:"General Studies"},
    {title:"Geography"},
    {title:"Humanities"},
    {title:"Mathematics"},
    {title:"Physics"},
    {title:"Statistics"}
]

const primarySubjectsList = [
    {title:"English Language"},
    {title:"Chinese"},
    {title:"Malay"},
    {title:"Tamil"},
    {title:"Mathematics"},
    {title:"Science"},
    {title:"Art"},
    {title:"Music"},
    {title:"Social Studies"},
    {title:"Character and Citizenship Education"}]

const useStyles = makeStyles((theme) => ({
}));

export default function YourDetails(props) {
    const classes = useStyles();

    return (
        <Grid container className={props.instructions}>
            <Grid item xs={12}>
                <Typography variant="h2">
                    Enter your teaching details
            </Typography>
            </Grid>
            <Grid item lg={6} sm={8} xs={12}>
                <LevelsTaughtTransferList data={levelList}></LevelsTaughtTransferList>
            </Grid>
            <Grid item lg={6} sm={4} xs={12}>
                <Grid item lg={12}>
                    <SubjectsAutoComplete data={primarySubjectsList} subjectname="Primary"></SubjectsAutoComplete>
                </Grid>
                <Grid item lg={12}>
                    <SubjectsAutoComplete data={olevelSubjectsList} subjectname="O-Level"></SubjectsAutoComplete>
                </Grid>
                <Grid item lg={12}>
                    <SubjectsAutoComplete data={alevelSubjectsList} subjectname="A-Level"></SubjectsAutoComplete>
                </Grid>
            </Grid>
        </Grid>
    );
}

