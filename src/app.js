const express = require("express");

const serverRoutes = require("./routes/serverRoutes");
const rentalRoutes = require("./routes/rentalRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "GameHost API is running" });
});

app.use("/servers", serverRoutes);
app.use("/rentals", rentalRoutes);
app.use("/dashboard", dashboardRoutes);

module.exports = app;