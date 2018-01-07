import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import createPersistedState from 'vuex-persistedstate';
import authStore from './authStore';
import userStore from './userStore';
import locationStore from './locationStore';

Vue.use(Vuex);

const stores = _.merge(authStore, userStore, locationStore);

const { state, getters, mutations, actions } = stores;

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters,
  mutations,
  actions,
});
