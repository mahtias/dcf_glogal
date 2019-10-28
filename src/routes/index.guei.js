import Vue from "vue";
import VueRouter from "vue-router";

// les routes de parametres generaux admoinistratifs
import AdministratifRoutes from './parametres_generaux/AdministratifRoutes'
// les routes de parametre generaux source de financements
import SourceFinancementRoutes from './parametres_generaux/SourceFinancementRoutes'

import ActeurDepenseRoutes from "./acteur_depense/ActeurDepenseRoutes"

Vue.use(VueRouter);


const regroupementDesRoutes = [
  AdministratifRoutes,
  SourceFinancementRoutes,
    ActeurDepenseRoutes
];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});

export default router;
