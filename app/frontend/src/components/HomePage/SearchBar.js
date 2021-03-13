import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SearchBar.css'
import FilterPanel from './FilterPanel';
import Grid from '@material-ui/core/Grid';
import Results from "./Results";

function SearchBarr() {
    // const classes = useStyles();
    
    return (
        <Grid>
            <div className="box">
                <form className="form">
                <input className="search-bar" placeholder="Search for tutors!"></input>
                <input type="submit" value="GO" href="#"></input>
                </form>
                <FilterPanel></FilterPanel>
                <Results></Results>
            </div>
        </Grid>
    );
  }
  
  export default SearchBarr;