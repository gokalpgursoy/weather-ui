const axios = require('axios');

module.exports = token => {
  if (token !== undefined) {
    return axios.create({
      baseURL: 'https://ggweather.herokuapp.com/api/',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return axios.create({
    baseURL: 'https://ggweather.herokuapp.com/token',
  });
};
