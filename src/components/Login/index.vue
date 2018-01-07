<template>
  <div class="columns">
    <div class="column is-one-third"></div>
    <div class="column">
      <div class="field logo">
        <!-- <img src="../../assets/img/logo.png" alt="" height="80"> -->
      </div>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email" v-model="username">
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password" v-model="password">
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-link is-rounded btnLogin" @click="login">
            Login
          </button>
        </p>
      </div>
      <div class="field error" v-if="isError">
      Username or Password is invalid.
    </div>
    </div>
    
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: 'root',
      password: '123',
      isError: false,
    };
  },
  methods: {
    login() {
      const obj = {
        username: this.username,
        password: this.password,
      };
      this.$store
        .dispatch('login', obj)
        .then(() => {
          // sabitleri çek
          // location.pathname = '/';
          this.isError = false;
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err);
          this.isError = true;
        });
    },
  },
  beforeMount() {
    localStorage.clear();
  },
};
</script>

<style computed>
.logo {
  background-image: url('../../assets/img/logo.png');
  background-size: 100%;
  width: 300px;
  height: 300px;
  left: 0;
  right: 0;
  margin: auto;
  background-repeat: no-repeat;
  margin-top: 100px;
}
.btnLogin {
  width: 100%;
}
.error {
  font-size: 15px;
  text-align: center;
  color: red;
}
</style>
