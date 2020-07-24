import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"


import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
import { WindowInstaller } from '@progress/kendo-window-vue-wrapper'

Vue.component(Calendar.name, Calendar)
Vue.use(WindowInstaller)

Vue.config.productionTip = false;

import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

import i18n from "./core/plugins/vue-i18n";
import vuetify from "./core/plugins/vuetify";
import "./core/plugins/portal-vue";
import "./core/plugins/bootstrap-vue";
import "./core/plugins/perfect-scrollbar";
import "./core/plugins/highlight-js";
import "./core/plugins/inline-svg";
import "./core/plugins/apexcharts";
import "./core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
})


// new Vue({
//   router,
//   store,
//   i18n,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");
