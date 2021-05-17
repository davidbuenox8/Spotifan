const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  albumObj: Object,
  albumId: String,
});

const Album = model("Album", userSchema);

module.exports = Album;