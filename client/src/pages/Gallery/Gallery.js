import "./Gallery.scss";
import { Heads } from "../../components/Heads";
import { Bodies } from "../../components/Bodies";
import { Legs } from "../../components/Legs";
import upvote from "../../assets/icons/expand_less_black_24dp.svg";
import downvote from "../../assets/icons/expand_more_black_24dp.svg";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { API_URL } from "../../config";

export default function Gallery() {
  const [creatures, setCreatures] = useState([]);
  const printRef = React.useRef();

  const getCreatures = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        setCreatures(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCreatures();
  }, []);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const handleUpvote = (event) => {
    axios
      .put(`${API_URL}/${event.target.id}/upvote`)
      .then(() => {
        getCreatures();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDownvote = (event) => {
    axios
      .put(`${API_URL}/${event.target.id}/downvote`)
      .then(() => {
        getCreatures();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="gallery">
      <h2 className="gallery__title">Creatures</h2>
      <section className="gallery__creatures">
        {creatures.map((creature) => {
          return (
            <div key={creature.id} className="gallery__creature">
              <div className="gallery__print-container" ref={printRef}>
                <h2 className="gallery__creature-title">{creature.name}</h2>
                <svg width="133.33" height="233.33">
                  <g transform="scale(.66)">
                    {Legs[creature.legs]}
                    {Bodies[creature.body]}
                    {Heads[creature.head]}
                  </g>
                </svg>
              </div>
              <button type="button" onClick={handleDownloadImage}>
                Download Creature
              </button>
              <div className="gallery__creature-likes-container">
                <img
                  src={upvote}
                  alt="up arrow to increase likes"
                  className="gallery__creature-upvote"
                  onClick={handleUpvote}
                  id={creature.id}
                />
                <p className="gallery__creature-likes">{creature.likes}</p>
                <img
                  src={downvote}
                  alt="down arrow to decrease likes"
                  className="gallery__creature-downvote"
                  onClick={handleDownvote}
                  id={creature.id}
                />
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
