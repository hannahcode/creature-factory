import "./Create.scss";

import React, { useState } from "react";
import axios from "axios";
import { Heads } from "../../components/Heads";
import { Bodies } from "../../components/Bodies";
import { Legs } from "../../components/Legs";

const apiUrl = "http://localhost:8081/creatures/";

export default function Create() {
  const [name, setName] = useState("");
  const [head, setHead] = useState(0);
  const [body, setBody] = useState(0);
  const [legs, setLegs] = useState(0);

  const headKeys = Object.keys(Heads);
  const bodiesKeys = Object.keys(Bodies);
  const legsKeys = Object.keys(Legs);

  const currentLegs = Object.keys(Legs)[legs];
  const currentBody = Object.keys(Bodies)[body];
  const currentHead = Object.keys(Heads)[head];

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleHead = () => {
    if (head >= headKeys.length - 1) {
      setHead(0);
      return;
    }
    setHead(head + 1);
    console.log(head);
  };

  const handleBody = () => {
    if (body >= bodiesKeys.length - 1) {
      setBody(0);
      return;
    }
    setBody(body + 1);
    console.log(body);
  };

  const handleLegs = () => {
    if (legs >= legsKeys.length - 1) {
      setLegs(0);
      return;
    }
    setLegs(legs + 1);
    console.log(legs);
  };

  const handleCreate = () => {
    const newCreature = { name: name, head: currentHead, body: currentBody, legs: currentLegs };
    console.log(newCreature);
    if (!name) {
      return;
    }
    axios
      .post(`${apiUrl}`, newCreature)
      .then(console.log("success"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="create">
      <h2 className="create__title">Create your creature!</h2>
      <div className="create__container">
        <div className="create__name-container">
          <label htmlFor="name" className="create__label">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Give your creature a name"
            className="create__input"
            onChange={handleChange}
          ></input>
        </div>
        <section className="create__machine">
          <div className="create__machine-parts-section">
            <svg width="200" height="350">
              {Legs[currentLegs]}
              {Bodies[currentBody]}
              {Heads[currentHead]}
            </svg>
          </div>
          <aside className="create__aside-container">
            <div className="create__machine-buttons">
              <button className="create__machine-button" onClick={handleHead}>
                Change head
              </button>
              <button className="create__machine-button" onClick={handleBody}>
                Change body
              </button>
              <button className="create__machine-button" onClick={handleLegs}>
                Change legs
              </button>
            </div>
            <button className="create__create-button" onClick={handleCreate}>
              Create!
            </button>
          </aside>
        </section>
      </div>
    </section>
  );
}
