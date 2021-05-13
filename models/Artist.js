const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  name: String,
  avatar: String,
  ArtistId: String,
  likedTracks: [{
    trackId: String
  }],
  listenLater: [{
    trackId: String
  }],
});

const Aritst = model("Artist", userSchema);

module.exports = Artist;