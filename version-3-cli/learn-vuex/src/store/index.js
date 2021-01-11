import Vue from 'vue'
import VueX from 'vuex'

import moduleA from "./modules/moduleA"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(VueX)

const state = {
  counter: 100
}

const store = new VueX.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store

