export default {
  doubleCounter(state){
    return state.counter * 2
  },
  mulCounter(state){
    return mul => state.counter * mul
  }
}
