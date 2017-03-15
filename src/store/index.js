import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    msg: 'Hello World'
  },
  mutations: {
    setMsg: (state, msg) => {
      state.msg = msg
    }
  }
})

export default store
