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

// var housecall = require('housecall');

// var queue = housecall({ concurrency: 2, cooldown: 1000 });

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

import { mapState, mapActions} from "vuex";
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

       ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
  },

  methods: {
       ...mapActions("uniteadministrative", [
       "getAllTypeTextes",
      "getAllUniteAdministrative",
      "getAllArchivageDocument"
    ]),

      ...mapActions('parametreGenerauxFonctionnelle', 
    [ 'getStructureFonctionnelle', 'getPlanFonctionnelle']),

    ...mapActions('parametreGenerauxSourceDeFinancement',['getSourceFinancement',
        'getTypeFinancement'
    ]),
   ...mapActions( 'parametreGenerauxBudgetaire', ['getStructureBudgetaire',
   'getPlanBudgetaire']),
   ...mapActions('parametreGenerauxActivite', [ 'getStructureActivite']),
   ...mapActions('parametreGenerauxProgrammeUnite',['getUnite', 'getZone']),

    ...mapActions('parametreGenerauxAdministratif',
     ['getExercicesBudgetaires', 'getTitres', 
    'getNatureSection', 'getSection', 'getStructureProgramme', 'getPlanProgramme', 
    'getStructureAdministrative', 'getServiceGestionnaire', 'getStructureGeographique',
    'getLocalisationGeographique', 'getChapitre']),

        ...mapActions('personnelUA', ['getTypeSalarie',"getEchelons","getTypeContrat","getNiveauEtude","getFonctions","getTypeActPersonnel","getClasses","getEchelons","getActeur","getGrades","getNbrActeurAcrediteTaux","getActPersonnel","getConges","allActeurDepense"]),

		 ...mapActions('suivi_controle_budgetaire', ['getCategorieMission',
    'getImputation','getMission'])
		
  },

  created(){

      this.getExercicesBudgetaires()
   this.getTitres()
   this.getNatureSection()
   this.getSection()
   this.getStructureProgramme()
   this.getPlanProgramme()
   this.getStructureAdministrative()
   this.getServiceGestionnaire()
   this.getStructureGeographique()
   this.getLocalisationGeographique()
   this.getChapitre()
   this.getStructureFonctionnelle()
   this.getPlanFonctionnelle()
   this.getSourceFinancement()
   this.getTypeFinancement()
   this.getStructureBudgetaire()
   this.getPlanBudgetaire()
    this.getStructureActivite()
    this.getUnite()
    this.getZone()

    
    this.getAllTypeTextes();
    this.getAllUniteAdministrative();
    this.getAllArchivageDocument();

    this.getTypeSalarie()
        this.getTypeActPersonnel()
        this.getFonctions()
        this.getNiveauEtude()
        this.getTypeContrat()
        this.getClasses()
        this.getEchelons()
        this.getGrades()
        this.getActeur()
        this.getNbrActeurAcrediteTaux()
        this.getActPersonnel()
        this.getConges();
        this.allActeurDepense()
		
		 this.getCategorieMission()
      this.getImputation()
      this.getMission()
	
  }

};
</script>
