<template>
  <div class="column">
    <p class="control">
      <button :class="stil" class="raise" @click='goTo(go)'>
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
.raise:hover,
.raise:focus {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transform: scale(1.15, 1.15);
}
</style>
