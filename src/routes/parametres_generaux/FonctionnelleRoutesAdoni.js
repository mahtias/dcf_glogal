
import StructureFonctionnelle from "../../pages/parametres_generaux/fonctionnelle/StructureFonctionnelle.vue";
import PlanFonctionnel  from "../../pages/parametres_generaux/fonctionnelle/PlanFonctionnel.vue";

const FonctionnelleRoutesAdoni = [
  

     {
        path:"/strucute-fonctionnelle",
        name:"StructureFonctionnelle",
        component:StructureFonctionnelle

     },
     // route type nde financement
     {
        path:"/plan-fonctionnel",
        name:"PlanFonctionnel",
        component:PlanFonctionnel
     }
     
]

export default FonctionnelleRoutesAdoni;

