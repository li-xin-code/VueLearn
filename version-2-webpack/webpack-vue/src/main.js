import "./css/normal.css";
import "./css/special.less";
import Vue from "vue";
import App from "./vue/App";

new Vue({
  el: "#app",
  template:"<App/>",
  components: {
    App,
  }
});