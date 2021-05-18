// api/service.js

import axios from 'axios';

const service = axios.create({
  baseURL: process.env.MONGODB_URI || 'http://localhost:5005'
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

export default {
  service,

  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return service
      .post('/api/users/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  /* saveNewAvatar(newAvatar) {
    // console.log('new thing is: ', newThing)
    return service
      .post('/api/users', newAvatar)
      .then(res => res.data)
      .catch(errorHandler);
  } */
};