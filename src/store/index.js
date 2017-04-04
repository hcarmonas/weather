import Vuex from 'vuex'
import weaher from './weather'

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
    weaher
  }
})

export default store
