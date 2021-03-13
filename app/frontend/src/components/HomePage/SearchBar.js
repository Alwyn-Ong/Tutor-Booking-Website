import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SearchBar.css'
import FilterPanel from './FilterPanel';

function SearchBarr() {
    // const classes = useStyles();
    
    return (
        <div className="box">
            <form className="form">
            <input className="search-bar" placeholder="Search for tutors!"></input>
            <input type="submit" value="GO" href="#"></input>
            </form>
            <FilterPanel></FilterPanel>
        </div>
    );
  }
  
  export default SearchBarr;