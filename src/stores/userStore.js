// import userService from '@/services/userService';

export default {
  state: {
    users: null,
  },
  getters: {
    currentUsers: state => state.users,
  },
  mutations: {
    // setUserInfo(state, payload) {
    //   state.users = payload.users;
    // },
  },
  actions: {
    // getUsers(context, payload) {
    //   // return new Promise((resolve, reject) => {
    //   //   authService
    //   //     .login(payload.username, payload.password)
    //   //     .then(res => {
    //   //       tools.cookie.set(config.global_key.tokenName, res.data.access_token);
    //   //       payload.isAdmin = res.data.isAdmin;
    //   //       context.commit('setUserInfo', payload);
    //   //       resolve(res);
    //   //     })
    //   //     .catch(err => reject(err));
    //   // });
    // },
  },
};
