const router = require("express").Router();
const { uploader } = require("../config/cloudinary");
const User = require('../models/User');




router.get('/', (req, res) => {
  User.findById(req.user._id).populate('followedArtists').populate('savedAlbums')
    .then(user => {
      res.status(200).json(user)
    })
})




router.post('/upload', uploader.single('avatar'), (req, res) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  res.json({ secure_url: req.file.path });
})

router.put('/:id', (req, res) => {
  const { chosenName, avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { chosenName, avatar },
    { new: true }
  )
    .then(userUp => {
      res.status(200).json(userUp)
    })
    .catch(err => { res.json(err) })
})




module.exports = router