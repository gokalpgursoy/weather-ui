<template>
  <div class="container">
    <Header></Header>
    <div class="columns">
      <div class="column is-4"></div>
      <div class="column is-4">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Username" v-model="username">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Grant Type</label>
          <div class="control">
            <div class="select">
              <select v-model="grantType">
                <option value="true">Admin</option>
                <option value="false">Member</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-warning" @click="save">UPDATE</button>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
    <div v-if="rootError" class="notification is-warning">
      <button class="delete"></button>
      You can not update root user.
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import _ from 'lodash';
import { mapGetters } from 'vuex';
import userService from '@/services/userService';

export default {
  data() {
    return {
      username: '',
      password: '',
      grantType: '',
      rootError: false,
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['currentUsers']),
  },
  mounted() {
    /*eslint-disable */
    const user = _.find(this.currentUsers, item => {
      return item.id === parseInt(this.$route.params.id);
    });
    this.username = user.username;
    this.password = user.password;
    this.grantType = user.isAdmin;
    return user;
  },
  methods: {
    async save() {
      if (this.username == 'root') {
        this.rootError = true;
        return false;
      }
      const data = {
        username: this.username,
        password: this.password,
        isAdmin: this.grantType.toString(),
        id: this.$route.params.id,
      };

      await userService.put(data);
      this.$router.go(-1);
    },
  },
};
</script>

<style>

</style>
