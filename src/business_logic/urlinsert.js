const mongoose = require("mongoose");
const url = require("../model/url");
const keygen = require("./keygen");
async function insertUrl(newUrl) {
  await mongoose.connect(process.env.DB_URL);
  const data = await url.find({ url: newUrl });
  if (data.length == 0) {
    while (true) {
      var key = keygen();
      console.log(typeof key);
      const existing = await url.find({ key: key });
      if (existing.length == 0) {
        return await new url({ url: newUrl, key: key }).save();
      }
    }
  } else {
    await mongoose.connection.close();

    return data;
  }
}
module.exports = insertUrl;
