<template>
<div class="container">
  <Header></Header>
  
</div>
</template>

<script>
import Header from '@/components/Header';
import userService from '../../services/userService';

export default {
  name: 'users',
  components: {
    Header,
  },
  beforeMount() {
    userService.get();
  },
};
</script>

<style>

</style>
