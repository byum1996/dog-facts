import { Box } from "@material-ui/core";
import React from "react";
import dogCutout from "../assets/dogCutout.svg";

const Logo = () => {
  return (
    <Box>
      <img className="Logo" src={dogCutout} alt="DogCutout" />
    </Box>
  );
};

export default Logo;
