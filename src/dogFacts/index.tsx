import axios from "axios";
import React, { useEffect, useState } from "react";
import { DogFactsType } from "../types";
import DogFacts from "./dogFacts";

const DogFactsContainer = () => {
  const [data, setData] = useState<DogFactsType[]>([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=24"
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <DogFacts dogFacts={data} />;
};

export default DogFactsContainer;
