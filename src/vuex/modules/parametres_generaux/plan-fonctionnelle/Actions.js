import axios from '../../../../../urls/api_parametrage/api'

 var housecall= require('housecall')
 var queue = housecall({concurrency: 2, cooldown: 1000})

// liste structure fonctionnelle

export  function getStructureFonctionnelle({commit}){
    queue.push(() => axios.get('/liste_Structure_fontionnelle').then(tony => {
        commit('GET_STRUCTURE_FONCTIONNELLE', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure fonctionnelle
export function ajouterStructureFonctionnelle({commit}, objetAjout){
 axios.post('/ajouter_Structure_fontionnelle' ,{
     code:objetAjout.code,
     libelle:objetAjout.libelle,
     sigle:objetAjout.sigle
 }).then(tony => {
     if(tony.status == 201){
         commit('AJOUTER_STRUCTURE_FONCTIONNELLE', tony.data)
     }
 }).catch(error => console.log(error))
}
// supprimer structure fonctionnelle
export function supprimerStructureFonctionnelle({commit}, id){
    let conf = confirm('Voulez-vous vraiment supprimer?')
   
    if(conf){
        commit('SUPPRIMER_STRUCTURE_FONCTIONNELLE', id)
        axios.delete('/supprimer_Structure_fontionnelle/' + id)
          

    }
}
//modifier structure fonctionnelle
export function modifierStructureFonctionnelle({commit}, source_financement){

    axios.put('/modifier_Structure_fontionnelle/' + source_financement.id ,{
        code:source_financement.code,
        libelle:source_financement.libelle,
        sigle:source_financement.sigle
    }).then(response => {
        commit('MODIFIER_STRUCTURE_FONCTIONNELLE', response.data)
    }).catch(error => console.log(error))
   
}

// get all of plan fonctionnelle
export  function getPlanFonctionnelle({commit}){
    queue.push(()=> axios.get('/liste_Planfontionnelle').then(tony => {
        commit('GET_PLAN_FONCTIONNELLE', tony.data)
    }).catch(error => console.log(error)))
    
}

// ajouter plan fonctionnelle
export function ajouterPlanFonctionnel({commit}, objetAjout){
    axios.post('/ajouter_Planfontionnelle' , {
        code:objetAjout.code,
        libelle:objetAjout.libelle,
    structure_fonctionnelle_id:objetAjout.structure_fonctionnelle_id
    }).then(res => {
        commit('AJOUTER_PLAN_FONCTIONNELLE', res.data)
    }).catch(error => console.log(error))
}
// modifier plan fonctionnelle

export function modifierPlanFonctionnel({commit},plan_fonctionnel){
    axios.put('/modifier_Planfontionnelle/' + plan_fonctionnel.id, {
      code:plan_fonctionnel.code,
      libelle:plan_fonctionnel.libelle ,
      structure_fonctionnelle_id:plan_fonctionnel.structure_fonctionnelle_id
    } ).then(res => {
        commit('MODIFIER_PLAN_FONCTIONNELLE', res.data)
    }).catch(error => console.log(error))
}
// supprimer plan fonctionnelle
export function supprimerPlanFonctionnel({commit}, id){
    let conf= confirm('voulez-vous vraiment supprimer?')
    if(conf){
        commit('SUPPRIMER_PLAN_FONCTIONNELLE',id)
        axios.delete('/supprimer_Planfontionnelle/' +id)
    }
}