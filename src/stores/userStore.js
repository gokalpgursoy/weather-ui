import userService from '../services/userService';

// import userService from '@/services/userService';

export default {
  state: {
    users: null,
  },
  getters: {
    currentUsers: state => state.users,
  },
  mutations: {
    setUserList(state, payload) {
      const { list } = payload;
      state.users = list;
    },
  },
  actions: {
    getUsers(context) {
      return userService
        .get()
        .then(res => {
          context.commit('setUserList', {
            list: res,
          });
          return res;
        })
        .catch(err => console.log(err));
    },
  },
};
