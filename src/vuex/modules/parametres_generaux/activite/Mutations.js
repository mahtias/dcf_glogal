const GET_ACTIVITE = (state , tableau_structure_activite) => {

    state.structures_activites = tableau_structure_activite
}

//  ajouter structure budgetaire
const AJOUTER_STRUCTURE_ACTIVITE = (state , nouveuaObjet) => {
    state.structures_activites.unshift(nouveuaObjet)
}
// modifier structure budgetaire 
const MODIFIER_STRUCTURE_ACTIVITE = (state , objetModifie) => {

    state.structures_activites = state.structures_activites.map( budgetaire => {

    if(budgetaire.id == objetModifie.id){
        budgetaire = {...objetModifie}
    }
    return budgetaire
    })
}
// supprimer structure budgetaire
const SUPPRIMER_STRUCTURE_ACTIVITE = (state , id) =>{

    state.structures_activites = state.structures_activites.filter( budgetaire => budgetaire.id != id)
}



// // get all plan activite
// const GET_PLAN_ACTIVITE = (state , tableau_plan_activite) => {

//     state.plans_activites = tableau_plan_activite
// }

// //  ajouter plan activite
// const AJOUTER_PLAN_ACTIVITE = (state , nouveuaObjet) => {
//     state.plans_activites.unshift(nouveuaObjet)
// }
// // modifier plan budgetaire 
// const MODIFIER_PLAN_ACTIVITE = (state , objetModifie) => {

//     state.plans_activites = state.plans_activites.map( plan_activite => {

//     if(plan_activite.id == objetModifie.id){
//         plan_activite = {...objetModifie}
//     }
//     return plan_activite
//     })
// }
// // supprimer plan budgetaire
// const SUPPRIMER_PLAN_ACTIVITE = (state , id) =>{

//     state.plans_activites = state.plans_activites.filter( plan_activite => plan_activite.id != id)
// }


export{

    GET_ACTIVITE,
    AJOUTER_STRUCTURE_ACTIVITE,
    MODIFIER_STRUCTURE_ACTIVITE,
    SUPPRIMER_STRUCTURE_ACTIVITE,
    // export plan budgetaire
    // GET_PLAN_ACTIVITE,
    // AJOUTER_PLAN_ACTIVITE,
    // MODIFIER_PLAN_ACTIVITE,
    // SUPPRIMER_PLAN_ACTIVITE
}