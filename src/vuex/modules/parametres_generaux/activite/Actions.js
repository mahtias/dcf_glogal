import axios from '../../../../../urls/api_parametrage/api'


var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})


// get all structure activite
export  function  getStructureActivite({commit}) {
  queue.push(() =>  axios.get('/liste_structure_activite').then((response) => {
    commit('GET_ACTIVITE', response.data)
    
}).catch(error => console.log(error)))
}


// ajouter structure activite
export  function ajouterStructureActivite({commit}, objetAjoute){
    axios.post('/add_structure_activite', {
        niveau:objetAjoute.niveau,
        libelle: objetAjoute.libelle
    } ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_STRUCTURE_ACTIVITE', res.data)
        
        }
    }).catch(error => console.log(error))
}

// modifier structure activite
export function modifierStructureActivite({commit}, activite){
    axios.put('/update_structure_activite/' + activite.id, {
        niveau:activite.niveau,
        libelle: activite.libelle
    }).then(response => {
        commit('MODIFIER_STRUCTURE_ACTIVITE', response.data)
    }).catch(error => console.log(error))

}


// supprimer structure budgetaire
export function supprimerStructureActivite({commit}, id){
 
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_STRUCTURE_ACTIVITE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/delete_structure_activite/' + id).then(() => dialog.close() )   
    })
}



// // get all plan activite
// export  function getPlanActivite({commit}) {

//     queue.push(() =>  axios.get('/liste_activites').then((response) => {
//         commit('GET_PLAN_ACTIVITE', response.data)
//         console.log(response.data)
//     }).catch(error => console.log(error)))


// }
// // ajouter plan activite
// export function ajouterPlanActivite({commit}, objetAjout){
//     axios.post('/add_activites',{
//       code: objetAjout.code,
//        libelle:objetAjout.libelle,
//      structure_activite_id:objetAjout.structure_activite_id
        
//     }).then(dcf=>{
//         if(dcf.status == 201)
//         {
//             commit('AJOUTER_PLAN_ACTIVITE', dcf.data)
//         }
//     }).catch(error => console.log(error))
// }

// //modification plan activite
// export function modifierPalnActivite({commit}, budgetaire) {

//     axios.put('/update_activites/'+ budgetaire.id,{
//         code:budgetaire.code,
//         libelle:budgetaire.libelle,
// structure_activite_id:budgetaire.structure_activite_id
//     }).then(response => {
//         commit('MODIFIER_PLAN_ACTIVITE', response.data)
//     }).catch(error => console.log(error))
   
// }


// // supprimer plan activite

// export function supprimerPlanActivite({commit}, id){
//     let conf = confirm('Voulez-vous vraiment supprimer?')
   
//     if(conf){
//         commit('SUPPRIMER_PLAN_ACTIVITE', id)
//         axios.delete('/delete_activites/' + id)
          

//     }
// }

