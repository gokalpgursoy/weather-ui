<template>
  <div class="container">
    <Header></Header>
    <div class="columns">
      <div class="column is-4"></div>
      <div class="column is-4">
        <div class="field">
          <label class="label">Title</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Title" v-model="title">
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
  </div>
</template>

<script>
import Header from '@/components/Header';
import _ from 'lodash';
import { mapGetters } from 'vuex';
import locationService from '@/services/locationService';

export default {
  data() {
    return {
      title: '',
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['currentLocations']),
  },
  mounted() {
    /*eslint-disable */
    const location = _.find(this.currentLocations, item => {
      return item.id === parseInt(this.$route.params.id);
    });
    this.title = location.title;
  },
  methods: {
    async save() {
      const data = {
        id: this.$route.params.id,
        title: this.title,
      };

      await locationService.put(data);
      this.$router.go(-1);
    },
  },
};
</script>

<style>

</style>
