const router = require("express").Router();
const Album = require('../models/Album');
const User = require('../models/User')

router.post('/', (req, res) => {
  const { albumObj, albumName, albumIdFromSpotify } = req.body;
  console.log('body', req.body)
  Album.create({
    albumObj,
    albumName,
    albumIdFromSpotify,
  })
    .then(album => {
      console.log(req.user)
      User.findByIdAndUpdate(req.user._id,
        {
          "$push": { "savedAlbums": album._id }
        },
        { new: true }).populate('savedAlbums').then(user => {
          res.status(200).json(user)
        }).catch(err => {
          console.log('Error while finding album by ID during application: ', err);
        })

    })
    .catch(err => res.json(err))
})


router.delete('/:id', (req, res) => {
  Album.findOneAndDelete({
    albumIdFromSpotify
      : `${req.params.id}`
  }).then((data) => {
    User.findByIdAndUpdate(req.user._id,
      {
        "$pull": { "savedAlbums": data._id }
      },
      { new: true }).populate('savedAlbums').then(user => {
        res.status(200).json(user)
      }).catch(err => {
        console.log('Error while finding a album in array: ', err);
      })
  })
    .catch(err => res.json(err))

})


module.exports = router;