<template>
  <div>
    <!--start-top-serch-->
    <MenuParamG v-if="active_el == 11"></MenuParamG>
    <MenuUA v-if="active_el == 1"></MenuUA>
    <MenuActeurDepense v-if="active_el == 2"></MenuActeurDepense>
    <MenuPlanification v-if="active_el ==3"></MenuPlanification>
    <MenuSuivi v-if="active_el == 4"></MenuSuivi>
    <MenuBudgetControl v-if="active_el ==13"></MenuBudgetControl>
    <MenuCatographie v-if="active_el ==5"></MenuCatographie>
    <MenuControlAxe v-if="active_el ==6"></MenuControlAxe>
    <MenuOperationRapport v-if="active_el ==7"></MenuOperationRapport>
    <MenuOpRisque v-if="active_el ==8"></MenuOpRisque>
    <MenuDefaut v-if="active_el ==0"></MenuDefaut>
    <Search></Search>

    <!--close-top-serch-->
  </div>
</template>

<script>
import MenuParamG from "../components/navs/menuParametreG";
import MenuUA from "../components/navs/menuUA";
import MenuActeurDepense from "../components/navs/MenuActeurDepense";
import MenuPlanification from "../components/navs/MenuPlanification";
import MenuSuivi from "../components/navs/MenuSuivi";
import MenuBudgetControl from "../components/navs/MenuBudgetControl";
import MenuCatographie from "../components/navs/MenuCatographie";
import MenuControlAxe from "../components/navs/MenuControlAxe";
import MenuOperationRapport from "../components/navs/MenuOperationRapport.vue";
import MenuOpRisque from "../components/navs/MenuOpRisque.vue";
import MenuDefaut from "../components/navs/MenuDefaut.vue";
import Search from "../components/Search";

import { mapState, mapActions } from "vuex";
export default {
  components: {
    MenuParamG,
    MenuUA,
    MenuActeurDepense,
    MenuPlanification,
    MenuSuivi,
    MenuBudgetControl,
    MenuCatographie,
    MenuControlAxe,
    MenuOperationRapport,
    MenuOpRisque,
    MenuDefaut,
    Search
  },

  computed: {
    ...mapState("parametrageMenu", {
      active_el: state => state.active_el
    })
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllUniteAdministrative",
      "getAllNoteService",
      "getAllNombreNoteServ",
      "getAllArchivageNoteService",
      "getAllActeCreation",
      "getAllRechercheDocua",
      "getAllNombreActeCreation",
      "getAllNombreua",
      "getAllNombreArchivage",
      "getAllNombreTypeText"
    ])
  },
  created() {
    this.getAllTypeTextes();
    this.getAllNombreTypeText();
    this.getAllUniteAdministrative();
    this.getAllNombreua();
    this.getAllNoteService();
    this.getAllNombreNoteServ();
    this.getAllArchivageNoteService();
    this.getAllNombreArchivage();
    this.getAllActeCreation();
    this.getAllNombreActeCreation();
    this.getAllRechercheDocua();
    
    
    
    
  }
};
</script>
