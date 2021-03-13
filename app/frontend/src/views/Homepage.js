import React from "react";
import { Page } from "../components/Page";
import { makeStyles } from "@material-ui/core";
import SearchBar from "../components/HomePage/SearchBar";
// import SearchBarr from "../components/HomePage/SearchBarr";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <div>
      <SearchBar></SearchBar>
    </div>
  )
};

export default Homepage;
