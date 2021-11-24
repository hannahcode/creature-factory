const express = require("express");
const app = express();
require("dotenv").config();
const creatureRoutes = require("./routes/creatures");
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/creatures", creatureRoutes);

app.listen(PORT, () => {
  console.log(`Server up and running on Port ${PORT}`);
});
