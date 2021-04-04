import React from "react";
import { Page } from "../components/Page";
import Dashboard from "../components/Dashboard";

// For redux
import { useSelector } from "react-redux";
import { Typography, Container, Box, Button, Grid } from "@material-ui/core";
import LoginModalWrapper from "../components/Auth/LoginModalWrapper";
import Timeline from "../components/Timeline";

const TimelineView = () => {
  const auth = useSelector((state) => state.auth);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  return (
    <>
      {auth.name ? (
        <Page maxWidth="lg">
          <Timeline />
        </Page>
      ) : (
        <Page maxWidth="lg" isFullHeight>
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
        </Page>
      )}
    </>
  );
};

export default TimelineView;
