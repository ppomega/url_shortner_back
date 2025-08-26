const express = require("express");
const cors = require("cors");
const fetchUrl = require("./src/business_logic/urlfetch");
const insertUrl = require("./src/business_logic/urlinsert");
const fetchUrlId = require("./src/business_logic/urlfetch_id");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
app.post("/api/shorten", async (req, res) => {
  console.log(req.body);
  const url = req.body.url;
  console.log(url);
  const data = await insertUrl(url);
  res.send(data);
});
app.get("/:shortcode", async (req, res) => {
  console.log(req.params);
  const shortcode = req.params.shortcode;
  const data = await fetchUrlId(shortcode);
  console.log(data);

  res.redirect(301, data[0].url);
});
app.get("/api/urls", async (req, res) => {
  const data = await fetchUrl();
  console.log(data);

  res.send(data);
});
