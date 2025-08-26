const express = require("express");
const cors = require("cors");
const fetchUrl = require("./business_logic/urlfetch");
const insertUrl = require("./business_logic/urlinsert");
const fetchUrlId = require("./business_logic/urlfetch_id");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
app.post("/url", async (req, res) => {
  const url = req.body.url;
  const data = await insertUrl(url);
  res.send(data);
});

app.get("/urls", async (req, res) => {
  const data = await fetchUrl();
  console.log(data);

  res.send(data);
});
app.get("/url", async (req, res) => {
  const url = req.headers.url;

  const data = await fetchUrlId(url);
  console.log(data);
  res.send(data);
});
