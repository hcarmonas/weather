<template>
  <md-layout>
    <md-layout>
      <md-layout md-align="center" md-flex="100">
        <p class="forecastTableCellDate">{{data.date | day}}</p>
      </md-layout>
      <md-layout md-align="center" md-flex="100">
        <img :src="'http://openweathermap.org/img/w/' + data.icon + '.png'" class="forecastImg">
      </md-layout>
      <md-layout md-align="center" md-flex="100">
            <span>{{data.description}}</span>
      </md-layout>
      <md-layout md-align="center" md-flex="100">
        <span class="label labelMax" style="height : 15px;">{{data.max | temp}}</span>
        <span class="label labelMin" style="height : 15px;">{{data.min}} °C</span>
      </md-layout>
    </md-layout>

  </md-layout>
</template>

<script lang="babel">
import moment from 'moment'

export default {
  props: ['data'],
  filters: {
    day (date) {
      return moment(date).format('ddd DD MMM')
    },
    temp (temp) {
      return temp + ' °C'
    }
  }
}
</script>

<style lang="css" scoped>
.forecastTable {
  width: 500px;
  border: solid 1px #e0e0e0;
}

.forecastTableCellRight {
  width: 200px
}

.forecastTableCellDate {
  width: 100px;
  float: left;
  padding-top: 15px;
  font-size: 16px
}

.forecastTableCellLeft {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

.forecastText {
  text-align: left
}

.forecastImg {
  float: left
}

.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}

.labelMax {
  background-color: #f0ad4e;
}

.labelMin {
  background-color: #999;
}
</style>
