const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  artistObj: Object,
  name: String,
  avatar: String,
  artistIdFromSpotify: String,
  likedTracks: [{
    trackId: String
  }],
  listenLater: [{
    trackId: String
  }],
  follow: Boolean
});

const Artist = model("Artist", userSchema);

module.exports = Artist;