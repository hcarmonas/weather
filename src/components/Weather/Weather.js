import api from '../../api.js'

export default {
  name: 'weather',
  data: function () {
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
    search: function () {
      var self = this
      api.forecast({q: self.city + ',BR', units: 'metric'}, function (data, err) {
        self.weather.data = data
        console.log(self.weather.data)
      })
    },
    moment: function (date) {
      return moment(date)
    },
    date: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}

