import api from '@/services';
import tools from '@/tools';
import config from '@/config';

export default {
  login(username, password) {
    return api().post('/token', `username=${username}&password=${password}`);
  },
  logout() {
    tools.cookie.set(config.global_key.tokenName, '', 0);
    window.location = '/login';
  },
};
