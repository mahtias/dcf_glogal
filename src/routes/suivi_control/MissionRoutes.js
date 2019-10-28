import CategorieMission from '../../pages/suivi_control_budgetaires/suivi_mission/CategorieMission.vue'
import Imputation from '../../pages/suivi_control_budgetaires/suivi_mission/Imputation'
import Mission from '../../pages/suivi_control_budgetaires/suivi_mission/Mission'
import AjouterMission from '../../pages/suivi_control_budgetaires/suivi_mission/AjouterMission'
import ModifierMission from '../../pages/suivi_control_budgetaires/suivi_mission/ModifierMission'
import MissionDetaill from '../../pages/suivi_control_budgetaires/suivi_mission/MissionDetaill.vue'
//import DureeMoyen from '../../pages/suivi_control_budgetaires/suivi_mission/DureeMoyen.vue'
//import MontantTotal from '../../pages/suivi_control_budgetaires/suivi_mission/MontantTotal.vue'
import DetailleMission from '../../pages/suivi_control_budgetaires/suivi_mission/DetailleMission.vue'
const MissionRoutes = [
  
// route categorie mission
     {
        path:"/categorie-mission",
        name:"CategorieMission",
        component:CategorieMission

     },
     // route pour les durees moyennes de mission
   //   {
   //     path:"/duree-mission",
   //     name:"DureeMoyen",
   //     component:DureeMoyen
   //   },

     // route imputation
     {
        path:"/imputation-budget",
        name:"Imputation",
        component:Imputation
     },
  // route mission
  {
     path:"/mission",
     name:"Mission",
     component:Mission
  },
     // creation de mission
     {
      path:"/creation-de-mission",
      name:"AjouterMission",
      component:AjouterMission
   },
     // detail d'une mission @param id_mission
     {
      path:"/detail-de-mission/:id_mission",
      name:"DetailleMission",
      component:DetailleMission
   },

   // modification de mission
   {
      path:"/modifier-mission/:id_mission",
      name:"ModifierMission",
      component:ModifierMission
   },
   // route pour detaille mission
   {
      path:"detail-mission",
      name:"MissionDetaill",
      component:MissionDetaill
   },
   // route pour le montant total
   // {
   //    path:"/montant-mission",
   //    name:"MontantTotal",
   //    component:MontantTotal
   // }
     
]

export default MissionRoutes;