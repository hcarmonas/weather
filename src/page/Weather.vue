<template lang="html">
<div id="weather">
  <md-layout>
    <md-layout md-align="center" md-flex="100" md-flex-small="100" style="padding: 5px;">
      <md-card style="width: 400px;">
        <md-card-content>
          <md-input-container md-inline>
            <label>Search your city to know the weather forecast</label>
            <md-input class="inputCity" v-model="city"></md-input>
            <md-button class="md-icon-button" @click.native="search"><md-icon>search</md-icon></md-button>
          </md-input-container>
        </md-card-content>
      </md-card>
    </md-layout>
    <md-layout v-if="weather.data.city" md-flex="100" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="30" md-flex-large="30" style="padding: 5px;">
      <md-card style="width: 100%; height:200px; background-color: orange">
        <md-card-header>
          <md-layout md-flex="100">
            <span class="md-display-1" style="color: white">{{weather.data.city.name}}</span>
          </md-layout>
          <md-layout md-flex="100">
             <span style="font-size: 15px; color: white; padding-left: 2px">{{weather.data.list["0"].weather["0"].description}}</span>
          </md-layout>
        </md-card-header>
        <md-card-content>
          <md-layout>
            <md-layout md-align="center" md-flex="30">
              <img style="width: 100px; height: 100px; margin-bottom: -15px; margin-top: -15px;" :src="'http://openweathermap.org/img/w/' + weather.data.list['0'].weather['0'].icon + '.png'" class="forecastImg">
            </md-layout>
            <md-layout md-align="center" md-flex="70">
              <span style="font-size: 70px; color: white; padding-top: 15px;">{{temp}}°C</span>
            </md-layout>
          </md-layout>
        </md-card-content>
      </md-card >
    </md-layout>
    <md-layout v-if="weather.data.city" md-flex="100" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="30" md-flex-large="30" style="padding: 5px;">
      <md-card style="width: 100%">
        <md-card-header>
          <span class="md-title">Details</span>
        </md-card-header>
        <md-card-content>
          <md-layout>
            <md-layout md-align="center" md-flex="30">
              <img style="width: 50px; height: 50px;" src="../assets/wind.png">
            </md-layout>
            <md-layout md-align="right" md-flex="70">
              <span class="md-body-2" style="padding-top: 15px">Velocidade de {{weather.data.list["0"].wind.speed}} m/s</span>
            </md-layout>
          </md-layout>
          <md-layout>
            <md-layout md-align="center" md-flex="30">
              <img style="width: 50px; height: 50px;" src="../assets/clouds.png">
            </md-layout>
            <md-layout md-align="right" md-flex="70">
              <span class="md-body-2" style="padding-top: 15px">{{weather.data.list["0"].weather["0"].description}}</span>
            </md-layout>
          </md-layout>
          <md-layout>
            <md-layout md-align="center" md-flex="30">
              <img style="width: 50px; height: 50px;" src="../assets/pressure.png">
            </md-layout>
            <md-layout md-align="right" md-flex="70">
              <span class="md-body-2" style="padding-top: 15px">{{weather.data.list["0"].main.pressure}} hpa</span>
            </md-layout>
          </md-layout>
          <md-layout>
            <md-layout md-align="center" md-flex="30">
              <img style="width: 50px; height: 50px;" src="../assets/umbrella.png">
            </md-layout>
            <md-layout md-align="right" md-flex="70">
              <span class="md-body-2" style="padding-top: 15px">{{weather.data.list["0"].main.humidity}}%</span>
            </md-layout>
          </md-layout>
        </md-card-content>
      </md-card>
    </md-layout>
    <md-layout v-if="weather.data.city" md-flex="100" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="40" md-flex-large="40" style="padding: 5px;">
      <md-card style="width: 480px; padding: 5px">
        <md-card-header>
          <span class="md-title">5 day weather forecast</span>
        </md-card-header>
        <md-card-content>
          <md-layout>
            <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50">
                <div>
                  <p class="forecastTableCellDate">{{moment(weather.data.list[5].dt_txt).format('ddd DD MMM')}}</p>
                  <img :src="'http://openweathermap.org/img/w/' + weather.data.list['5'].weather['0'].icon + '.png'" class="forecastImg">
                </div>
            </md-layout>
            <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50">
                <div class="forecastText">
                  <span class="label labelMax">{{weather.data.list[5].main.temp_max}} °C</span>
                  <span class="label labelMin">{{weather.data.list[2].main.temp_min}} °C</span>
                  <i>{{weather.data.list["5"].weather["0"].description}}</i>
                  <p>
                    {{weather.data.list["5"].wind.speed}} m/s
                    <br> Clouds {{weather.data.list["5"].clouds.all}}%, {{weather.data.list["5"].main.pressure}} hpa
                  </p>
                </div>
            </md-layout>
          </md-layout>
        </md-card-content>
      </md-card>
    </md-layout>
  </md-layout>
</div>

</template>

<script lang="babel">
import api from '../api.js'
import moment from 'moment'
import spanText from '@/components/spanText.vue'
import slotComponent from '@/components/slotComponent.vue'
import refComponent from '@/components/refComponent.vue'
import counter from '@/components/counter.vue'

export default {
  data: () => {
    return {
      message: '',
      total: 0,
      temp: '',
      city: '',
      weather: {
        data: {}
      },
      obj: []
    }
  },
  methods: {
    search () {
      api.forecast({q: this.city + ',BR', units: 'metric'}, (data, err) => {
        this.weather.data = data
        this.temp = data.list[0].main.temp.toString().split('.')[0]
      })
    },
    moment (date) {
      return moment(date)
    },
    date (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    incrementTotal () {
      this.total += 1
    },
    referencia () {
      this.$refs.alert.alertTest()
    }
  },
  filters: {
    moment (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  components: {
    'spanText': spanText,
    'slotComponent': slotComponent,
    'refComponent': refComponent,
    'my-component': () => import('@/components/asyncComponent.vue'),
    'counter': counter
  }
}
</script>
<style lang="css" scoped>
.card-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  margin: 0 0 10px;
}

md-input-container .inputCity {
  width: 100px
}

.weatherNowContainer {
  margin: 0px 0px 0px 100px;
}


.weatherNowTemp {
  padding-top: 10px;
  ;
  width: 200px;
  text-align: left;
}

.weatherNowDesc {
  text-align: left;
}

.weatherNowTableContainer {
  margin: 0px 0px 0px 100px;
}

.weatherNowTable {
  border: solid 1px #e0e0e0;
}

.weatherNowTableCell {
  border-right: solid 1px #e0e0e0;
}

.forecastTitle {
  height: 10px
}

.tableForecastContainer {

}

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

.labelMax {
  background-color: #f0ad4e;
}

.labelMin {
  background-color: #999;
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

.text-danger {
  color: red;
}
</style>
