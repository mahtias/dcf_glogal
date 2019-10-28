
// get all structure programme
const GET_STRUCTURE_BUDGETAIRE = (state , tableau_structure_budgetaire) => {

    state.structures_budgetaires = tableau_structure_budgetaire
}

// ajouster structure programme

const AJOUTER_STRUCTURE_BUDGETAIRE = (state , nouveauObjet) => {
    state.structures_budgetaires.unshift(nouveauObjet)
}
// modifier structure programme
const MODIFIER_STRUCTURE_BUDGETAIRE = (state, objetModifie) => {

    state.structures_budgetaires = state.structures_budgetaires.map(programme => {
        if(programme.id == objetModifie.id){
            programme = {...objetModifie}
        }
        return programme
    })
}
// supprimer structure programme
const SUPPRIMER_STRUCTURE_BUDGETAIRE = (state, id) => {
    state.structures_budgetaires = state.structures_budgetaires.filter( programme => programme.id !=id)

}



export {

GET_STRUCTURE_BUDGETAIRE,
AJOUTER_STRUCTURE_BUDGETAIRE,
MODIFIER_STRUCTURE_BUDGETAIRE,
SUPPRIMER_STRUCTURE_BUDGETAIRE

}