import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
  state: {
    counter: 100
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store

