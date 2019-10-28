/**
 * Mutation type act personnel
 */
/**
 * Recuperation des type act
 * @param state
 * @param tableau_type_acte_personnels
 * @constructor
 */
const GET_TYPE_ACTE_PERSONNELS = (state, tableau_type_acte_personnels) => {
    state.type_acte_personnels = tableau_type_acte_personnels
}

/**
 * Ajouter type act personnel
 * @param state
 * @param nouvel_objet
 * @constructor
 */
const AJOUTER_TYPE_ACTE_PERSONNELS = (state, nouvel_objet) => {
    state.type_acte_personnels.unshift(nouvel_objet)
   // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_TYPE_ACTE_PERSONNELS= (state, id) => {
    state.type_acte_personnels = state.type_acte_personnels.filter(titre => titre.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_TYPE_ACTE_PERSONNELS = (state, objetModifie) => {
    state.type_acte_personnels = state.type_acte_personnels.map(type_acte_personnel => {
        if(type_acte_personnel.id == objetModifie.id){
            type_acte_personnel = {...objetModifie}
        }
        return type_acte_personnel
    })
}

/**
 * Fin de type acte
 */


/**
 * Mutation fonctions
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_FONCTIONS = (state, data) => {
    state.fonctions = data
}


const AJOUTER_FOCNTIONS = (state, nouvel_objet) => {
    state.fonctions.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_FONCTIONS= (state, id) => {
    state.fonctions = state.fonctions.filter(fonction => fonction.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_FONCTIONS = (state, objetModifie) => {
    state.fonctions = state.fonctions.map(fonction => {
        if(fonction.id == objetModifie.id){
            fonction = {...objetModifie}
        }
        return fonction
    })
}

/**
 * Fin de type acte
 */




/**
 * Mutation classe
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_CLASSES = (state, data) => {
    state.classes = data
}


const AJOUTER_CLASSES = (state, nouvel_objet) => {
    state.classes.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_CLASSES= (state, id) => {
    state.classes = state.classes.filter(classe => classe.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_CLASSES = (state, id, objetModifie) => {
    state.classes = state.classes.map(classe => {
        if(classe.id == objetModifie.id){
            classe = {...objetModifie}
        }
        return classe
    })
}

/**
 * Fin de classes
 */




/**
 * Mutation niveau etude
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_NIVEAU_ETUDE = (state, data) => {
    state.niveau_etudes = data
}


const AJOUTER_NIVEAU_ETUDE = (state, nouvel_objet) => {
    state.niveau_etudes.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_NIVEAU_ETUDE= (state, id) => {
    state.niveau_etudes = state.niveau_etudes.filter(classe => classe.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_NIVEAU_ETUDE = (state, id, objetModifie) => {
    state.niveau_etudes = state.niveau_etudes.map(classe => {
        if(classe.id == objetModifie.id){
            classe = {...objetModifie}
        }
        return classe
    })
}

/**
 * Fin de niveau etude
 */






/**
 * Mutation type contrat
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_TYPE_CONTRAT = (state, data) => {
    state.type_contrats = data
}


const AJOUTER_TYPE_CONTRAT = (state, nouvel_objet) => {
    state.type_contrats.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_TYPE_CONTRAT= (state, id) => {
    state.type_contrats = state.type_contrats.filter(type_contrat => type_contrat.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_TYPE_CONTRAT = (state, objetModifie) => {
    state.type_contrats = state.type_contrats.map(type_contrat => {
        if(type_contrat.id == objetModifie.id){
            type_contrat = {...objetModifie}
        }
        return type_contrat
    })
}

/**
 * Fin type contrat
 */

/**
 * Mutation type type salaire
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_TYPE_SALARIE = (state, data) => {
    state.type_salaries = data
}


const AJOUTER_SALARIE = (state, nouvel_objet) => {
    state.type_salaries.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_TYPE_SALARIE= (state, id) => {
    state.type_salaries = state.type_salaries.filter(type_salarie => type_salarie.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_TYPE_SALARIE = (state,  objetModifie) => {
    state.type_salaries = state.type_salaries.map(type_salarie => {
        if(type_salarie.id == objetModifie.id){
            type_salarie = {...objetModifie}
        }
        return type_salarie
    })
}

/**
 * Fin type salarie
 */


/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_ECHELONS = (state, data) => {
    state.echellons = data
}


const AJOUTER_ECHELONS = (state, nouvel_objet) => {
    state.echellons.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_ECHELONS= (state, id) => {
    state.echellons = state.echellons.filter(echellon => echellon.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_ECHELONS = (state,  objetModifie) => {
    state.echellons = state.echellons.map(echellon => {
        if(echellon.id == objetModifie.id){
            echellon = {...objetModifie}
        }
        return echellon
    })
}

/**
 * Fin echelons
 */




/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_GRADE = (state, data) => {
    state.grades = data
}


const AJOUTER_GRADE = (state, nouvel_objet) => {
    state.grades.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_GRADE= (state, id) => {
    state.grades = state.grades.filter(grade => grade.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_GRADE = (state, objetModifie) => {
    state.grades = state.grades.map(grade => {
        if(grade.id == objetModifie.id){
            grade = {...objetModifie}
        }
        return grade
    })
}

/**
 * Fin echelons
 */





/**
 * Mutation acteurs
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_ACTEURS = (state, data) => {
    state.acteur_depenses = data
}

const DETAIL_ACTEURS = (state, data) => {
    state.detail_acteurs = data
}

const AJOUTER_ACTEURS = (state, nouvel_objet) => {
    state.acteur_depenses.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}


const GET_ALL_ACTEURDEPENSE = (state, data) => {
    state.all_acteur_depense = data
}
/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_ACTEURS= (state, id) => {
    state.acteur_depenses = state.acteur_depenses.filter(acteur_depense => acteur_depense.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_ACTEURS = (state,  objetModifie) => {
    state.acteur_depenses = state.acteur_depenses.map(acteur_depense => {
        if(acteur_depense.id == objetModifie.id){
            acteur_depense = {...objetModifie}
        }
        return acteur_depense
    })
}


const NOMBRE_TAUX_ACTEURS = (state, data) => {
    state.nbr_acteur_actredite_taux = data
}

const SALAIRE_ACTUEL_ACTEURS = (state, data) => {
    state.salaire_actuel_acteur = data
}

const ALL_SALAIRE_ACTEUR = (state, data) => {
    state.all_salaires_acteurs = data
}

/**
 * Fin echelons
 */

const GET_ACT_PERSONNEL = (state, data) => {
    state.acte_personnels = data
}

const AJOUTER_ACT_PERSONNEL = (state, nouvel_objet) => {
    state.acte_personnels.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_ACT_PERSONNEL= (state, id) => {
    state.acte_personnels = state.acte_personnels.filter(acte_personnel => acte_personnel.id != id)
}


const GET_LOAD_ACT_PERSONNEL = (state, data) => {
    state.load_act_personnel_acteur = data
}


const GET_CONGES = (state, data) => {
    state.conges = data
}


const AJOUTER_CONGES = (state, nouvel_objet) => {
    state.conges.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

const SUPPRIMER_CONGES= (state, id) => {
    state.conges = state.conges.filter(conge => conge.id != id)
}

const MODIFIER_CONGES = (state,  objetModifie) => {
    state.conges = state.conges.map(conge => {
        if(conge.id == objetModifie.id){
            conge = {...objetModifie}
        }
        return conge
    })
}


const LOAD_CONGE_ACTEUR_DEPENSE= (state, data) => {
    state.conge_acteur_depense = data
}

const LOAD_TEMPS_MOYEN_FIN_ACTIVITE_AND_INTERRUPRION= (state, data) => {
    state.temp_moyen_fin_activite_interruption = data
}

const DELAI_DISPOSITION_ACT= (state, data) => {
    state.delais_mise_disposition_act = data
}

const JOUR_CONGE_DISPONIBLE_ACTEUR= (state, data) => {
    state.jour_conge_disponible_acteur = data
}


/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
const MODIFIER_ACT_PERSONNEL = (state,  objetModifie) => {
    state.acte_personnels = state.acte_personnels.map(acte_personnel => {
        if(acte_personnel.id == objetModifie.id){
            acte_personnel = {...objetModifie}
        }
        return acte_personnel
    })
}

export {
    GET_TYPE_ACTE_PERSONNELS,
    AJOUTER_TYPE_ACTE_PERSONNELS,
    SUPPRIMER_TYPE_ACTE_PERSONNELS,
    MODIFIER_TYPE_ACTE_PERSONNELS,
    AJOUTER_FOCNTIONS,
    GET_FONCTIONS,
    SUPPRIMER_FONCTIONS,
    MODIFIER_FONCTIONS,
    AJOUTER_CLASSES,
    MODIFIER_CLASSES,
    SUPPRIMER_CLASSES,
    GET_CLASSES,
    GET_NIVEAU_ETUDE,
    AJOUTER_NIVEAU_ETUDE,
    MODIFIER_NIVEAU_ETUDE,
    SUPPRIMER_NIVEAU_ETUDE,
    GET_TYPE_CONTRAT,
    AJOUTER_TYPE_CONTRAT,
    SUPPRIMER_TYPE_CONTRAT,
    MODIFIER_TYPE_CONTRAT,
    GET_TYPE_SALARIE,
    SUPPRIMER_TYPE_SALARIE,
    AJOUTER_SALARIE,
    MODIFIER_TYPE_SALARIE,
    AJOUTER_ECHELONS,
    GET_ECHELONS,
    SUPPRIMER_ECHELONS,
    MODIFIER_ECHELONS,
    GET_GRADE,
    AJOUTER_GRADE,
    SUPPRIMER_GRADE,
    MODIFIER_GRADE,
    GET_ACTEURS,
    AJOUTER_ACTEURS,
    SUPPRIMER_ACTEURS,
    MODIFIER_ACTEURS,
    NOMBRE_TAUX_ACTEURS,
    DETAIL_ACTEURS,
    SALAIRE_ACTUEL_ACTEURS,
    ALL_SALAIRE_ACTEUR,
    AJOUTER_ACT_PERSONNEL,
    MODIFIER_ACT_PERSONNEL,
    GET_ACT_PERSONNEL,
    SUPPRIMER_ACT_PERSONNEL,
    GET_LOAD_ACT_PERSONNEL,
    GET_CONGES,
    MODIFIER_CONGES,
    AJOUTER_CONGES,
    SUPPRIMER_CONGES,
    LOAD_CONGE_ACTEUR_DEPENSE,
    GET_ALL_ACTEURDEPENSE,
    LOAD_TEMPS_MOYEN_FIN_ACTIVITE_AND_INTERRUPRION,
    DELAI_DISPOSITION_ACT,
    JOUR_CONGE_DISPONIBLE_ACTEUR
}
