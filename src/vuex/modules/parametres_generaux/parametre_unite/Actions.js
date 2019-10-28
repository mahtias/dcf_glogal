import axios from '../../../../../urls/api_parametrage/api'


// get all unite
export async function  getUnite({commit}) {
   await axios.get('/liste_unite').then(response => {
        commit('GET_UNITE', response.data)
        
    }).catch(error => console.log(error))
}

// ajouter unite
export  function ajouterUnite({commit}, objetAjoute){
    axios.post('/ajouter_unite', {
        code: objetAjoute.code,
        libelle: objetAjoute.libelle
    } ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_UNITE', res.data)
        
        }
    }).catch(error => console.log(error))
}



// modifier unite
export function modifierUnite({commit}, objetChange){
    axios.put('/modifier_unite/' + objetChange.id, {
        code: objetChange.code,
        libelle: objetChange.libelle
    }).then(response => {
        commit('MODIFIER_UNITE', response.data)
    }).catch(error => console.log(error))

}

// supprimer unite
export function supprimerUnite({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_UNITE', id)
        axios.delete('/supprimer_unite/' + id)


    }
}







// get all zone geographique
export async function  getZone({commit}) {
    await axios.get('/liste_zone_geographique').then(response => {
         commit('GET_ZONE_GEOGRAPHIQUE', response.data)
         
     }).catch(error => console.log(error))
 }
 
 // ajouter zone geographique
 export  function ajouterZone({commit}, objetAjoute){
     axios.post('/ajouter_zone_geographique', {
         code: objetAjoute.code,
         libelle: objetAjoute.libelle
     } ).then(res => {
         if(res.status == 201){
             commit('AJOUTER_ZONE_GEOGRAPHIQUE', res.data)
         
         }
     }).catch(error => console.log(error))
 }
 
 
 
 // modifier zone geographique
 export function modifierZone({commit}, objetChange){
     axios.put('/modifier_zone_geographique/' + objetChange.id, {
         code: objetChange.code,
         libelle: objetChange.libelle
     }).then(response => {
         commit('MODIFIER_ZONE_GEOGRAPHIQUE', response.data)
     }).catch(error => console.log(error))
 
 }
 
 // supprimer zone geographique
 export function supprimerZone({commit}, id){
     let conf = confirm("Voulez vouz vraiment supprimer ?")
 
     if(conf){
         commit('SUPPRIMER_ZONE_GEOGRAPHIQUE', id)
         axios.delete('/supprimer_zone_geographique/' + id)
 
 
     }
 }
 
