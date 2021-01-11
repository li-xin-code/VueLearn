export default {
  refresh(context, val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("refresh", val)
        resolve("ok")
      }, 1000)
    })
  }
}
