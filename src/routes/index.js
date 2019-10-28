import Vue from "vue";
import VueRouter from "vue-router";
import store from "../vuex/store";

import ActeurDepenseRoutes from "./acteur_depense/ActeurDepenseRoutes";

// les routes module unite administrative = type text
import TypeTextRoute from "./unite_administrative/TypeTextRoute";
// les routes module unite administrative = gestion unite administrative
import UniteAdministativeRoute from "./unite_administrative/UniteAdministativeRoute";
// les routes module unite administrative = archivage note service
import ArchivageDocumentRoute from "./unite_administrative/ArchivageDocumentRoute";
// les routes module unite administrative = liste ua impression
import ListeUniteAdministrativeRoute from "./unite_administrative/ListeUniteAdministrativeRoute";
// les routes module unite administrative = liste type texte
import ListeTypeTexteRoute from "./unite_administrative/ListeTypeTexteRoute";
// les routes module unite administrative = tableau de bord
import TableauDeBordRoute from "./unite_administrative/TableauDeBordRoute";
// les routes module unite administrative = ordonner document par ua
import OrdonneDocmentUaRoute from "./unite_administrative/OrdonneDocmentUaRoute";

// les routes de parametres generaux admoinistratifs
import AdministratifRoutesAdoni from "./parametres_generaux/AdministratifRoutesAdoni";
// les routes de parametre generaux source de financements
import SourceFinancementRoutesAdoni from "./parametres_generaux/SourceFinancementRoutesAdoni";

// les routes de parametre generaux unite
import parametreUniteRoutesAdoni from "./parametres_generaux/ParametreUniteRoutesAdoni";
// routes fonctionnelle
import FonctionnelleRoutesAdoni from "./parametres_generaux/FonctionnelleRoutesAdoni";
// route budgetaire
import BudgetaireRoutesAdoni from "./parametres_generaux/BudgetaireRoutesAdoni";
// route activite
import ActiviteRoutesAdoni from "./parametres_generaux/ActiviteRoutesAdoni";
// route suivi mission
import MissionRoutes from './suivi_control/MissionRoutes';

// routes du tableau de bord suivi mission
import IndicateurRoutes from './suivi_control/IndicateurRoutes';

// authentitification
import AuthRoutes from "./auth/AuthRoutes";

Vue.use(VueRouter);

const regroupementDesRoutes = [
  AuthRoutes,
  ActeurDepenseRoutes,
  TableauDeBordRoute,
  TypeTextRoute,
  UniteAdministativeRoute,
  ArchivageDocumentRoute,
  ListeUniteAdministrativeRoute,
  ListeTypeTexteRoute,
  OrdonneDocmentUaRoute,
  AdministratifRoutesAdoni,
  SourceFinancementRoutesAdoni,
  parametreUniteRoutesAdoni,
  FonctionnelleRoutesAdoni,
  BudgetaireRoutesAdoni,
  ActiviteRoutesAdoni,
MissionRoutes,
IndicateurRoutes
];
const routes = [].concat(...regroupementDesRoutes);

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  // console.log(store)
  // check if the route requires authentication and user is not logged in
  if (
    to.matched.some(route => route.meta.requiresAuth) &&
    !store.state.Utilisateurs.isLoggedIn
  ) {
    // redirect to login page
    next({ name: "Login" });
    return;
  }

  // if logged in redirect to dashboard
  if (to.path === "/" && store.state.Utilisateurs.isLoggedIn) {
    // next({ path: 'titre' })
    return;
  }

  next();
});

export default router;
