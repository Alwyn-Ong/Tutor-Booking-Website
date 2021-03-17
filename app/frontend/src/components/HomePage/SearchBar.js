import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './SearchBar.css'
import FilterPanel from './FilterPanel';
import Grid from '@material-ui/core/Grid';
import Results from "./Results";
import Sticky from 'react-sticky-el';
import Container from '@material-ui/core/Container';
import ParallaxCarousel from './ParallaxCarousel';
import NoticeBoard from './NoticeBoard';

function SearchBar() {
    // const classes = useStyles();
    const useStyles = makeStyles({
        root: {
            position: "sticky",
            top: "1rem",
            //   minWidth: "275"
        }
    });
    const classes = useStyles();

    const [filter, setFilter] = React.useState({
        gender: '',
        price: '',
        level: '',
        qualification: '',
        selectedLocations:[]
    });

    
    return (
        <Grid>
                <Container className="heading">
                    <form>
                        <input className="search-bar" placeholder="Search for tutors!"></input>
                        <input type="submit" value="GO" href="#"></input>
                    </form>
                    <FilterPanel setState={setFilter} state={filter}></FilterPanel>
                </Container>
                <Container className="carousellContainer">
                    <NoticeBoard></NoticeBoard>
                </Container>
                <Container className="tracks">
                    <Results></Results>
                </Container>
        </Grid>
    );
}

export default SearchBar;