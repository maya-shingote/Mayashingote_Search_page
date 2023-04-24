const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const db = require('../server/db');

const adRoutes = require("./adroute.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "public")));

MongoClient.connect(db.uri, db.options)
  .then((client) => {
    console.log("Connected to MongoDB Atlas database");
    const database = client.db("searchpage");

    adRoutes(app, database);

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "public", "index.html"));
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas database", err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
