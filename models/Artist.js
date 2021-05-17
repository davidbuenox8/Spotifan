const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  artistObj: Object,
  name: String,
  avatar: String,
  artistIdFromSpotify: String,
});

const Artist = model("Artist", userSchema);

module.exports = Artist;