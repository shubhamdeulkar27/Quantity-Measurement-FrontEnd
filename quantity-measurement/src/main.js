import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import axios from "axios";

Vue.use(VueMaterial);
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  render: h => h(App)
});
