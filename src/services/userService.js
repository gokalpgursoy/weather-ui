import api from './';
import config from '../config';
import tools from '../tools';

export default {
  async get() {
    const token = await tools.cookie.get(config.global_key.tokenName);
    const res = await api(token).get('/users');
    return res.data;
  },
  async post(data) {
    const token = await tools.cookie.get(config.global_key.tokenName);
    const res = await api(token).post('/users', data);
    return res.data;
  },
};
