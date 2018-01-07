const axios = require('axios');

module.exports = token => {
  if (token !== undefined) {
    return axios.create({
      baseURL: 'http://localhost:8088/api/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return axios.create({
    baseURL: 'http://localhost:8088/token',
  });
};
