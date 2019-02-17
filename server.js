global.fetch = require("node-fetch");
const config = require("universal-config");
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");

const unsplash = new Unsplash({
  applicationId: config.get("APPLICATION_ID"),
  secret: config.get("SECRET"),
  callbackUrl: config.get("CALLBACK_URL")
});

const app = express();

app.get("/api/photos/", (req, res) => {
  const { start, count } = req.query;

  unsplash.photos
    .listPhotos(start, count)
    .then(toJson)
    .then(json => res.json(json));
});

app.listen(5000, () => console.log("Server started on port 5000"));
