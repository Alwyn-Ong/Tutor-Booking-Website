import React from "react";
import { Page } from "../components/Page";
import { makeStyles } from "@material-ui/core";
import Profile from "../components/Profile";

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
  // return <Page>TUTOR PROFILE</Page>;
  return (
    <Page maxWidth="lg">
      <Profile></Profile>
    </Page>
  );
};

export default Homepage;
