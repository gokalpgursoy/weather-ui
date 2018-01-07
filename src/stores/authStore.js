import config from '@/config';
import authService from '@/services/authService';
import tools from '@/tools';

export default {
  state: {
    username: '',
    password: '',
    isAdmin: false,
  },
  getters: {
    isAdmin: state => state.isAdmin,
  },
  mutations: {
    setUserInfo(state, payload) {
      state.username = payload.username;
      state.password = payload.password;
      state.isAdmin = payload.isAdmin;
    },
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        authService
          .login(payload.username, payload.password)
          .then(res => {
            tools.cookie.set(config.global_key.tokenName, res.data.access_token);
            payload.isAdmin = res.data.isAdmin;
            context.commit('setUserInfo', payload);
            resolve(res);
          })
          .catch(err => reject(err));
      });
    },
  },
};
