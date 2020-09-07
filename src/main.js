import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./core/services/store";

import "@/core/plugins/global-components";
import "popper.js";
import "tooltip.js";
import "./core/plugins/bootstrap-vue";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
