<template>
  <md-layout>
    <md-input-container md-inline>
      <label>Search your city to weather</label>
      <md-input class="inputCity" v-model="city"></md-input>
      <md-button class="md-icon-button" @click.native="search"><md-icon>search</md-icon></md-button>
    </md-input-container>
  </md-layout>
</template>

<script lang="babel">

export default {
  data: () => {
    return {
      city: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.city)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
