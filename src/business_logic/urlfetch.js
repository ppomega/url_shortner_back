const mongoose = require("mongoose");
const url = require("../model/url");

async function findUrl() {
  await mongoose.connect(process.env.DB_URL);
  const data = await url.find({});
  await mongoose.connection.close();

  return data;
}
module.exports = findUrl;
