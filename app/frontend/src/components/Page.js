import React from "react";
import { Box, Container } from "@material-ui/core";

export const Page = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        {children}
      </Box>
    </Container>
  );
};
