import React from "react";
import { Typography, Box } from "@material-ui/core";

type Props = {
  dogFact: {
    fact: string;
  };
};

const DogFact = ({ dogFact }: Props) => {
  const { fact } = dogFact;

  return (
    <Box m={1} display="flex" flexDirection="row" justifyContent="center">
      <Typography>{fact}</Typography>
    </Box>
  );
};

export default DogFact;
