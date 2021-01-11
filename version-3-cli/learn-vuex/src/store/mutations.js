export default {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  ['refresh'](state, val) {
    state.counter = val
  },
  rename(state) {
    console.log("a")
  }
}
