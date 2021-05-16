// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// session configuration

const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('./db/index');
const DB_URL = 'mongodb://localhost/spotifan';


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
      mongoUrl: DB_URL
    })
  })
)

// end of session configuration

// passport configuration
// http://www.passportjs.org/docs/configure/
const User = require('./models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// passport wants to store as little data as possible in the session so it only uses 
// the id's (or someting else if we would want to implement that) and not the whole 
// user object
// this method is used by passport to put the id of the user into the session
passport.serializeUser((user, done) => {
  done(null, user._id);
})

// this is used to retrieve the user by it's id (that is stored in the session)
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(dbUser => {
      done(null, dbUser)
    })
    .catch(err => {
      done(err);
    })
})

passport.use(
  new LocalStrategy((username, password, done) => {
    // this logic will be executed when we log in
    User.findOne({ username: username })
      .then(userFromDB => {
        if (userFromDB === null) {
          // there is no user with this username
          done(null, false, { message: 'Wrong Credentials' });
        } else if (!bcrypt.compareSync(password, userFromDB.password)) {
          // the password does not match
          done(null, false, { message: 'Wrong Credentials' });
        } else {
          // everything correct - user should be logged in
          done(null, userFromDB);
        }
      })
      .catch(err => {
        next(err);
      })
  })
)

app.use(passport.initialize());
app.use(passport.session());

// end of passport configuration




//spotify starts

const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

app.get('/artist-search/:name', (req, res) => {

  spotifyApi
    .searchArtists(req.params.name)
    .then(data => {
      res.status(200).json(data.body.artists.items)
    })
    .catch(err => console.log('The error while searching artists occurred: ', err));
})

app.get('/artist/:id', (req, res) => {
  spotifyApi.getArtist(req.params.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => console.log(err));
})

app.get('/albums/:artistId', (req, res) => {
  spotifyApi.getArtistAlbums(req.params.artistId)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => console.log(err));
})


/* app.get('/followedArtistsTracks', (req, res) => {

  User.findById(req.user._id).populate('followedArtists')
    .then(arrayArtists => {
      arrayArtists.followedArtists.forEach(artist => {
        spotifyApi.getArtistAlbums(artist.artistIdFromSpotify)
          .then(data => {
            console.log(data.body.items)
            res.status(200).json(data.body.items)
          })
          .catch(err => console.log(err));
      })
    })
}) */

app.get('/followedArtistsTracks', (req, res) => {
  User.findById(req.user._id).populate('followedArtists')
    .then(arrayArtists => {
      const followArtistDataArr = [];
      arrayArtists.followedArtists.forEach(artist => {
        spotifyApi.getArtistAlbums(artist.artistIdFromSpotify)
          .then(eachFollowArtistData => {
            followArtistDataArr.push(eachFollowArtistData.body.items)
          })
          .catch(err => { console.log(err) })
      })
        .then(() => { console.log('THE FINAL ARRAY', followArtistDataArr) })
    })
    .catch(err => console.log(err))
})


/* Promise.all(promises).then(finalData => {
  res.status(200).json(finalData)
  }) */


/*  const mergedData = [].concat.apply([], followArtistDataArr) */


app.get('/album/:albumId', (req, res) => {

  spotifyApi.getAlbumTracks(req.params.albumId)
    .then(data => {
      res.status(200).json(data.body.items)
    })
    .catch(err => console.log(err));

})


// default value for title local
const projectName = "spotifan";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with Ironlauncher`;

// 👇 Start handling routes here
const auth = require("./routes/auth");
app.use("/api/auth", auth);

const artists = require('./routes/artists');
app.use('/api/artists', artists)

const users = require('./routes/users');
app.use('/api/users', users)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
