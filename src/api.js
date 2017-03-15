const API_KEY = process.env.API_KEY
const BASE_URL = 'http://api.openweathermap.org/data/2.5/'

function queryParams (params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')
}

export class OpenWeatherApi {
  constructor ({apiKey = API_KEY, baseUrl = BASE_URL} = {}) {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
  }

  request (url, data, cb) {
    let query = Object.assign({}, data, {
      APPID: this.apiKey
    })
    let promise = fetch(url + '?' + queryParams(query), {
      method: 'GET'
    })

    if (cb) {
      promise
        .then(resp => resp.json())
        .then(cb)
        .catch(err => cb(null, err))
    } else {
      return promise.then(resp => resp.json())
    }
  }

  now (data, cb) {
    return this.request(this.baseUrl + 'weather', data, cb)
  }

  forecast (data, cb) {
    return this.request(this.baseUrl + 'forecast', data, cb)
  }
}

export default new OpenWeatherApi()
