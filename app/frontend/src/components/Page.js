import React from "react";
import { Box, Container } from "@material-ui/core";

export const Page = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};
