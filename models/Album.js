const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  albumObj: Object,
  albumName: String,
  albumIdFromSpotify: String,

});

const Album = model("Album", userSchema);

module.exports = Album;