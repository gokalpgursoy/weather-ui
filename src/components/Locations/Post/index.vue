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
            <button class="button is-info" @click="create">CREATE</button>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
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
  methods: {
    async create() {
      const data = {
        title: this.title,
      };

      await locationService.post(data);
      this.$router.go(-1);
    },
  },
};
</script>

<style computed>

</style>
