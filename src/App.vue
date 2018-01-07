<template>
  <div id="app" class="container">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
