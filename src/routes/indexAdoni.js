import Vue from "vue";
import VueRouter from "vue-router";

// les routes de parametres generaux admoinistratifs
import AdministratifRoutesAdoni from './parametres_generaux/AdministratifRoutesAdoni'
// les routes de parametre generaux source de financements
import SourceFinancementRoutesAdoni from './parametres_generaux/SourceFinancementRoutesAdoni'

// les routes de parametre generaux unite
import parametreUniteRoutesAdoni from './parametres_generaux/ParametreUniteRoutesAdoni'
// routes fonctionnelle
import FonctionnelleRoutesAdoni from './parametres_generaux/FonctionnelleRoutesAdoni'
// route budgetaire
import BudgetaireRoutesAdoni from './parametres_generaux/BudgetaireRoutesAdoni'
// route activite
import ActiviteRoutesAdoni from './parametres_generaux/ActiviteRoutesAdoni'

Vue.use(VueRouter);


const regroupementDesRoutes = [
  AdministratifRoutesAdoni,
  SourceFinancementRoutesAdoni,
  parametreUniteRoutesAdoni,
  FonctionnelleRoutesAdoni,
  BudgetaireRoutesAdoni,
  ActiviteRoutesAdoni
];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});

export default router;
