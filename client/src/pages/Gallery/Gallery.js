import "./Gallery.scss";
import { Heads } from "../../components/Heads";
import { Bodies } from "../../components/Bodies";
import { Legs } from "../../components/Legs";
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:8081/creatures/";

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
                  {Legs[creature.legs]}
                  {Bodies[creature.body]}
                  {Heads[creature.head]}
                </g>
              </svg>
            </div>
          );
        })}
      </section>
    </section>
  );
}
