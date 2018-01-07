<template>
  <div class="column">
    <p class="control">
      <button :class="stil" @click='goTo(go)'>
        {{title}}
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'menuItem',
  data() {
    return {
      color: this.color,
    };
  },
  props: ['go', 'title', 'stil'],
  methods: {
    goTo(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style>

</style>
