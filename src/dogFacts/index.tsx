import React from "react";
import DogFacts from "./dogFacts";

const DogFactsContainer = () => {
  const dogFacts = [
    {
      fact: "Endal was the first dog to ride on the London Eye (the characteristic ferris wheel in London, England), and was also the first known dog to successfully use a ATM machine.",
    },
    {
      fact: "At the age of 4 weeks, most dogs have developed the majority of their vocalizations.",
    },
    {
      fact: "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.",
    },
    {
      fact: "Apple and pear seeds contain arsenic, which may be deadly to dogs.",
    },
    {
      fact: "Rock star Ozzy Osborne saved his wife Sharon\u2019s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog.",
    },
    {
      fact: "Dogs have sweat glands in between their paws.",
    },
  ];

  return <DogFacts dogFacts={dogFacts} />;
};

export default DogFactsContainer;
