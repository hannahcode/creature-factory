import "./Gallery.scss";
// import TestHead from "../../components/TestHead/TestHead";
// import TestBody from "../../components/TestBody/TestBody";
// import TestLegs from "../../components/TestLegs/TestLegs";
// import TestHead2 from "../../components/TestHead2/TestHead2";
// import TestBody2 from "../../components/TestBody2/TestBody2";
// import TestLegs2 from "../../components/TestLegs2/TestLegs2";
import React, { useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:8081/creatures/";

// const headArray = [<TestHead />, <TestHead2 />];
// const bodyArray = [<TestBody />, <TestBody2 />];
// const legsArray = [<TestLegs />, <TestLegs2 />];

export default function Gallery() {
  let creatures = [];

  const getCreatures = () => {
    axios.get(`${apiUrl}`).then((response) => {
      creatures = response.data;
      console.log(creatures);
    });
  };

  useEffect(() => {
    getCreatures();
  });

  return <h2>This is the gallery page</h2>;
}
