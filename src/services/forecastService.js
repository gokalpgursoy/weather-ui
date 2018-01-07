import axios from 'axios';

export default {
  async getForecastByTitle(title) {
    const url = `http://api.wunderground.com/api/dd3551dfbd278604/conditions/q/CA/${title}.json`;
    const res = await axios.get(url);
    if (res.data.hasOwnProperty('current_observation')) {
      // return res.data;

      return {
        success: true,
        temp: res.data.current_observation.temp_c,
        weather: res.data.current_observation.weather,
        lastUpdate: res.data.current_observation.observation_time,
        url: res.data.current_observation.ob_url,
        time: res.data.current_observation.local_time_rfc822,
        image: res.data.current_observation.image.url,
        title: res.data.current_observation.local_tz_long,
        // res: res.data.current_observation,   // "Data too long for column 'response' at row 1"
        res: res.data.response,
      };
    }
    return {
      success: false,
      res: res.data.response.features,
    };
  },
};
