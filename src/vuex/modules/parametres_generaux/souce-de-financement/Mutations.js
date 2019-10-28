

/* le state de source definancement
 get all source de financement
*/
const GET_SOURCE_FINANCEMENT = (state, tableau_source_financement) => {

    state.sources_financements = tableau_source_financement
}

// ajouter source de financement
const AJOUTER_SOURCE_FINANCEMENT = (state , nouvel_objet) => {
    state.sources_financements.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_SOURCE_FINANCEMENT = (state ,id) => {
    state.sources_financements = state.sources_financements.filter(source_financement => 
        source_financement.id !=id)
}

//modifier source de financement
const MODIFIER_SOURCE_FINANCEMENT = (state, objetModifie) => {
   
    state.sources_financements = state.sources_financements.map(source_financement => {

        if(source_financement.id == objetModifie.id){
            source_financement = {...objetModifie}

        }
        return source_financement
    })
}

// get all type de financement
const GET_TYPE_FINANCEMENT = (state, tableau_type_financement) =>{
    state.types_financements = tableau_type_financement
}

// ajouter type de financement 
const AJOUTER_TYPE_FINANCEMENT = (state ,nouvel_objet) =>{

state.types_financements.unshift(nouvel_objet)
}
// modififier type de financement 
const MODIFIER_TYPE_FINANCEMENT = (state,objetModifie) => {

    state.types_financements = state.types_financements.map(type_financement => {
        if(type_financement.id == objetModifie.id){
            type_financement = {...objetModifie}
        }
        return type_financement
    })
}



export {


// exportation de source de financement
GET_SOURCE_FINANCEMENT,
AJOUTER_SOURCE_FINANCEMENT,
SUPPRIMER_SOURCE_FINANCEMENT,
MODIFIER_SOURCE_FINANCEMENT,
// exportation de type de financement
GET_TYPE_FINANCEMENT,
AJOUTER_TYPE_FINANCEMENT,
MODIFIER_TYPE_FINANCEMENT
}
