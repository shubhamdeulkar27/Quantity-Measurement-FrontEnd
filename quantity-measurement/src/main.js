import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import axios from "axios";
import VueRouter from "vue-router";
import Routes from "./router.js";

Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: Routes
});

axios.defaults.baseURL = "https://localhost:44353/api/Quantity";
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
