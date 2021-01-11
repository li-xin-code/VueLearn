import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios.defaults.baseURL = ""
axios.defaults.timeout = 5000
axios.defaults.transformRequest = () => {}
axios.defaults.transformResponse = () => {}

axios({
  baseUrl: "",
  timeout: 5,
  url: "",
  method: '',
  params: {},
}).then(res => console.log(res))
