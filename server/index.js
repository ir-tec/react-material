const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const cors = require("cors");
const compression = require("compression");
const customersRoute = require("./routes/customers");
mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongodb up");
  }
);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", customersRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server is up ");
});
