// api/service.js

import axios from 'axios';

const service = axios.create({
  baseURL: process.env.MONGODB_URI /* || 'http://localhost:5005' */
});

const errorHandler = err => {
  throw err;
};

export default {
  service,

  handleUpload(theFile) {
    return service
      .post('/api/users/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },
};