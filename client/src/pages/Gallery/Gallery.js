import "./Gallery.scss";
import { Heads } from "../../components/Heads";
import { Bodies } from "../../components/Bodies";
import { Legs } from "../../components/Legs";
import upvote from "../../assets/icons/expand_less_black_24dp.svg";
import downvote from "../../assets/icons/expand_more_black_24dp.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";

export default function Gallery() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}`).then((response) => {
      setCreatures(response.data);
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
              <div className="gallery__creature-likes-container">
                <img
                  src={upvote}
                  alt="up arrow to increase likes"
                  className="gallery__creature-upvote"
                />
                <p className="gallery__creature-likes">{creature.likes}</p>
                <img
                  src={downvote}
                  alt="down arrow to decrease likes"
                  className="gallery__creature-downvote"
                />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
