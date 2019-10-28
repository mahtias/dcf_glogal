import axios from '../../../../../urls/api_parametrage/api'


var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})


// get all structure budgetaire
export  function  getStructureBudgetaire({commit}) {
  queue.push(() =>  axios.get('/liste_document_structure_budgetaires').then((response) => {
    commit('GET_STRUCTURE_BUDGETAIRE', response.data)
    
}).catch(error => console.log(error)))
}

// ajouter structure budgetaire
export  function ajouterStructureBudgetaire({commit}, objetAjoute){
    axios.post('/add_document_structure_budgetaires', {
        niveau: objetAjoute.niveau,
        code:objetAjoute.code,
        libelle: objetAjoute.libelle
    } ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_STRUCTURE_BUDGETAIRE', res.data)
        
        }
    }).catch(error => console.log(error))
}

// modifier structure budgetaire
export function modifierStructureBudgetaire({commit}, budgetaire){
    axios.put('/update_document_structure_budgetaires/' + budgetaire.id, {
        niveau: budgetaire.niveau,
        code:budgetaire.code,
        libelle: budgetaire.libelle
    }).then(response => {
        commit('MODIFIER_STRUCTURE_BUDGETAIRE', response.data)
    }).catch(error => console.log(error))

}


// supprimer structure budgetaire
export function supprimerStructureBudgetaire({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_STRUCTURE_BUDGETAIRE', id)
        axios.delete('/delete_document_structure_budgetaires/' + id)


    }
}



// get all plan budgetaire 
export  function getPlanBudgetaire({commit}) {

    queue.push(() =>  axios.get('/liste_plan_budgetaires').then((response) => {
        commit('GET_PLAN_BUDGETAIRE', response.data)
        // console.log(response.data)
    }).catch(error => console.log(error)))


}
// ajouter plan budgetaire
export function ajouterPlanBudgetaire({commit}, objetAjout){
    axios.post('/add_plan_budgetaires',{
      code: objetAjout.code,
       libelle:objetAjout.libelle,
       structure_budgetaire_id:objetAjout.structure_budgetaire_id
        
    }).then(adoni=>{
        if(adoni.status == 201)
        {
            commit('AJOUTER_PLAN_BUDGETAIRE', adoni.data)
        }
    }).catch(error => console.log(error))
}

//modification plan budgetaire
export function modifierPlanbudgetaire({commit}, budgetaire) {

    axios.put('/update_plan_budgetaires/'+ budgetaire.id,{
        code:budgetaire.code,
        libelle:budgetaire.libelle,
    structure_budgetaire_id:budgetaire.structure_budgetaire_id
    }).then(response => {
        commit('MODIFIER_PLAN_BUDGETAIRE', response.data)
    }).catch(error => console.log(error))
   
}



// supprimer plan budgetaire

export function supprimerPlanBudgetaire({commit}, id){
    let conf = confirm('Voulez-vous vraiment supprimer?')
   
    if(conf){
        commit('SUPPRIMER_PLAN_BUDGETAIRE', id)
        axios.delete('/delete_plan_budgetaires/' + id)
          

    }
}

