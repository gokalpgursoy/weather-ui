<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import _ from 'lodash';
import tools from '@/tools';
import config from '@/config';

require('./assets/sass/main.scss');

export default {
  name: 'app',
  methods: {
    checkToken() {
      const token = tools.cookie.get(config.global_key.tokenName);

      if (_.isEmpty(token)) {
        this.$router.push('/login');
      }
    },
  },
  beforeMount() {
    this.checkToken();
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  background-image: url('./assets/img/forecast-bg.jpg');
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}
</style>
