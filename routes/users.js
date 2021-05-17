const router = require("express").Router();
const { uploader } = require("../config/cloudinary");
const User = require('../models/User');




router.get('/', (req, res) => {

  User.findById(req.user._id).populate('followedArtists')
    .then(user => {
      /*  user.followedArtists.filter(artist => { artist.artistId }); */
      res.status(200).json(user)

    })

})




router.put('/:id', uploader.single('avatar'), (req, res) => {
  const { chosenName } = req.body;
  console.log('the body', req.body)
  console.log('the rest', req.file)
  /*  const avatar = req.file.path;
   const publicId = req.file.filename;
   User.findByIdAndUpdate(
     req.user._id,
     { chosenName, avatar, publicId },
     { new: true }
   )
     .then(userUp => {
       res.status(200).json(userUp)
     })
     .catch(err => { res.json(err) })
  */
})

/* router.put('/:id', (req, res) => {
  const { chosenName } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { chosenName },
    { new: true }
  )
    .then(userUp => {
      res.status(200).json(userUp)
    })
    .catch(err => { res.json(err) })

})
 */



module.exports = router