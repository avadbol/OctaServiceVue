import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./core/services/store";
import VueDirectiveMask from 'vue-directive-mask'
Vue.use(VueDirectiveMask)
Vue.config.productionTip = false;
import "popper.js";
import "tooltip.js";
import "./core/plugins/bootstrap-vue";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
