import Vue from "vue";
import VueRouter from "vue-router";
import store from '../vuex/store'


import ActeurDepenseRoutes from "./acteur_depense/ActeurDepenseRoutes"

// les routes module unite administrative = type text
import TypeTextRoute from "./unite_administrative/TypeTextRoute";
// les routes module unite administrative = gestion unite administrative
import UniteAdministativeRoute from "./unite_administrative/UniteAdministativeRoute";
// les routes module unite administrative = acte de creation
import ActeCreationRoute from "./unite_administrative/ActeCreationRoute";
// les routes module unite administrative = note service
import NoteServiceRoute from "./unite_administrative/NoteServiceRoute";
// les routes module unite administrative = archivage note service
import ArchivageNoteServiceRoute from "./unite_administrative/ArchivageNoteServiceRoute";
// les routes module unite administrative = liste ua impression
import ListeUniteAdministrativeRoute from "./unite_administrative/ListeUniteAdministrativeRoute";
// les routes module unite administrative = liste type texte
import ListeTypeTexteRoute from "./unite_administrative/ListeTypeTexteRoute";
// les routes module unite administrative = liste note service
import ListeNoteServiceRoute from "./unite_administrative/ListeNoteServiceRoute";
// les routes module unite administrative = liste note service
import ListeActeCreationRoute from "./unite_administrative/ListeActeCreationRoute";
// les routes module unite administrative = tableau de bord
import TableauDeBordRoute from "./unite_administrative/TableauDeBordRoute";
// les routes module unite administrative = ordonner document par ua
import OrdonneDocmentUaRoute from "./unite_administrative/OrdonneDocmentUaRoute";

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
// route suivi mission
import MissionRoutes from './suivi_control/MissionRoutes'

// authentitification 
import AuthRoutes from './auth/AuthRoutes' 


Vue.use(VueRouter);


const regroupementDesRoutes = [
  AuthRoutes,
  ActeurDepenseRoutes,
  TableauDeBordRoute,
  TypeTextRoute,
  UniteAdministativeRoute,
  ActeCreationRoute,
  NoteServiceRoute,
  ArchivageNoteServiceRoute,
  ListeUniteAdministrativeRoute,
  ListeTypeTexteRoute,
  ListeNoteServiceRoute,
  ListeActeCreationRoute,
  OrdonneDocmentUaRoute,
  AdministratifRoutesAdoni,
  SourceFinancementRoutesAdoni,
  parametreUniteRoutesAdoni,
  FonctionnelleRoutesAdoni,
  BudgetaireRoutesAdoni,
  ActiviteRoutesAdoni,
  MissionRoutes
];
const routes = [].concat(...regroupementDesRoutes);


const router = new VueRouter({
  routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
 // console.log(store)
  // check if the route requires authentication and user is not logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.Utilisateurs.isLoggedIn) {
      // redirect to login page
      next({ name: 'Login' })
      return
  }

  // if logged in redirect to dashboard
  if(to.path === '/' && store.state.Utilisateurs.isLoggedIn) {
    // next({ path: 'titre' })
      return
  }

  next()
})

export default router;
