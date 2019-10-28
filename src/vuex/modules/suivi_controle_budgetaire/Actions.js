import axios from './api_suivi_mission/api'

var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

// get all  categorie mission
export  function  getCategorieMission({commit}) {
    queue.push(() => axios.get('/liste_categorie_mission').then((response) => {
      commit('GET_CATEGORIE_MISSION', response.data)
      
  }).catch(error => console.log(error)))
  }

  // ajouter categorie mission 
  export function ajouterCategorieMission({commit}, elementAjout){
      axios.post('/add_categorie_mission',{
          code:elementAjout.code,
          libelle:elementAjout.libelle
      }).then(response =>{
          if(response.status == 201){
              commit('AJOUTER_CATEGORIE_MISSION', response.data)
          }

      }).catch(error => console.log(error))
  }

  // modifier categorie mission
  export function modifierCategorieMission({commit}, element_modifie) {
      axios.put('/update_categorie_mission/'+ element_modifie.id ,{
          code:element_modifie.code,
          libelle:element_modifie.libelle

      }).then(response => {
          commit('MODIFIER_CATEGORIE_MISSION', response.data)
      }).catch(error => console.log(error))
  }
   // supprimer categorie mision
export function supprimerCategorieMission({commit}, id) {
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_CATEGORIE_MISSION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_categorie_mission/' + id).then(() => dialog.close() )   
    })
  
}




// get all imputation
export  function  getImputation({commit}) {
    queue.push(() => axios.get('/list_imputation').then((response) => {
      commit('GET_IMPUTATION', response.data)
      
  }).catch(error => console.log(error)))
  }

// ajouter imputation
export function ajouterImputation({commit}, elementAjout){
    axios.post('/add_imputation',{
       montant:elementAjout.montant,
       mission_id:elementAjout.mission_id 
    }).then(response => {
        commit('AJOUTER_IMPUTATION', response.data)
    }).catch(error => console.log(error))
}

// modifier imputation
export function modifierImpuatation({commit}, element_modifie){
    axios.put('/update_imputation/'+ element_modifie.id, {
        montant:element_modifie.montant,
        mission_id:element_modifie.mission_id

    }).then(response => {
         commit('MODIFIER_IMPUTATION', response.data)
    }).catch(error => console.log(error))
} 

// supprimer imputation
export function supprimerImputation({commit},id){
   
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_IMPUTATION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_imputation/' + id).then(() => dialog.close() )   
    })
   
}




// get all mission
export  function  getMission({commit}) {
    queue.push(() => axios.get('/list_mission').then((response) => {
      commit('GET_MISSION', response.data)
      
  }).catch(error => console.log(error)))
  }
// ajouter mission
export function ajouterMission({commit},formData){
    axios.post('/add_mission',formData).then(response => {
        commit('AJOUTER_MISSION', response.data)
    }).catch(error => console.log(error))
}

// modifier mission
export function modifierMission({commit}, element_modifie,editMission){
    axios.put('/update_mission/'+ element_modifie.id, editMission)
    .then(response => {
         commit('MODIFIER_MISSION',response.data)
    }).catch(error => console.log(error))
} 

// supprimer mission
export function supprimerMission({commit},id){
    
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_MISSION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_mission/' + id).then(() => dialog.close() )   
    })
}



