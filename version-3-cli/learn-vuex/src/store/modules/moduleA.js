export default {
  state: {
    name: "module-a"
  },
  mutations: {
    rename(state) {
      console.log("b")
      state.name = "module-aa"
    }
  },
  actions: {},
  getters: {},
  modules: {
    b: {
      state: {
        name: "module-b"
      },
      mutations: {},
      actions: {},
      getters: {},
      modules: {}
    }
  }
}

