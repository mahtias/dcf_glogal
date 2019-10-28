
import StructureBudgetaire from "../../pages/parametres_generaux/nature_depense/StructureBudgetaire.vue";
import PlanBudgetaire  from "../../pages/parametres_generaux/nature_depense/PlanBudgetaire.vue";

const BudgetaireRoutesAdoni = [
  

     {
        path:"/strucute-budgetaire",
        name:"StructureBudgetaire",
        component:StructureBudgetaire

     },
     // route type nde financement
     {
        path:"/plan-budgetaire",
        name:"PlanBudgetaire",
        component:PlanBudgetaire
     }
     
]

export default BudgetaireRoutesAdoni;

