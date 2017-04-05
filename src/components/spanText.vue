<template lang="html">
<div id="spanText">

  <!--<p><span>{{ message }} </span></p>
  <p><span>{{ myMessage }} </span></p>-->

  <md-button class="md-raised" @click.native="increment">{{ counter }}</md-button>
</div>
</template>

<script lang="babel">
export default {
  props: ['message', 'myMessage'],
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
}
</script>

<style lang="css" scoped></style>
