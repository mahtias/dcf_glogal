
 // get all categorie mission
 export const GET_CATEGORIE_MISSION = (state, tableau_categorie_mission) => {

    state.categories_missions = tableau_categorie_mission
} 


// ajouter categorie mission
 export const AJOUTER_CATEGORIE_MISSION = (state, nouveau_element) => {
    state.categories_missions.unshift(nouveau_element)
}

// modifier categorie mission
 export const MODIFIER_CATEGORIE_MISSION = (state, element_ajout) =>{
    state.categories_missions = state.categories_missions.map(response =>{
      if(  response.id == element_ajout.id){
          response = {...element_ajout}

      }
      return response

    })
}

// supprimer categorie mission
export const SUPPRIMER_CATEGORIE_MISSION = (state, id) => {

    state.categories_missions = state.categories_missions.filter(mission => mission.id !=id)
}




 // get all  mission
 export const GET_MISSION = (state, tableau_mission) => {

    state.missions = tableau_mission
} 


// ajouter  mission
 export const AJOUTER_MISSION = (state, nouveau_element) => {
    state.missions.unshift(nouveau_element)
}

// modifier  mission
 export const MODIFIER_MISSION = (state, element_ajout) =>{
    state.missions = state.missions.map(response =>{
      if(  response.id == element_ajout.id){
          response = {...element_ajout}

      }
      return response

    })
}

// supprimer mission
export const SUPPRIMER_MISSION = (state, id) => {

    state.missions = state.missions.filter(mission => mission.id !=id)
}

// get all imputation mission

export const GET_IMPUTATION = (state, tableau_imputation) => {

    state.imputations = tableau_imputation
}

// ajouter imputation
export const AJOUTER_IMPUTATION = (state ,elementAjout) => {
    state.imputations.unshift(elementAjout)
}

// modifier imputation

export const MODIFIER_IMPUTATION = (state, elementModifie)=> {
    state.imputations = state.imputations.map(response =>{
        if(response.id == elementModifie.id){
            response = {...elementModifie}
        }
         return response
    })
}

// supprimer imputation

export const SUPPRIMER_IMPUTATION = (state, id) => {
    state.imputations = state.imputations.filter( res => res.id !=id)
}






