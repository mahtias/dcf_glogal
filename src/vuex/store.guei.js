import Vue from "vue";
import Vuex from "vuex";

import ModuleParametrageMenu from './modules/parametrage_menu/index'

import ModuleParametreGeneraux from './modules/parametres_generaux'
import ModulePersonnelUniteAdmin from "./modules/guei/personnel_ua/index"
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      parametrageMenu: ModuleParametrageMenu,
      parametreGeneraux: ModuleParametreGeneraux,
      personnelUA:ModulePersonnelUniteAdmin
    }
  })
