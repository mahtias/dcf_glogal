
import ExerciceBudgetaire from "../../pages/parametres_generaux/administratifs/ExerciceBudgetaire.vue";
import Titre from "../../pages/parametres_generaux/administratifs/Titre.vue";
import NatureSection from "../../pages/parametres_generaux/administratifs/NatureSection.vue";
import Section from "../../pages/parametres_generaux/administratifs/Section.vue";
import StructureProgramme from "../../pages/parametres_generaux/administratifs/StructureProgramme.vue";
import PlanProgramme from "../../pages/parametres_generaux/administratifs/PlanProgramme.vue";
import StructureAdministrative from "../../pages/parametres_generaux/administratifs/StructureAdministrative.vue";
import ServiceGestionnaire from "../../pages/parametres_generaux/administratifs/ServiceGestionnaire.vue";
import Chapitre from "../../pages/parametres_generaux/administratifs/Chapitre.vue";
import GrandeNature from "../../pages/parametres_generaux/administratifs/GrandeNature.vue";
import StructureGeographique from "../../pages/parametres_generaux/administratifs/StructureGeographique.vue";
import LocalisationGeographique from "../../pages/parametres_generaux/administratifs/LocalisationGeographique.vue";

const AdministratifRoutesAdoni = [
    {
      // route pour le titre
        path:"/titre",
       name:"Titre",
       component: Titre
     },
     // chemin de la structure programme
     {
       path:"/structure-programme",
       name:"StructureProgramme",
       component:StructureProgramme
     },
     // chemin du plan programme
     {
       path:"/plan-programme",
       name:"PlanProgramme",
       component:PlanProgramme
     },

     {
      // route pour l'exercice budgetaire 
      path:"/exercice-budgetaire",
        name:"ExerciceBudgetaire",
        component:ExerciceBudgetaire

     },
     // route pour la nature de section
     {
       path:"/nature-section",
       name:"NatureSection",
       component:NatureSection
     },
     // route section
     {
       path:"/section",
       name:"Section",
       component:Section
     },
     // route structure structure administrative
     {
       path:"/structure-administrative",
       name:"StructureAdministrative",
       component:StructureAdministrative
     },
     // route service gestionnaire
     {
    path:"/srevice-gestionnaire",
    name:"ServiceGestionnaire",
    component:ServiceGestionnaire
     },
     // route chapitre
     {
       path:"/chapitre",
       name:"Chapitre",
       component:Chapitre
     },
     // route grande nature
     {
       path:"/grande-nature",
       name:"GrandeNature",
       component:GrandeNature
     },
     // route structure geographie
     {
       path:"/structure-geographique",
       name:"SrtuctureGeographique",
       component:StructureGeographique
     },
     // route localisation geographique
     {
       path:"/localisation-georaphique",
       name:"LocalisationGeographique",
       component:LocalisationGeographique
     }
]

export default AdministratifRoutesAdoni;
