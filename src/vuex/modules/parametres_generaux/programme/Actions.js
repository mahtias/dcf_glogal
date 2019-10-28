import axios from '../../../../../urls/api_parametrage/api'

 var housecall= require('housecall')
 var queue = housecall({concurrency: 2, cooldown: 1000})

// liste de structure programme 

export  function getStructureBudgetaire({commit}){
    queue.push(() => axios.get('/liste_document_structure_budgetaires').then(tony => {
        commit('GET_STRUCTURE_BUDGETAIRE', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure programme
export function ajouterStructureBudgetaire({commit}, objetAjout){
 axios.post('/add_document_structure_budgetaires' ,{
     code:objetAjout.code,
     libelle:objetAjout.libelle,
    
 }).then(tony => {
     if(tony.status == 201){
         commit('AJOUTER_STRUCTURE_BUDGETAIRE', tony.data)
     }
 }).catch(error => console.log(error))
}

//modifier la structure programme
export function mdifierStructureBudgetaire({commit}, programme){

    axios.put('/update_document_structure_budgetaires/' + programme.id ,{
        code:programme.code,
        libelle:programme.libelle
    }).then(response => {
        commit('MODIFIER_STRUCTURE_BUDGETAIRE', response.data)
    }).catch(error => console.log(error))
   
}


// supprimer structure programme
export function supprimerStructureBudgetaire({commit}, id){
    let conf = confirm('Voulez-vous vraiment supprimer?')
   
    if(conf){
        commit('SUPPRIMER_STRUCTURE_BUDGETAIRE', id)
        axios.delete('/delete_document_structure_budgetaires/' + id)
          

    }
}

// get all of type financement
export async function getTypeFinancement({commit}){
    await axios.get('/liste_type_financement/').then(tony => {
        commit('GET_TYPE_FINANCEMENT', tony.data)
    }).catch(error => console.log(error))
    
}

// ajouter type de financement
export function ajouterTypeFinancement({commit}, objetAjout){
    axios.post('/add_type_financement/' ,objetAjout).then(res => {
        commit('AJOUTER_TYPE_FINANCEMENT', res.data)
    }).catch(error => console.log(error))
}
// modifier type de financement

export function modifierTypeFinancement({commit},type_financement){
    axios.put('/update_type_financement/' + type_financement.id, {
      code:type_financement.code,
      libelle:type_financement.libelle ,
      source_financement_id:type_financement.source_financement_id
    } ).then(res => {
        commit('MODIFIER_TYPE_FINANCEMENT', res.data)
    }).catch(error => console.log(error))
}
// supprimer type de financement
export function supprimerTypeFinancement({commit}, id){
    let conf= confirm('voulez-vous vraiment supprimer?')
    if(conf){
        commit('SUPPRIMER_TYPE_FINANCEMENT',id)
        axios.delete('/delete_type_financement/' +id)
    }
}