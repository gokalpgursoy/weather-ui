<template>
  <div class="columns home">
    <div class="column is-one-third"></div>
    <div class="column divGeneral">
      <div class="field" v-if="isAdmin">
        <div class="columns">
          <menu-item stil='button is-info' go='/users' title='USERS'></menu-item>
          <menu-item stil='button is-black' go='/locations' title='LOCATIONS'></menu-item>
        </div>
      </div>
      <div class="field">
        <div class="columns">
          <menu-item stil='button is-success' go='/weather' title='WEATHER'></menu-item>
          <menu-item stil='button is-danger' go='/logs' title='LOGS'></menu-item>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem';

export default {
  props: ['isAdmin'],
  methods: {
    goTo(to) {
      this.$router.push(to);
    },
  },
  components: {
    MenuItem,
  },
};
</script>

<style>

</style>
