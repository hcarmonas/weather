import api from '../../api.js'
import moment from 'moment'

export default {
  name: 'weather',
  data: () => {
    return {
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
      var self = this
      api.forecast({q: self.city + ',BR', units: 'metric'}, function (data, err) {
        console.log(self)
        self.weather.data = data
        console.log(self.weather.data)
      })
    },
    moment (date) {
      return moment(date)
    },
    date (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  filters: {
    moment (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}


