if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const creatureRoutes = require("./routes/creatures");
const PORT = process.env.PORT || 8081;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/creatures", creatureRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server up and running on Port ${PORT}`);
});
