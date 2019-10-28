

// get all unite
const GET_UNITE = (state , tableau_unite) => {
    state.unites = tableau_unite
}
// ajouter unite
const AJOUTER_UNITE = (state, nouveuObjet) => {
    state.unites.unshift(nouveuObjet)
}

// modifier unite
const MODIFIER_UNITE = (state, objetModifie) => {
    state.unites = state.unites.map(unite => {
       if( unite.id == objetModifie.id){
           unite = {...objetModifie}
       }
       return unite

    })
}


// supprimer unite

const SUPPRIMER_UNITE = (state , id) => {
    state.unites = state.unites.filter( unite => unite.id != id)
}


// get all zonz geographique
const GET_ZONE_GEOGRAPHIQUE = (state , tableau_unite) => {
    state.zones_geographiques = tableau_unite
}
// ajouter unite
const AJOUTER_ZONE_GEOGRAPHIQUE = (state, nouveuObjet) => {
    state.zones_geographiques.unshift(nouveuObjet)
}

// modifier unite
const MODIFIER_ZONE_GEOGRAPHIQUE = (state, objetModifie) => {
    state.zones_geographiques = state.zones_geographiques.map(unite => {
       if( unite.id == objetModifie.id){
           unite = {...objetModifie}
       }
       return unite

    })
}


// supprimer unite

const SUPPRIMER_ZONE_GEOGRAPHIQUE = (state , id) => {
    state.zones_geographiques = state.zones_geographiques.filter( unite => unite.id != id)
}
export {
    // exportation unite
    GET_UNITE,
    AJOUTER_UNITE,
    MODIFIER_UNITE,
    SUPPRIMER_UNITE,
    // zone geographique
    GET_ZONE_GEOGRAPHIQUE,
    AJOUTER_ZONE_GEOGRAPHIQUE,
    MODIFIER_ZONE_GEOGRAPHIQUE,
    SUPPRIMER_ZONE_GEOGRAPHIQUE

}


