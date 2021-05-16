const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  chosenName: String,
  password: String,
  avatar: String,
  publicId: String,
  spotifyId: String,
  followedArtists: [{
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  }]
});

const User = model("User", userSchema);

module.exports = User;
