<template lang="html">
<div id="weather">
  <md-layout>
    <md-layout md-align="center" md-flex="100" md-flex-small="100" style="padding: 5px;">
      <md-card style="width: 400px;">
        <md-card-content>
          <inputSearch v-on:search="search"></inputSearch>
        </md-card-content>
      </md-card>
    </md-layout>
    <md-layout v-if="weather.city">
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="30" md-flex-large="30" md-flex-xlarge="30">
        <md-card style="width: 100%; height:200px; background-color: orange; margin: 5px;">
          <md-card-header>
            <md-layout md-flex="100">
              <span class="md-display-1" style="color: white">{{weather.city.name}}</span>
            </md-layout>
            <md-layout md-flex="100">
              <span style="font-size: 15px; color: white; padding-left: 2px">{{weather.description}}</span>
            </md-layout>
          </md-card-header>
          <md-card-content>
            <md-layout>
              <md-layout md-align="center" md-flex="30">
                <img style="width: 100px; height: 100px; margin-bottom: -15px; margin-top: -15px;" :src="'http://openweathermap.org/img/w/' + weather.icon + '.png'" class="forecastImg">
              </md-layout>
              <md-layout md-align="center" md-flex="70">
                <span style="font-size: 70px; color: white; padding-top: 15px;">{{temp}}°C</span>
              </md-layout>
            </md-layout>
          </md-card-content>
        </md-card >
        <md-card style="width: 100%; height: 300px; margin: 5px;">
          <md-card-header>
            <span class="md-title">Details</span>
          </md-card-header>
          <md-card-content>
            <md-layout>
              <md-layout md-align="center" md-flex="30">
                <img style="width: 50px; height: 50px;" src="../assets/wind.png">
              </md-layout>
              <md-layout md-align="right" md-flex="70">
                <span class="md-body-2" style="padding-top: 15px">Velocidade de {{weather.windSpeed}} m/s</span>
              </md-layout>
            </md-layout>
            <md-layout>
              <md-layout md-align="center" md-flex="30">
                <img style="width: 50px; height: 50px;" src="../assets/clouds.png">
              </md-layout>
              <md-layout md-align="right" md-flex="70">
                <span class="md-body-2" style="padding-top: 15px">{{weather.description}}</span>
              </md-layout>
            </md-layout>
            <md-layout>
              <md-layout md-align="center" md-flex="30">
                <img style="width: 50px; height: 50px;" src="../assets/pressure.png">
              </md-layout>
              <md-layout md-align="right" md-flex="70">
                <span class="md-body-2" style="padding-top: 15px">{{weather.pressure}} hpa</span>
              </md-layout>
            </md-layout>
            <md-layout>
              <md-layout md-align="center" md-flex="30">
                <img style="width: 50px; height: 50px;" src="../assets/umbrella.png">
              </md-layout>
              <md-layout md-align="right" md-flex="70">
                <span class="md-body-2" style="padding-top: 15px">{{weather.humidity}}%</span>
              </md-layout>
            </md-layout>
          </md-card-content>
        </md-card>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="70" md-flex-large="70" md-flex-xlarge="70" >
        <md-card class="forecast-card" style="margin:5px">
          <md-card-header>
            <span class="md-title">5 day weather forecast</span>
          </md-card-header>
          <md-card-content>
            <md-layout>
              <md-layout md-flex-xsmall="50" md-flex-small="20" md-flex-medium="33" md-flex-large="20" md-flex-xlarge="20" v-for="data in weather.forecast">
                <forecast :data="data"></forecast>
              </md-layout>
            </md-layout>
          </md-card-content>
        </md-card>
      </md-layout>
    </md-layout>
  </md-layout>
</div>

</template>

<script lang="babel">
import api from '../api.js'
import forecast from '@/components/forecast.component.vue'
import inputSearch from '@/components/inputSearch.component.vue'

export default {
  data: () => {
    return {
      message: '',
      total: 0,
      temp: '',
      weather: {},
      obj: []
    }
  },
  methods: {
    search (city) {
      api.forecast({q: city + ',BR', units: 'metric'}, (data, err) => {
        this.weather = {
          city: data.city,
          description: data.list[0].weather[0].description,
          icon: data.list[0].weather[0].icon,
          windSpeed: data.list[0].wind.speed,
          pressure: data.list[0].main.pressure,
          humidity: data.list[0].main.humidity,
          forecast: [
            {
              icon: data.list[5].weather[0].icon,
              date: data.list[5].dt_txt,
              max: data.list[5].main.temp_max,
              min: data.list[2].main.temp_min,
              description: data.list[5].weather[0].description,
              wind: data.list[5].wind.speed,
              pressure: data.list[5].main.pressure,
              clouds: data.list[5].clouds.all
            },
            {
              icon: data.list[21].weather[0].icon,
              date: data.list[21].dt_txt,
              max: data.list[21].main.temp_max,
              min: data.list[18].main.temp_min,
              description: data.list[21].weather[0].description,
              wind: data.list[21].wind.speed,
              pressure: data.list[21].main.pressure,
              clouds: data.list[21].clouds.all
            },
            {
              icon: data.list[29].weather[0].icon,
              date: data.list[29].dt_txt,
              max: data.list[29].main.temp_max,
              min: data.list[26].main.temp_min,
              description: data.list[29].weather[0].description,
              wind: data.list[29].wind.speed,
              pressure: data.list[29].main.pressure,
              clouds: data.list[29].clouds.all
            },
            {
              icon: data.list[34].weather[0].icon,
              date: data.list[34].dt_txt,
              max: data.list[34].main.temp_max,
              min: data.list[33].main.temp_min,
              description: data.list[34].weather[0].description,
              wind: data.list[34].wind.speed,
              pressure: data.list[34].main.pressure,
              clouds: data.list[34].clouds.all
            },
            {
              icon: data.list[5].weather[0].icon,
              date: data.list[5].dt_txt,
              max: data.list[5].main.temp_max,
              min: data.list[2].main.temp_min,
              description: data.list[5].weather[0].description,
              wind: data.list[5].wind.speed,
              pressure: data.list[5].main.pressure,
              clouds: data.list[5].clouds.all
            }
          ]
        }
        this.temp = data.list[0].main.temp.toString().split('.')[0]
      })
    }
  },
  components: {
    'forecast': forecast,
    'inputSearch': inputSearch
  }
}
</script>

<style lang="css" scoped>
.forecast-card {
  width: 100%;
}

@media (min-width: 1266px) {

  .forecast-card {
    height: 280px;
  }
}
</style>
