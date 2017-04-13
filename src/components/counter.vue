<template lang="html">
  <div>
    <md-button class="md-raised" @click.native="increment">{{ count }}</md-button>
  </div>
</template>

<script lang="babel">
export default {
  computed: {
    count () {
      return this.$store.state.counter.count
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('counter/increment')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
