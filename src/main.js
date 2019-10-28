//require('./bootstrap');


import Vue from 'vue'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


import Default from '../src/layouts/Default.vue'
import NoSidebar from '../src/layouts/NoSidebar.vue'

import JsonExcel from 'vue-json-excel'
 
Vue.component('downloadExcel', JsonExcel)


 import VuejsDialog from 'vuejs-dialog'; 
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
 
// Vue.use(VuejsDialog);
Vue.use(VuejsDialog, {
  html: true,
  loader: true,
  okText: 'Continuer',
  cancelText: 'Annuler',
  animation: 'bounce'
});

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue'
import router from './routes'
import store from './vuex/store'
//import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
var Jquery = require('jquery')

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$ = Jquery

 Vue.component('default-layout', Default)
 Vue.component('no-sidebar-layout', NoSidebar)

import fab from 'vue-fab'
Vue.component('fab', fab)

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
store.$app = app;
