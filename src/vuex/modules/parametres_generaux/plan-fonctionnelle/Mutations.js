
const GET_STRUCTURE_FONCTIONNELLE = (state, tableau_structure_fonctionnelle) => {

    state.structures_fonctionnelles = tableau_structure_fonctionnelle
}

// ajouter source de financement
const AJOUTER_STRUCTURE_FONCTIONNELLE = (state , nouvel_objet) => {
    state.structures_fonctionnelles.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_STRUCTURE_FONCTIONNELLE = (state ,id) => {
    state.structures_fonctionnelles = state.structures_fonctionnelles.filter(fonctionnelle => 
        fonctionnelle.id !=id)
}

//modifier siource de financement
const MODIFIER_STRUCTURE_FONCTIONNELLE = (state, objetModifie) => {
   
    state.structures_fonctionnelles = state.structures_fonctionnelles.map(fonctionnelle => {

        if(fonctionnelle.id == objetModifie.id){
            fonctionnelle = {...objetModifie}

        }
        return fonctionnelle
    })
}

// get all plan fonctionnelle
const GET_PLAN_FONCTIONNELLE = (state, tableau_plan_fonctionnele) =>{
    state.plans_fonctionnels = tableau_plan_fonctionnele
}

// ajouter type de financement 
const AJOUTER_PLAN_FONCTIONNELLE = (state ,nouvel_objet) =>{

state.plans_fonctionnels.unshift(nouvel_objet)
}
// modififier type de financement 
const MODIFIER_PLAN_FONCTIONNELLE = (state,objetModifie) => {

    state.plans_fonctionnels = state.plans_fonctionnels.map(plan_fonctionnelle => {
        if(plan_fonctionnelle.id == objetModifie.id){
            plan_fonctionnelle = {...objetModifie}
        }
        return plan_fonctionnelle
    })
}

// suppression de source de financement
const SUPPRIMER_PLAN_FONCTIONNELLE = (state ,id) => {
    state.plans_fonctionnels = state.plans_fonctionnels.filter(plan_fonctionnelle => 
        plan_fonctionnelle.id !=id)
}


export {


// exportation de source de financement
GET_STRUCTURE_FONCTIONNELLE,
AJOUTER_STRUCTURE_FONCTIONNELLE,
SUPPRIMER_STRUCTURE_FONCTIONNELLE,
MODIFIER_STRUCTURE_FONCTIONNELLE,
// exportation de type de financement
GET_PLAN_FONCTIONNELLE,
AJOUTER_PLAN_FONCTIONNELLE,
MODIFIER_PLAN_FONCTIONNELLE,
SUPPRIMER_PLAN_FONCTIONNELLE
}
