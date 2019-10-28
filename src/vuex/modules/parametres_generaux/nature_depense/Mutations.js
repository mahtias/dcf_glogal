const GET_STRUCTURE_BUDGETAIRE = (state , tableau_structure_budgetaire) => {

    state.structures_budgetaires = tableau_structure_budgetaire
}

//  ajouter structure budgetaire
const AJOUTER_STRUCTURE_BUDGETAIRE = (state , nouveuaObjet) => {
    state.structures_budgetaires.unshift(nouveuaObjet)
}
// modifier structure budgetaire 
const MODIFIER_STRUCTURE_BUDGETAIRE = (state , objetModifie) => {

    state.structures_budgetaires = state.structures_budgetaires.map( budgetaire => {

    if(budgetaire.id == objetModifie.id){
        budgetaire = {...objetModifie}
    }
    return budgetaire
    })
}
// supprimer structure budgetaire
const SUPPRIMER_STRUCTURE_BUDGETAIRE = (state , id) =>{

    state.structures_budgetaires = state.structures_budgetaires.filter( budgetaire => budgetaire.id != id)
}



// get all plan budgetaire
const GET_PLAN_BUDGETAIRE = (state , tableua_plan_budgetaire) => {

    state.plans_budgetaires = tableua_plan_budgetaire
}

//  ajouter plan budgetaire
const AJOUTER_PLAN_BUDGETAIRE = (state , nouveuaObjet) => {
    state.plans_budgetaires.unshift(nouveuaObjet)
}
// modifier plan budgetaire 
const MODIFIER_PLAN_BUDGETAIRE = (state , objetModifie) => {

    state.plans_budgetaires = state.plans_budgetaires.map( budgetaire => {

    if(budgetaire.id == objetModifie.id){
        budgetaire = {...objetModifie}
    }
    return budgetaire
    })
}
// supprimer plan budgetaire
const SUPPRIMER_PLAN_BUDGETAIRE = (state , id) =>{

    state.plans_budgetaires = state.plans_budgetaires.filter( budgetaire => budgetaire.id != id)
}


export{

    GET_STRUCTURE_BUDGETAIRE,
    AJOUTER_STRUCTURE_BUDGETAIRE,
    MODIFIER_STRUCTURE_BUDGETAIRE,
    SUPPRIMER_STRUCTURE_BUDGETAIRE,
    // export plan budgetaire
    GET_PLAN_BUDGETAIRE,
    AJOUTER_PLAN_BUDGETAIRE,
    MODIFIER_PLAN_BUDGETAIRE,
    SUPPRIMER_PLAN_BUDGETAIRE
}