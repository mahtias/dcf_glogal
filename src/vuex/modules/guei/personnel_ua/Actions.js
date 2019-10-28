import axios from "./url/api_personnel_ua/api"
var housecall = require('housecall');
var queue = housecall({ concurrency: 2, cooldown: 1000 });
/**
 * Gestion type acteur
 */
export async function  getTypeActPersonnel({commit}) {

    queue.push(() =>  axios.get('/liste_type_acte_personnel').then(response => {
        commit('GET_TYPE_ACTE_PERSONNELS', response.data)
    }).catch(error => console.log(error)));

}
// ajouter type acte personnel
export  function ajouterTypeActPersonnel({commit}, objetAjoute){
    axios.post('/add_type_acte_personnel', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_TYPE_ACTE_PERSONNELS', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerTypeActPersonnel({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_TYPE_ACTE_PERSONNELS', id)
        axios.delete('/delete_type_acte_personnel/' + id)

    }
}


export function modifierTypeAct({commit}, formData){
    axios.put('/update_type_acte_personnel' ,formData).then(response => {
        commit('MODIFIER_TYPE_ACTE_PERSONNELS', response.data)
    })

}

export  function  getFonctions({commit}) {

    queue.push(() =>  axios.get('/liste_fonction').then(response => {
            // console.log(response.data)
            commit('GET_FONCTIONS', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterFonction({commit}, objetAjoute){
    axios.post('/add_fonction', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_FOCNTIONS', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerFonction({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_FONCTIONS', id)
        axios.delete('/delete_fonction/' + id)

    }
}

export function modifierFonction({commit}, formData){
    axios.put('/update_fonction' ,formData).then(response => {
        commit('MODIFIER_FONCTIONS', response.data)
    })

}


/**
 * Fin fonction MODIFIER_CLASSES
 * **/




/**
 * Gestion des classes
 */
export  function  getClasses({commit}) {

    queue.push(() =>  axios.get('/liste_classes').then(response => {
            // console.log(response.data)
            commit('GET_CLASSES', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterClasses({commit}, objetAjoute){
    axios.post('/add_classes', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_CLASSES', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerClasse({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_CLASSES', id)
        axios.delete('/delete_classes/' + id)

    }
}

export function modifierClasse({commit}, formData){
    axios.put('/update_classes' ,formData).then(response => {
        commit('MODIFIER_CLASSES', response.data)
    })

}
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin type acteur
 * **/





/**
 * Gestion des niveau etude
 */
export  function  getNiveauEtude({commit}) {

    queue.push(() => axios.get('/liste_niveau_etude').then(response => {
            // console.log(response.data)
            commit('GET_NIVEAU_ETUDE', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterNiveauEtude({commit}, objetAjoute){
    axios.post('/add_niveau_etude', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_NIVEAU_ETUDE', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerNiveauEtude({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_NIVEAU_ETUDE', id)
        axios.delete('/delete_niveau_etude/' + id)

    }
}

export function modifierNiveauEtude({commit}, formData){
    axios.put('/update_niveau_etude' ,formData).then(response => {
        commit('MODIFIER_NIVEAU_ETUDE', response.data)
    })

}
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin niveau
 * **/



/**
 * Gestion des types contrat
 */
export  function  getTypeContrat({commit}) {

    queue.push(() => axios.get('/liste_type_contrats').then(response => {
            // console.log(response.data)
            commit('GET_TYPE_CONTRAT', response.data)
        }).catch(error => console.log(error))
    );
}

// ajouter type acte personnel
export  function ajouterTypeContrat({commit}, objetAjoute){
    axios.post('/add_type_contrats', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_TYPE_CONTRAT', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerTypeContrat({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_TYPE_CONTRAT', id)
        axios.delete('/delete_type_contrats/' + id)

    }
}

export function modifierTypeContrat({commit}, formData){
    axios.put('/update_type_contrats' ,formData).then(response => {
        commit('MODIFIER_TYPE_CONTRAT', response.data)
    })

}
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin type acteur
 * **/




/**
 * Gestion des types salarie
 */
export  function  getTypeSalarie({commit}) {

    queue.push(() => axios.get('/liste_type_salarie').then(response => {
            // console.log(response.data)
            commit('GET_TYPE_SALARIE', response.data)
        }).catch(error => console.log(error))
    );

}

// ajouter type acte personnel
export  function ajouterTypeSalarie({commit}, objetAjoute){
    axios.post('/add_type_salarie', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_SALARIE', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerTypeSalarie({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")
    if(conf){
        commit('SUPPRIMER_TYPE_SALARIE', id)
        axios.delete('/delete_type_salarie/' + id)
    }
}

export function modifieTypeSalaire({commit}, formData){
    axios.put('/update_type_salarie' ,formData).then(response => {
        commit('MODIFIER_TYPE_SALARIE', response.data)
    })

}

export  function  allActeurDepense({commit}) {
    queue.push(() => axios.get('/liste_all_acteur_depense').then(response => {
            // console.log(response.data)
            commit('GET_ALL_ACTEURDEPENSE', response.data)
        }).catch(error => console.log(error))
    );


}
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin type salaires
 * **/


/**
 * Gestion des echelons
 */
export  function  getEchelons({commit}) {

    queue.push(() =>axios.get('/liste_echellon').then(response => {
            // console.log(response.data)
            commit('GET_ECHELONS', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterEchelons({commit}, objetAjoute){
    axios.post('/add_echellon', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_ECHELONS', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerEchelons({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_ECHELONS', id)
        axios.delete('/delete_echellon/' + id)

    }
}

// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin echelons
 * **/







/**
 * Gestion des grades
 */
export  function  getGrades({commit}) {

    queue.push(() =>  axios.get('/liste_grade').then(response => {
            // console.log(response.data)
            commit('GET_GRADE', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterGrades({commit}, objetAjoute){
    axios.post('/add_grade', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_GRADE', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerGrades({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_GRADE', id)
        axios.delete('/delete_grade/' + id)

    }
}

// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin grades
 * **/

export  function  getActeur({commit}) {

    queue.push(() =>  axios.get('/liste_acteur_depense').then(response => {
        // console.log(response.data)
        commit('GET_ACTEURS', response.data)
    }).catch(error => console.log(error)));

}



// ajouter type acte personnel
export  function ajouterActeur({commit}, objetAjoute){
    axios.post('/nouveau_acteur_depense', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_ACTEURS', res.data)
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerActeurs({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")

    if(conf){
        commit('SUPPRIMER_ACTEURS', id)
        axios.delete('/delete_acteur_depense/' + id)
    }
}


export  function  getNbrActeurAcrediteTaux({commit}) {
    queue.push(() =>  axios.get('/nbrActeurAcrediteTaux').then(response => {
            // console.log(response.data)
            commit('NOMBRE_TAUX_ACTEURS', response.data)
        }).catch(error => console.log(error))
    );

}
export  function  DetailActeur({commit},id) {
    axios.get('/show_acteur_depense/'+id).then(response => {
        commit('DETAIL_ACTEURS', response.data)
    }).catch(error => console.log(error));
}
export  function  getSalaireActuelActeur({commit}, id) {
    axios.get('/salaireActuelPersonnel/'+id).then(response => {
        // console.log(response.data)
        commit('SALAIRE_ACTUEL_ACTEURS', response.data)
    }).catch(error => console.log(error))

}

export  function  getAllSallairesActeurs({commit}, id) {
    axios.get('/allSallairePersonnel/'+id).then(response => {
        // console.log(response.data)
        commit('ALL_SALAIRE_ACTEUR', response.data)
    }).catch(error => console.log(error))

}
export  function  getActPersonnel({commit}) {
    queue.push(() =>  axios.get('/liste_act_personnel').then(response => {
        // console.log(response.data)
        commit('GET_ACT_PERSONNEL', response.data)
    }).catch(error => console.log(error)));
}

// ajouter type acte personnel
export  function modifierActeurDepense({commit}, objetModifie,config){
    axios.post('/add_act_nomination', objetModifie,config ).then(res => {
        if(res.status == 201){
            commit('MODIFIER_ACT_PERSONNEL', res.data)
        }
    }).catch(error => console.log(error))
}

// ajouter type acte personnel
export  function modifierActeurDepenses({commit}, objetModifie){
    axios.put('/update_act_personnel', objetModifie ).then(res => {
        if(res.status == 201){
            commit('MODIFIER_ACT_PERSONNEL', res.data)
        }
    }).catch(error => console.log(error))
}




export  function  getLoadActeurDepense({commit}, id) {
    axios.get('/loading_personnel/'+id).then(response => {
        // console.log(response.data)
        commit('GET_LOAD_ACT_PERSONNEL', response.data)
    }).catch(error => console.log(error))

}



export  function  getConges({commit}) {
    queue.push(() =>  axios.get('/liste_conge_acteur').then(response => {
        // console.log(response.data)
        commit('GET_CONGES', response.data)
    }).catch(error => console.log(error)));
}

export  function  loadCongeActeur({commit}, id) {
    axios.get('/conge_by_users/'+id).then(response => {
        // console.log(response.data)
        commit('LOAD_CONGE_ACTEUR_DEPENSE', response.data)
    }).catch(error => console.log(error))

}


export  function  jourCongeDisponible({commit}, id) {
    axios.get('/jourCongeDisponibleByAgence/'+id).then(response => {
        // console.log(response.data)
        commit('JOUR_CONGE_DISPONIBLE_ACTEUR', response.data)
    }).catch(error => console.log(error))

}

export  function ajouterConges({commit}, objetModifie){
    axios.post('/add_conge_acteur', objetModifie ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_CONGES', res.data)
        }
    }).catch(error => console.log(error))
}

export function supprimerConge({commit}, id){
    let conf = confirm("Voulez vouz vraiment supprimer ?")
    if(conf){
        commit('SUPPRIMER_CONGES', id)
        axios.delete('/delete_conge_acteur/' + id)
    }
}

export  function modifierConges({commit}, objetModifie){
    axios.post('/update_conge_acteur', objetModifie ).then(res => {
        if(res.status == 201){
            commit('MODIFIER_CONGES', res.data)
        }
    }).catch(error => console.log(error))
}

export  function ajouterActeDepense({commit}, objetAjoute){
    axios.post('/add_act_personnel', objetAjoute ).then(res => {
        if(res.status == 201){
            commit('AJOUTER_ACT_PERSONNEL', res.data)
        }
    }).catch(error => console.log(error))
}

export  function  tempMoyenFinActiviteInterruption({commit}, id) {
    axios.get('/temps_moyen_fin_activite_and_interuption/'+id).then(response => {
        // console.log(response.data)
        commit('LOAD_TEMPS_MOYEN_FIN_ACTIVITE_AND_INTERRUPRION', response.data)
    }).catch(error => console.log(error))

}


export  function  delaiMiseDispositionAct({commit}, id) {
    axios.get('/delaisMiseDispositionActnomination/'+id).then(response => {
        // console.log(response.data)
        commit('DELAI_DISPOSITION_ACT', response.data)
    }).catch(error => console.log(error))

}

// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin grades
 * **/

