import React from "react";
import { Box } from "@material-ui/core";
import Logo from "./logo";
import Title from "./title";

const HeaderContainer = () => {
  return (
    <Box m={3} display="flex" flexDirection="row" justifyContent="center">
      <Logo />
      <Title />
    </Box>
  );
};

export default HeaderContainer;
