import Vue from "vue";
import Vuex from "vuex";


import Moduleuniteadministrative from "./modules/fabrice/uniteadministrative/index";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    
    uniteadministrative: Moduleuniteadministrative
  }
});
