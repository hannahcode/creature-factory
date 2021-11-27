import "./Create.scss";
import TestHead from "../../components/TestHead/TestHead";
import TestBody from "../../components/TestBody/TestBody";
import TestLegs from "../../components/TestLegs/TestLegs";
import TestHead2 from "../../components/TestHead2/TestHead2";
import TestBody2 from "../../components/TestBody2/TestBody2";
import TestLegs2 from "../../components/TestLegs2/TestLegs2";
import React, { useState, useEffect } from "react";

const headArray = [<TestHead />, <TestHead2 />];
const bodyArray = [<TestBody />, <TestBody2 />];
const legsArray = [<TestLegs />, <TestLegs2 />];

export default function Create() {
  // const [name, setName] = useState({name: ""})
  const [head, setHead] = useState(0);
  const [body, setBody] = useState(0);
  const [legs, setLegs] = useState(0);

  const handleHead = () => {
    if (head >= headArray.length - 1) {
      setHead(0);
      return;
    }
    setHead(head + 1);
    console.log(head);
  };

  const handleBody = () => {
    if (body >= bodyArray.length - 1) {
      setBody(0);
      return;
    }
    setBody(body + 1);
    console.log(body);
  };

  const handleLegs = () => {
    if (legs >= legsArray.length - 1) {
      setLegs(0);
      return;
    }
    setLegs(legs + 1);
    console.log(legs);
  };

  return (
    <section className="create">
      <h2 className="create__title">Create your creature!</h2>
      <label htmlFor="name" className="create__label">
        Name:
      </label>
      <input
        id="name"
        type="text"
        placeholder="give your creature a name"
        className="create__input"
      ></input>
      <section className="create__machine">
        <div className="create__machine-parts-section">
          <svg width="200" height="500">
            {legsArray[legs]}
            {bodyArray[body]}
            {headArray[head]}
          </svg>
        </div>
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
      </section>
      <button className="create__create-button">Create!</button>
    </section>
  );
}
