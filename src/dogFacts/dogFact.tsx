import React from "react";
import { Box } from "@material-ui/core";
import FactCard from "./factCard";

type Props = {
  dogFact: {
    fact: string;
  };
};

const DogFact = ({ dogFact }: Props) => {
  const { fact } = dogFact;

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" m={3}>
      <FactCard fact={fact} />
    </Box>
  );
};

export default DogFact;
