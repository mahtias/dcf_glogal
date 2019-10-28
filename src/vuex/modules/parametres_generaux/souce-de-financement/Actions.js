import axios from '../../../../../urls/api_parametrage/api'

 var housecall= require('housecall')
 var queue = housecall({concurrency: 2, cooldown: 1000})

// liste de source de financement

export  function getSourceFinancement({commit}){
    queue.push(() => axios.get('/liste_source_financement').then(tony => {
        commit('GET_SOURCE_FINANCEMENT', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter source de financement
export function ajouterSourceFinancement({commit}, objetAjout){
 axios.post('/add_source_financement' ,{
     code:objetAjout.code,
     libelle:objetAjout.libelle,
     sigle:objetAjout.sigle
      

 }).then(tony => {
     if(tony.status == 201){
         commit('AJOUTER_SOURCE_FINANCEMENT', tony.data)
     }
 }).catch(error => console.log(error))
}
// supprimer source de financement
export function supprimerSourceFinancement({commit}, id){
     
        this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
           commit('SUPPRIMER_SOURCE_FINANCEMENT', id)
          // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_source_financement/' + id).then(() => dialog.close() )   
        })

    
}
//modifier la source de financement
export function modifierFinancement({commit}, source_financement){

    axios.put('/update_source_financement/' + source_financement.id ,{
        code:source_financement.code,
        libelle:source_financement.libelle,
        sigle:source_financement.sigle
    }).then(response => {
        commit('MODIFIER_SOURCE_FINANCEMENT', response.data)
    }).catch(error => console.log(error))
   
}

// get all of type financement
export async function getTypeFinancement({commit}){
    await axios.get('/liste_type_financement').then(tony => {
        // console.log(tony.data)
        commit('GET_TYPE_FINANCEMENT', tony.data)
    }).catch(error => console.log(error))
    

}

// ajouter type de financement
export function ajouterTypeFinancement({commit}, objetAjout){
    axios.post('/add_type_financement' ,objetAjout).then(res => {
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

    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_TYPE_FINANCEMENT', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/delete_type_financement/' + id).then(() => dialog.close() )   
    })
}