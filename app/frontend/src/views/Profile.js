import React from "react";
import { Page } from "../components/Page";
import { makeStyles } from "@material-ui/core";
import Profile from "../components/Profile";

// For redux
import { useSelector } from "react-redux";
import { Typography, Container, Box, Button, Grid } from "@material-ui/core";
import LoginModalWrapper from "../components/Auth/LoginModalWrapper";

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
  const auth = useSelector((state) => state.auth);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  // return <Page>TUTOR PROFILE</Page>;
  return (
    <Page maxWidth="lg" isFullHeight>
      {auth.name ? (
        <Profile />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="md">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography align="center" color="textPrimary" variant="h1">
                  There's nothing to see here...
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="textPrimary"
                  variant="subtitle2"
                >
                  Login to view your personal dashboard.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsOpenModal(true);
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <LoginModalWrapper
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
            />
          </Container>
        </Box>
      )}
    </Page>
  );
};

export default Homepage;
