<template lang="html">
<div id="weather" class=''>
  <md-card>
    <md-card-header md-flex-xsmall>
      <div class="md-title">Current weather and forecasts in your city</div>

    </md-card-header>
    <md-card-content class="card-content">
      <md-layout :md-gutter="8">
        <md-layout md-flex-xsmall="100" md-flex-medium="80" md-flex-large="80">
          <md-input-container md-inline>
            <label>Select your city</label>
            <md-input class="inputCity" v-model="city"></md-input>
          </md-input-container>

        </md-layout>
        <md-layout md-align="center" md-flex-xsmall="100" md-flex-medium="20" md-flex-large="20">
          <md-button class="md-raised md-primary" @click.native="search">Search</md-button>
        </md-layout>
      </md-layout>
      <md-layout md-gutter v-if="weather.data.city">
        <md-layout class="red" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="33" md-flex-large="33">
          <div md-row class="weatherNowContainer">
            <h1>Weather in {{weather.data.city.name}}, {{weather.data.city.country}}</h1>
            <div>
              <img :src="'http://openweathermap.org/img/w/' + weather.data.list['0'].weather['0'].icon + '.png'" class="forecastImg">
              <h1 class="weatherNowTemp" v-bind:class="{ active: isActive, 'text-danger': hasError }">{{weather.data.list[0].main.temp}} ° C</h1>
            </div>
            <div>
              <h2 class="weatherNowDesc">{{weather.data.list["0"].weather["0"].description}}</h2>
            </div>
          </div>
          <div class="weatherNowTableContainer">
            <md-table class="weatherNowTable">
              <md-table-body>
                <md-table-row>
                  <md-table-cell class="weatherNowTableCell">Wind</md-table-cell>
                  <md-table-cell>Velocidade de {{weather.data.list["0"].wind.speed}} m/s</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="weatherNowTableCell">Cloudiness</md-table-cell>
                  <md-table-cell>{{weather.data.list["0"].weather["0"].description}}</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="weatherNowTableCell">Pressure</md-table-cell>
                  <md-table-cell>{{weather.data.list["0"].main.pressure}} hpa</md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="weatherNowTableCell">Humidity</md-table-cell>
                  <md-table-cell>{{weather.data.list["0"].main.humidity}}%</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </md-layout>

        <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="67" md-flex-large="67">
          <div>
            <h2 class="forecastTitle">5 day weather forecast</h2>
          </div>

          <div class="tableForecastContainer">
            <md-table class="forecastTable">
              <md-table-body>
                <md-table-row>
                  <md-table-cell class="forecastTableCellRight">
                    <div>
                      <p class="forecastTableCellDate">{{moment(weather.data.list[5].dt_txt).format('ddd DD MMM')}}</p>
                      <img :src="'http://openweathermap.org/img/w/' + weather.data.list['5'].weather['0'].icon + '.png'" class="forecastImg">
                    </div>
                  </md-table-cell>
                  <md-table-cell class="forecastTableCellLeft">
                    <div class="forecastText">
                      <span class="label labelMax">{{weather.data.list[5].main.temp_max}} °C</span>
                      <span class="label labelMin">{{weather.data.list[2].main.temp_min}} °C</span>
                      <i>{{weather.data.list["5"].weather["0"].description}}</i>
                      <p>
                        {{weather.data.list["5"].wind.speed}} m/s
                        <br> Clouds {{weather.data.list["5"].clouds.all}}%, {{weather.data.list["5"].main.pressure}} hpa
                      </p>
                    </div>
                  </md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="forecastTableCellRight">
                    <div>
                      <p class="forecastTableCellDate">{{moment(weather.data.list[13].dt_txt).format('ddd DD MMM')}}</p>
                      <img :src="'http://openweathermap.org/img/w/' + weather.data.list['13'].weather['0'].icon + '.png'" class="forecastImg">
                    </div>
                  </md-table-cell>
                  <md-table-cell class="forecastTableCellLeft">
                    <div class="forecastText">
                      <span class="label labelMax">{{weather.data.list[13].main.temp_max}} °C</span>
                      <span class="label labelMin">{{weather.data.list[10].main.temp_min}} °C</span>
                      <i>{{weather.data.list["13"].weather["0"].description}}</i>
                      <p>
                        {{weather.data.list["13"].wind.speed}} m/s
                        <br> Clouds {{weather.data.list["13"].clouds.all}}%, {{weather.data.list["13"].main.pressure}} hpa
                      </p>
                    </div>
                  </md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="forecastTableCellRight">
                    <div>
                      <p class="forecastTableCellDate">{{moment(weather.data.list[21].dt_txt).format('ddd DD MMM')}}</p>
                      <img :src="'http://openweathermap.org/img/w/' + weather.data.list['21'].weather['0'].icon + '.png'" class="forecastImg">
                    </div>
                  </md-table-cell>
                  <md-table-cell class="forecastTableCellLeft">
                    <div class="forecastText">
                      <span class="label labelMax">{{weather.data.list[21].main.temp_max}} °C</span>
                      <span class="label labelMin">{{weather.data.list[18].main.temp_min}} °C</span>
                      <i>{{weather.data.list["21"].weather["0"].description}}</i>
                      <p>
                        {{weather.data.list["21"].wind.speed}} m/s
                        <br> Clouds {{weather.data.list["21"].clouds.all}}%, {{weather.data.list["21"].main.pressure}} hpa
                      </p>
                    </div>
                  </md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="forecastTableCellRight">
                    <div>
                      <p class="forecastTableCellDate">{{moment(weather.data.list[29].dt_txt).format('ddd DD MMM')}}</p>
                      <img :src="'http://openweathermap.org/img/w/' + weather.data.list['29'].weather['0'].icon + '.png'" class="forecastImg">
                    </div>
                  </md-table-cell>
                  <md-table-cell class="forecastTableCellLeft">
                    <div class="forecastText">
                      <span class="label labelMax">{{weather.data.list[29].main.temp_max}} °C</span>
                      <span class="label labelMin">{{weather.data.list[26].main.temp_min}} °C</span>
                      <i>{{weather.data.list["29"].weather["0"].description}}</i>
                      <p>
                        {{weather.data.list["29"].wind.speed}} m/s
                        <br> Clouds {{weather.data.list["29"].clouds.all}}%, {{weather.data.list["29"].main.pressure}} hpa
                      </p>
                    </div>
                  </md-table-cell>
                </md-table-row>
                <md-table-row>
                  <md-table-cell class="forecastTableCellRight">
                    <div>
                      <p class="forecastTableCellDate">{{moment(weather.data.list[37].dt_txt).format('ddd DD MMM')}}</p>
                      <img :src="'http://openweathermap.org/img/w/' + weather.data.list['37'].weather['0'].icon + '.png'" class="forecastImg">
                    </div>
                  </md-table-cell>
                  <md-table-cell class="forecastTableCellLeft">
                    <div class="forecastText">
                      <span class="label labelMax">{{weather.data.list[37].main.temp_max}} °C</span>
                      <span class="label labelMin">{{weather.data.list[33].main.temp_min}} °C</span>
                      <i>{{weather.data.list["37"].weather["0"].description}}</i>
                      <p>
                        {{weather.data.list["37"].wind.speed}} m/s
                        <br> Clouds {{weather.data.list["37"].clouds.all}}%, {{weather.data.list["37"].main.pressure}} hpa
                      </p>
                    </div>
                  </md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </md-layout>
      </md-layout>
    </md-card-content>
  </md-card>
  <md-card>
    <md-input-container md-inline style="width: 200px; margin-left: 550px">
      <label>Select your message</label>
      <md-input v-model="message"></md-input>
    </md-input-container>
    <!--passando parametro para o component, direto e via bind-->
    <!--<spanText message='spannnText' :my-message='message'></spanText>-->

    <p>{{ total }}</p>
    <spanText @increment="incrementTotal"></spanText>
    <spanText @increment="incrementTotal"></spanText>
    <slotComponent>
      <h2 slot="header">Here might be a page title</h2>

      <p>This is some original content</p>
      <p>This is some more original content</p>

      <h5 slot="footer">Here's some contact info</h5>
    </slotComponent>
  </md-card>
</div>

</template>

<script lang="babel">
import api from '../api.js'
import moment from 'moment'
import spanText from '@/components/spanText.vue'
import slotComponent from '@/components/slotComponent.vue'

export default {
  data: () => {
    return {
      message: '',
      total: 0,
      isActive: false,
      hasError: true,
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
        console.log(this)
        this.weather.data = data
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
    }
  },
  filters: {
    moment (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  components: {
    'spanText': spanText,
    'slotComponent': slotComponent
  }
}
</script>
<style lang="css" scoped>
.card-holder {
  display: flex;
  align-items: center;
  justify-content: center;
}

p{
	    margin: 0 0 10px;
}

md-input-container .inputCity{
	width: 100px
}

.weatherNowContainer{
	margin: 0px 0px 0px 100px;
}


.weatherNowTemp{
	padding-top: 10px;; width: 200px; text-align: left;
}

.weatherNowDesc{
	text-align: left;
}

.weatherNowTableContainer{
	margin: 0px 0px 0px 100px;
}

.weatherNowTable{
	border: solid 1px #e0e0e0;
}

.weatherNowTableCell{
	border-right: solid 1px #e0e0e0;
}

.forecastTitle{
	height: 10px
}

.tableForecastContainer{
	width: 800px
}

.forecastTable{
	width: 600px; border: solid 1px #e0e0e0;
}

.forecastTableCellRight{
	width: 250px
}

.forecastTableCellDate{
	width: 100px;float:left;padding-top: 15px; font-size: 16px
}

.forecastTableCellLeft{
	padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #ddd;
}

.forecastText{
	text-align: left
}

.forecastImg{
	float: left
}

.labelMax{
	background-color: #f0ad4e;
}

.labelMin{
	background-color: #999;
}

.label{
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

.text-danger{
  color: red;
}
</style>
