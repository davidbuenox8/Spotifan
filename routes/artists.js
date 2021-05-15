const router = require("express").Router();
const Artist = require('../models/Artist');
const User = require('../models/User')

router.post('/', (req, res) => {
  const { artistObj, name, avatar, artistIdFromSpotify } = req.body;
  console.log('body', req.body)
  Artist.create({
    artistObj,
    name,
    avatar,
    artistIdFromSpotify,
  })
    .then(artist => {
      console.log(req.user)
      User.findByIdAndUpdate(req.user._id,
        {
          "$push": { "followedArtists": artist._id }
        },
        { new: true }).then(user => {
          res.status(200).json(user)
        }).catch(err => {
          console.log('Error while finding a artist by ID during application: ', err);
        })

    })
    .catch(err => res.json(err))
})


router.put('/:id', (req, res) => {
  console.log('THE REQ', req)
  User.findByIdAndUpdate(req.user._id,
    {
      "$pull": { "followedArtists": req.params.id }
    },
    { new: true }).then(user => {
      res.status(200).json({ message: 'artist unfollowed' });
    }).catch(err => {
      console.log('Error while deleting the artist: ', err);
    })
})


module.exports = router;
