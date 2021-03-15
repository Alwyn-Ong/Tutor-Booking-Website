import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SearchBar.css'
import FilterPanel from './FilterPanel';
import Grid from '@material-ui/core/Grid';
import Results from "./Results";
import Sticky from 'react-sticky-el';
import Container from '@material-ui/core/Container';

function SearchBarr() {
    // const classes = useStyles();
    const useStyles = makeStyles({
        root: {
            position: "sticky",
            top: "1rem",
            //   minWidth: "275"
        }
    });
    const classes = useStyles();
    return (
        <Grid>
                <Container className="heading">
                    <form>
                        <input className="search-bar" placeholder="Search for tutors!"></input>
                        <input type="submit" value="GO" href="#"></input>
                    </form>
                    <FilterPanel></FilterPanel>
                </Container>
                <Container className="tracks">
                    <Results></Results>
                </Container>
        </Grid>
    );
}

export default SearchBarr;