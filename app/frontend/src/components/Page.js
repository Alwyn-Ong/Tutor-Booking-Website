import React from "react";
import { Box, Container } from "@material-ui/core";

export const Page = ({ children, maxWidth="md" }) => {
  return (
    <Container maxWidth={maxWidth}>
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
