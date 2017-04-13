import Vuex from 'vuex'
import weather from './weather'
import counter from './counter'

export const store = new Vuex.Store({
  state: {
    msg: 'Hello World'
  },
  mutations: {
    setMsg: (state, msg) => {
      state.msg = msg
    }
  },
  modules: {
    weather,
    counter
  }
})

export default store
