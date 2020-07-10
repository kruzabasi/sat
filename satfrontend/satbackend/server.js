const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const port = 5000;

mongoose.connect(
  process.env.db_con,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("db successfully connected");
  }
);

app.listen("3000", () => {
  console.log(`sat server running on port ${port}`);
});
