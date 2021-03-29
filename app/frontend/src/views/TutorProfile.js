import React from "react";
import { Page } from "../components/Page";
import { makeStyles } from "@material-ui/core";
import TutorProfile from "../components/TutorProfile"

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
    <Page>
      <TutorProfile></TutorProfile>
    </Page>
  );
};

export default Homepage;
