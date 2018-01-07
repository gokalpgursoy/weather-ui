import locationService from '../services/locationService';

export default {
  state: {
    locations: null,
  },
  getters: {
    currentLocations: state => state.locations,
  },
  mutations: {
    setLocationList(state, payload) {
      const { list } = payload;
      state.locations = list;
    },
  },
  actions: {
    getLocations(context) {
      return locationService
        .get()
        .then(res => {
          context.commit('setLocationList', {
            list: res,
          });
          return res;
        })
        .catch(err => console.log(err));
    },
  },
};
