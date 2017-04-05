import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Weather from '@/page/Weather.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    }
  ]
})
