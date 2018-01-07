import api from './';
import config from '../config';
import tools from '../tools';

export default {
  async setLog(data) {
    const token = await tools.cookie.get(config.global_key.tokenName);
    api(token)
      .post('/logs', data)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  async getLogsByUser(id) {
    const token = await tools.cookie.get(config.global_key.tokenName);
    const res = await api(token).get(`/logs/${id}`);
    return res.data;
  },
};
