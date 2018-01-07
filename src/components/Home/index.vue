<template>
  <div class="container">
    <Header></Header>
    <Menu :isAdmin='isAdmin'></Menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Menu from '@/components/Menu';
import Header from '@/components/Header';

export default {
  name: 'home',
  components: {
    Menu,
    Header,
  },
  computed: {
    ...mapGetters(['isAdmin']),
  },
};
</script>

<style computed>
.home {
  margin-top: 250px;
}

.divGeneral .button {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
</style>
