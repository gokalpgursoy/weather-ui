<template>
  <div class="container">
    <Header></Header>
    <div class="select">
      <select v-model="selectedUserId">
        <option value="">Select a User</option>
        <option v-for="usr in this.currentUsers" :value="usr.id">{{usr.username}}</option>
      </select>
    </div>
    <button class="button is-link" @click='getLogs'>Get Logs</button>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>User</th>
          <th>Location</th>
          <th>IP Address</th>
          <th>Time</th>
          <th>Success</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody v-for="item in this.logsById">
        <tr>
          <th>{{item.id}}</th>
          <td>{{item.userId}}</td>
          <td>{{item.locationId}}</td>
          <td>{{item.ipAddress}}</td>
          <td>{{item.time}}</td>
          <td v-if="item.isSuccess === 'true'">
            <span class="icon has-text-success">
              <i class="fa fa-check-square"></i>
            </span>
          </td>
          <td v-if="item.isSuccess !== 'true'">
            <span class="icon has-text-danger">
              <i class="fa fa-ban"></i>
            </span>
          </td>
          <td>{{item.createdAt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from '@/components/Header';
import loggerService from '@/services/loggerService';
import { mapGetters } from 'vuex';
import _ from 'lodash';

export default {
  name: 'logs',
  data() {
    return {
      currentLogs: null,
      logsById: null,
      selectedUserId: 0,
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['currentUsers', 'currentLocations']),
  },
  methods: {
    /*eslint-disable */
    async getLogs() {
      this.logsById = await loggerService.getLogsByUser(this.selectedUserId);
      console.log(this.logsById);
    },
    getUsername(id) {
      return _.find(this.currentUsers, itemUser => {
        return itemUser.id === id;
      }).username;
    },
    getLocationName(id) {
      return _.find(this.currentLocations, itemLocation => {
        return itemLocation.id === id;
      });
    },
  },
};
</script>

<style computed>
table {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 10px auto;
  width: 100%;
}

#btnCreate {
  margin-top: 100px;
}
</style>
