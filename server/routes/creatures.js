const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

let creatures = [];

const getCreatures = () => {
  fs.readFile(
    path.resolve(__dirname, "../data/creatures.json"),
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      creatures = JSON.parse(data);
    }
  );
};

getCreatures();

const writeCreatures = (data) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../data/creatures.json"),
    JSON.stringify(data)
  );
};

router.get("/", (req, res) => {
  res.json(creatures);
});

router.post("/", (req, res) => {
  const { name, head, body, legs } = req.body;

  const newCreature = {
    id: uuid.v4(),
    name: name,
    head: head,
    body: body,
    legs: legs,
  };

  creatures.push(newCreature);
  writeCreatures(creatures);

  res.json(newCreature);
});

module.exports = router;
