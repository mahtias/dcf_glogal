
import Unite from '../../pages/parametres_generaux/parametre_unite/Unite.vue';

import ZoneGeographique from "../../pages/parametres_generaux/parametre_unite/ZoneGeographique"
const ParametreUniteRoutesAdoni = [

   // routes unite 
   {
       path:"/unite",
       name:"Unite",
       component:Unite

       

   },
// zone geographique
   {
       path:"/zone-geographique",
       name:"ZoneGeographique",
       component:ZoneGeographique
   }




]

export default ParametreUniteRoutesAdoni;