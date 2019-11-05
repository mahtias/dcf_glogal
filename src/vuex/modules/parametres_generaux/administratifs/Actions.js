import axios from '../../../../../urls/api_parametrage/api'


var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})


// get all titres
export  function  getTitres({commit}) {
  queue.push(() =>  axios.get('/liste_titre').then((response) => {
    commit('GET_TITRES', response.data)
    
}).catch(error => console.log(error)))
}


// ajouter titre
export  function ajouterTitre({commit}, objetAjoute){
    axios.post('/add_titre', {
        code: objetAjoute.code,
        libelle: objetAjoute.libelle
    } ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_TITRE', res.data)
        
        }
    }).catch(error => console.log(error))
}

// supprimer titre
export function supprimerTitre({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_TITRE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/delete_titre/' + id).then(() => dialog.close() )   
    })
}

// modifier titre 
export function modifierTitre({commit}, titre){
    axios.put('/update_titre/' + titre.id, {
        code: titre.code,
        libelle: titre.libelle
    }).then(response => {
        commit('MODIFIER_TITRE', response.data)
    }).catch(error => console.log(error))

}

// get all exercices budgetaires 
export  function getExercicesBudgetaires({commit}) {

    queue.push(() =>  axios.get('/liste_exercice_budgetaire').then((response) => {
        commit('GET_EXERCICES_BUDGETAIRES', response.data)
        
    }).catch(error => console.log(error)))


}
// ajouter execice budgetaire
export function ajouterExerciceBudgetaire({commit}, objetAjout){
    axios.post('/add_exercice_budgetaire',{
      annee: objetAjout.annee,
       date_debut:objetAjout.date_debut,
       date_fin:objetAjout.date_fin,
       encours:objetAjout.encours,
       date_cloture:objetAjout.date_cloture  
    }).then(adoni=>{
        if(adoni.status == 201)
        {
            commit('AJOUTER_EXERCICE_BUDGETAIRES', adoni.data)
        }
    }).catch(error => console.log(error))
}

//modification exercice budgetaire
export function modifierExerciceBudgetaire({commit}, exercice_budgetaire) {

    axios.put('/update_exercice_budgetaire/'+ exercice_budgetaire.id,{
        annee:exercice_budgetaire.annee,
        date_debut:exercice_budgetaire.date_debut,
        date_fin:exercice_budgetaire.date_fin,
        encours:exercice_budgetaire.encours
    }).then(response => {
        commit('MODIFIER_EXERCICE_BUDGETAIRE', response.data)
    }).catch(error => console.log(error))
   
}


// supprimer exercice budgetaire

export function supprimerExerciceBudgetaire({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_EXERCICE_BUDGETAIRE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/delete_exercice_budgetaire/' + id).then(() => dialog.close() )   
    })
}

// get all nature de section
export  function getNatureSection({commit}) {

    queue.push(() =>  axios.get('/liste_nature_section').then((response) => {
        commit('GET_NATURE_SECTION', response.data)      
    }).catch(error => console.log(error)))
 
   
}

// ajouter nature de section
export function ajouterNatureSection({commit},objetAjout){
    axios.post('/ajouter_nature_section',{
        code:objetAjout.code,
        libelle:objetAjout.libelle

    }).then(response => {
        if(response.status == 201){
            commit('AJOUTER_NATURE_SECTION', response.data)
        }
    }).catch(error => console.log(error))

}
// modififer nature de section
export function modifierNatureSection({commit}, objetModifie){
    axios.put('/modifier_nature_section/'+ objetModifie.id,{

        code:objetModifie.code,
        libelle:objetModifie.libelle
    }).then(res => {
        commit('MODIFIER_NATURE_SECTION', res.data)
    }).catch(error => console.log(error))
   
}
// supprimer nature de setion

export function supprimerNatureSection({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_NATURE_SECTION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_nature_section/' + id).then(() => dialog.close() )   
    })
}





// get all  section
export  function getSection({commit}) {
    queue.push(() => axios.get('/liste_section').then(response =>{
        commit('GET_SECTION', response.data)
    }).catch(error => console.log(error)))
   
}



// ajouter  section
export function ajouterSection({commit},objetAjout){
    axios.post('/ajouter_section',{
        code:objetAjout.code,
        nom_section:objetAjout.nom_section,
        naturesection_id: objetAjout.naturesection_id
    }).then(response => {
        if(response.status == 201){
            commit('AJOUTER_SECTION', response.data)
        }
    }).catch(error => console.log(error))

}
// modififer de section
export function modifierSection({commit}, objetModifie){
    axios.put('/modifier_section/'+ objetModifie.id,{

        code:objetModifie.code,
        nom_section:objetModifie.nom_section,
        naturesection_id:objetModifie.naturesection_id
    }).then(res => {
        commit('MODIFIER_SECTION', res.data)
    }).catch(error => console.log(error))
   
}


// supprimer de setion

export function supprimerSection({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_SECTION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_section/' + id).then(() => dialog.close() )   
    })
    
}







// Action de structure programme
 // get all struture programme
 export  function getStructureProgramme({commit}){
    queue.push(() => axios.get('/liste_Structure_Programme').then(tony => {
         commit('GET_STRUCTURE_PROGRAMME', tony.data)
     }).catch(error => console.log(error)))
 }
 // ajouter structure programme
 export function ajouterStructureProgramme({commit}, elementAjout){
     axios.post('/ajouter_Structure_Programme',{
         code:elementAjout.code,
         libelle:elementAjout.libelle
     }).then(response => {
         if(response.status == 201){
             commit('AJOUTER_STRUCTURE_PROGRAMME', response.data)
         }
     }).catch(error => console.log(error))
 }

// modifier la structure programme
export function modifierStructureProgramme({commit}, objetModifie){
    axios.put('/modifier_Structure_Programme/'+ objetModifie.id,{

        code:objetModifie.code,
        libelle:objetModifie.libelle
    }).then(res => {
        commit('MODIFIER_STRUCTURE_PROGRAMME', res.data)
    }).catch(error => console.log(error))
   
}


 // souprime structure programme
 export function supprimerStructureProgramme({commit},id) {
 

  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_STRUCTURE_PROGRAMME', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_Structure_Programme/' + id).then(() => dialog.close() )   
  })
 }




 // get all plan programme
 export  function getPlanProgramme({commit}){
    queue.push(() => axios.get('/liste_Plan_Programme').then(response =>{
        commit('GET_PLAN_PROGRAMME', response.data)
    }).catch(error => console.log(error)))


}
// ajouter plan programme
export  function ajouterPlanProgramme({commit}, nouveauObjet){
 axios.post('/ajouterPlan_Programme',{
     code:nouveauObjet.code,
     libelle:nouveauObjet.libelle,
 structure_programme_id:nouveauObjet.structure_programme_id
 }).then(response =>{
     commit('AJOUTER_PLAN_PROGRAMME', response.data)
 }).catch(error => console.log(error))
}

// modifier plan programme
export function modifierPlanProgramme({commit}, nouveauObjet){
 axios.put('/modifier_Plan_Programme/'+ nouveauObjet.id,{
     code:nouveauObjet.code,
     libelle:nouveauObjet.libelle,
     structure_programme_id:nouveauObjet.structure_programme_id
 }).then( resultat =>{
     commit('MODIFIER_PLAN_PROGRAMME',resultat.data)
 })
}
// supprimer le plan programme
export function supprimerPlanProgramme({commit}, id){

 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_PLAN_PROGRAMME', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/supprimer_Plan_Programme/' + id).then(() => dialog.close() )   
 })
}








 // Action structure administrative
 // get all structure administartive
 export  function getStructureAdministrative({commit}){
 queue.push(() => axios.get('/liste_structure_administrative').then(response =>{
     commit('GET_STRUCTURE_ADMINISTATIVE',response.data)
 }).catch(error => console.log(error)))

 }
 // ajouter structure administrative
 export function ajouterStructureAdministrative({commit}, objetAjoute){
     axios.post('/ajouter_structure_administrative',{
        niveau:objetAjoute.niveau,
        libelle:objetAjoute.libelle,

     }).then(response =>{
         if(response.status == 201){
commit('AJOUTER_STRUCTURE_ADMINISTRATIVE', response.data)
         } 
     }).catch(error => console.log(error))
 }
 // modifier structure administrative
 export function modifierStructureAdministrative({commit}, nouveauObjet){
 axios.put('/modifier_structure_administrative/'+ nouveauObjet.id,{
     niveau:nouveauObjet.niveau,
     libelle:nouveauObjet.libelle
 }).then( resultat =>{
     commit('MODIFIER_STRUCTURE_ADMINISTRATIVE',resultat.data)
 })
}

// supprimer structure administrative
export function supprimerStructureAdministrative({commit}, id){

   this.$app.$dialog
   .confirm("Voulez vouz vraiment supprimer ?.")
   .then(dialog => {
      commit('SUPPRIMER_STRUCTURE_ADMINISTRATIVE', id)
     // // dialog.loading(false) // stops the proceed button's loader
       axios.delete('/supprimer_structure_administrative/' + id).then(() => dialog.close() )   
   })
}
 
  

   // get all service gestionnaire
   export  function getServiceGestionnaire({commit}){
    queue.push(() => axios.get('/liste_service_gestionnaire').then(response =>{
        commit('GET_SERVICE_GESTIONNAIRE', response.data)
    }).catch(error => console.log(error)))


}
// ajouter  service gestionnaire
export  function ajouterServiceGestionnaire({commit}, nouveauObjet){
 axios.post('/ajouter_service_gestionnaire',{
     code:nouveauObjet.code,
     libelle:nouveauObjet.libelle,
     ordre:nouveauObjet.ordre,
structure_administrative_id:nouveauObjet.structure_administrative_id
 }).then(response =>{
     commit('AJOUTER_SERVICE_GESTIONNAIRE', response.data)
 }).catch(error => console.log(error))
}
// modifier service gestionnaire
export function modifierServiceGestionnaire({commit}, nouveauObjet){
 axios.put('/modifier_service_gestionnaire/'+ nouveauObjet.id,{
     code:nouveauObjet.code,
     libelle:nouveauObjet.libelle,
     ordre:nouveauObjet.ordre,
     structure_administrative_id:nouveauObjet.structure_administrative_id
 }).then( resultat =>{
     commit('MODIFIER_SERVICE_GESTIONNAIRE',resultat.data)
 })
}
// supprimer service gestionnaire
export function supprimerServiceGestionnaire({commit}, id){
   
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_SERVICE_GESTIONNAIRE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_service_gestionnaire/' + id).then(() => dialog.close() )   
    })
 }



// Action de structure de geographique


// get all struture geographique
export  function getStructureGeographique({commit}) {
    queue.push(() => axios.get('/liste_structure_localgeo').then( resultat => {
        commit('GET_STRUCTURE_GEOGRAPHIQUE', resultat.data)
    }).catch(error => console.log(error)))
}

//  ajouter struture geographique
export function ajouterStructureGeographique({commit}, nouveauObjet){
    axios.post('/ajouter_structure_localgeo',{
        niveau:nouveauObjet.niveau,
        libelle:nouveauObjet.libelle
    }).then( response => {
        commit('AJOUTER_STRUCTURE_GEOGRAPHIQUE', response.data)
    }).catch(error => console.log(error))
}
// modifier struture geographique
export function modifierStructureGeographique({commit}, objetModifie){
    axios.put('/modifier_structure_localgeo/'+ objetModifie.id, {
         niveau:objetModifie.niveau,
         libelle:objetModifie.libelle
    }).then( response => {
        commit('MODIFIER_STRUCTURE_GEOGRAPHIQUE', response.data)
    }).catch(error => console.log(error))
}
// supprimer struture geographique
export function supprimerStructureGeographique({commit}, id){
   
        this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
           commit('SUPPRIMER_STRUCTURE_GEOGRAPHIQUE', id)
          // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_structure_localgeo/' + id).then(() => dialog.close() )   
        })
}


// Action localisation geographique


// get all localisation geographique
export  function getLocalisationGeographique({commit}) {
    queue.push(() => axios.get('/liste_localisation_geo').then( resultat => {
        commit('GET_LOCALISATION_GEOGRAPHIQUE', resultat.data)
    }).catch(error => console.log(error)))
}

//  ajouter localisation geographique
export function ajouterLocalisationGeographique({commit}, objetElement){
    axios.post('/ajouter_localisation_geo',{
        code:objetElement.code,
        libelle:objetElement.libelle,
structure_localisation_geographique_id:objetElement.structure_localisation_geographique_id
    }).then( response => {
        commit('AJOUTER_LOCALISATION_GEOGRAPHIQUE', response.data)
    }).catch(error => console.log(error))
}
// modifier localisation geographique
export function modifierLocalisationGeographique({commit}, objetModifie){
    axios.put('/modifier_localisation_geo/'+ objetModifie.id, {
         code:objetModifie.code,
         libelle:objetModifie.libelle,
        structure_localisation_geographique_id:objetModifie.structure_localisation_geographique_id
    }).then( response => {
        commit('MODIFIER_LOCALISATION_GEOGRAPHIQUE', response.data)
    }).catch(error => console.log(error))
}
// supprimer localisation geographique
export function supprimerLocalisationGeographique({commit}, id){
    
        this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
           commit('SUPPRIMER_LOCALISATION_GEOGRAPHIQUE', id)
          // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_localisation_geo/' + id).then(() => dialog.close() )   
        })
}



//// chapitre //


   // get all chapitre
   export  function getChapitre({commit}){
    queue.push(() => axios.get('/liste_chapitre').then(response =>{
        commit('GET_CHAPITRE', response.data)
    }).catch(error => console.log(error)))


}
// ajouter  chapitre
export  function ajouterChapitre({commit}, nouveauObjet){
 axios.post('/ajouter_chapitre',{
    code:nouveauObjet.code,
    libelle:nouveauObjet.libelle,
    localisation_geographique_id:nouveauObjet.localisation_geographique_id,
    servicegestionnaires_id:nouveauObjet.servicegestionnaires_id
 }).then(response =>{
     commit('AJOUTER_CHAPITRE', response.data)
 }).catch(error => console.log(error))
}
// modifier chapitre
export function modifierChapitre({commit}, nouveauObjet){
 axios.put('/modifier_chapitre/'+ nouveauObjet.id,{
    codeChapitre:nouveauObjet.codeChapitre,
     libelle:nouveauObjet.libelle,
 localisation_geographique_id:nouveauObjet.localisation_geographique_id,
 servicegestionnaires_id:nouveauObjet.servicegestionnaires_id
 
 }).then( resultat =>{
     commit('MODIFIER_CHAPITRE',resultat.data)
 })
}
// supprimer chapitre
export function supprimerChapitre({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_CHAPITRE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_chapitre/' + id).then(() => dialog.close() )   
    })
}




// Action grande nature///

// get all grande nature
export async function getGrandeNature({commit}) {
    await axios.get('/liste_grande_nature').then( resultat => {
        commit('GET_GRANDE_NATURE', resultat.data)
    }).catch(error => console.log(error))
}

//  ajouter grande nature
export function ajouterGrandeNature({commit}, nouveauObjet){
    axios.post('/add_grande_nature',{
        code:nouveauObjet.code,
        libelle:nouveauObjet.libelle
    }).then( response => {
        commit('AJOUTER_GRANDE_NATURE', response.data)
    }).catch(error => console.log(error))
}
// modifier grande nature
export function modifierGrandeNature({commit}, objetModifie){
    axios.put('/update_grande_nature/'+ objetModifie.id, {
         code:objetModifie.code,
         libelle:objetModifie.libelle
    }).then( response => {
        commit('MODIFIER_GRANDE_NATURE', response.data)
    }).catch(error => console.log(error))
}
// supprimer grande nature
export function supprimerGrandeNature({commit}, id){
   
        this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
           commit('SUPPRIMER_GRANDE_NATURE', id)
          // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_grande_nature/' + id).then(() => dialog.close() )   
        })
}

