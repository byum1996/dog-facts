import React from "react";
import { Grid } from "@material-ui/core";
import DogFact from "./dogFact";

type Props = {
  dogFacts: {
    fact: string;
  }[];
};

const renderDogFact = (dogFact: { fact: string }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <DogFact dogFact={dogFact} />
    </Grid>
  );
};

const DogFacts = ({ dogFacts }: Props) => {
  return (
    <>
      <Grid container spacing={3}>
        {dogFacts.map((dogFact) => renderDogFact(dogFact))}
      </Grid>
    </>
  );
};

export default DogFacts;
