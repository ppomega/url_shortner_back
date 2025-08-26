const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    url: String,
  },
  { collections: "urls" }
);

module.exports = mongoose.model("Url", urlSchema);
