<template>
  <div class="container">
    <Header></Header>
    <router-link to="/locations/create">
    <button class="button is-info" id="btnCreate">Create New Location</button>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="item in currentLocations">
        <tr>
          <th>{{item.id}}</th>
          <td>{{item.title}}</td>
          <td>
            <router-link class="button is-warning" :to="{ name: 'updateLocation', params: { id: item.id }}">Update</router-link>            
            <router-link class="button is-danger" :to="{ name: 'deleteLocation', params: { id: item.id }}">Delete</router-link>            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from '@/components/Header';
import { mapGetters } from 'vuex';

export default {
  name: 'locations',
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['currentLocations']),
  },
  async beforeMount() {
    await this.$store.dispatch('getLocations');
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
