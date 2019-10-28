import Vue from "vue";
import VueRouter from "vue-router";

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
Vue.use(VueRouter);

const regroupementDesRoutes = [
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
  OrdonneDocmentUaRoute
];
const routes = [].concat(...regroupementDesRoutes);

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
