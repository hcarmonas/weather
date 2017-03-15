import Bluebird from 'bluebird'
import 'isomorphic-fetch'

global.Promise = Bluebird

import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueMaterial)

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'vue-material/dist/vue-material.css'
