import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";
import rayon from "./modules/define/rayon"

Vue.use(Vuex);

// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     // set './app.js' => 'app'
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// }, {})



export default new Vuex.Store({
    modules: {
        auth,
        htmlClass,
        config,
        breadcrumbs,
        rayon

    }
});

// const store = new Vuex.Store({
//     modules,
//     getters
// })
//
// export default store



// import Vue from 'vue'
// import Vuex from 'vuex'
// import getters from './getter'
// Vue.use(Vuex)
//
// import auth from "./auth.module";
// import htmlClass from "./htmlclass.module";
// import config from "./config.module";
// import breadcrumbs from "./breadcrumbs.module";
//
//
// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     // set './app.js' => 'app'
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// }, {})
//
// const store = new Vuex.Store({
//     modules,
//     getters,
//     auth,
//     htmlClass,
//     config,
//     breadcrumbs
// })
//
// export default store