<template>
  <div class="columns">
    <div class="column is-2">
      <button v-if="!isHome" id="btnBack" class="button is-primary" @click="back">BACK</button>
    </div>
    <div class="column is-8"></div>
    <div class="column is-2">
      <button id="btnLogout" class="button is-danger" @click="logout">LOGOUT</button>
    </div>
  </div>
</template>

<script>
import tools from '@/tools';

export default {
  name: 'logout',
  data() {
    return {
      isHome: false,
    };
  },
  methods: {
    logout() {
      tools.cookie.set('access_token', '', 0);
      // window.location = '/login';
      this.$router.push('/login');
    },
    back() {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    if (this.$route.path === '/') {
      this.isHome = true;
    }
  },
};
</script>

<style computed>
#btnLogout {
  margin-top: 20px;
  float: right;
}
#btnBack {
  margin-top: 20px;
}
</style>
