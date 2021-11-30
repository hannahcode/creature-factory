import "./Gallery.scss";
import TestHead from "../../components/Heads/TestHead";
import TestBody from "../../components/Bodies/TestBody";
import TestLegs from "../../components/Legs/TestLegs";
import TestHead2 from "../../components/Heads/TestHead2";
import TestBody2 from "../../components/Bodies/TestBody2";
import TestLegs2 from "../../components/Legs/TestLegs2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:8081/creatures/";

const headArray = [<TestHead />, <TestHead2 />];
const bodyArray = [<TestBody />, <TestBody2 />];
const legsArray = [<TestLegs />, <TestLegs2 />];

export default function Gallery() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}`).then((response) => {
      setCreatures(response.data);
      console.log(creatures);
    });
  }, []);

  return (
    <section className="gallery">
      <h2 className="gallery__title">Creatures</h2>
      <section className="gallery__creatures">
        {creatures.map((creature) => {
          return (
            <div key={creature.id} className="gallery__creature">
              <h2 className="gallery__creature-title">{creature.name}</h2>
              <svg width="133.33" height="233.33">
                <g transform="scale(.66)">
                  {legsArray[creature.legs]}
                  {bodyArray[creature.body]}
                  {headArray[creature.head]}
                </g>
              </svg>
            </div>
          );
        })}
      </section>
    </section>
  );
}
