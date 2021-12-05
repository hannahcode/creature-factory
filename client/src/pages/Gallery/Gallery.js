import "./Gallery.scss";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";

export default function Gallery() {
  const [creatures, setCreatures] = useState([]);

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

  const handleDownvote = (id) => {
    axios
      .put(`${API_URL}/${id}/downvote`)
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
            <GalleryItem
              key={creature.id}
              creature={creature}
              handleDownvote={handleDownvote}
              handleUpvote={handleUpvote}
            />
          );
        })}
      </section>
    </section>
  );
}
