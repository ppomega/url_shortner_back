const mongoose = require("mongoose");
const url = require("../model/url");

async function insertUrl(newUrl) {
  console.log(process.env.DB_URL);
  await mongoose.connect(process.env.DB_URL);
  const data = await url.find({ url: newUrl });
  if (data.length == 0) {
    return await new url({ url: newUrl }).save();
  } else {
    await mongoose.connection.close();

    return data;
  }
}
module.exports = insertUrl;
