

// get all titres
const GET_TITRES = (state, tableau_titres) => {
    state.titres = tableau_titres
}

// ajouter un titre 
const AJOUTER_TITRE = (state, nouvel_objet) => {
    state.titres.unshift(nouvel_objet)
   // state.titres = [...nouvel_objet, ...state.titres]

}

// supprimer titre
const SUPPRIMER_TITRE = (state, id) => {
    state.titres = state.titres.filter(titre => titre.id != id)
}

// modifier titre
const MODIFIER_TITRE = (state, objetModifie) => 
{state.titres = state.titres.map(titre => {

        if(titre.id == objetModifie.id){
            titre = {...objetModifie}
        }
        return titre
    })
}

// get all exercices budgétaires
const GET_EXERCICES_BUDGETAIRES = (state, tableau_exercices_budgetaires) => {
    state.exercices_budgetaires = tableau_exercices_budgetaires
}
// ajout exercice budgetaire 
const AJOUTER_EXERCICE_BUDGETAIRES = (state , nouvel_objet) => {
    state.exercices_budgetaires.unshift(nouvel_objet)
}
// modifier exrecice budgetaire
const MODIFIER_EXERCICE_BUDGETAIRE = (state , objetModifie) => {

    state.exercices_budgetaires = state.exercices_budgetaires.map(exercice_budgetaire => {

        if(exercice_budgetaire.id == objetModifie.id){
            exercice_budgetaire = {...objetModifie}
        }
        return exercice_budgetaire
    })

}
// supprimer exercice budgetaire

const SUPPRIMER_EXERCICE_BUDGETAIRE = (state , id) => {
 state.exercices_budgetaires = 
 state.exercices_budgetaires.filter(exercice_budgetaire =>  exercice_budgetaire.id != id)

}
// get all nature section
const GET_NATURE_SECTION = (state, tableau_nature_section) => {
    state.natures_sections = tableau_nature_section
}
// ajouter nature de section
const AJOUTER_NATURE_SECTION = (state, nouvel_objet) => {

    
    state.natures_sections.unshift(nouvel_objet)
}

// modifier nature de section
const MODIFIER_NATURE_SECTION = (state, objetModifie) =>{

    state.natures_sections = state.natures_sections.map(nature_section =>{
        if(nature_section.id == objetModifie.id){
            nature_section = {...objetModifie}
        }
        return nature_section
    })
}

// supprimer nature de section
const SUPPRIMER_NATURE_SECTION = (state , id) => {
    state.natures_sections = state.natures_sections.filter(nature_section => nature_section.id !=id)
}




// get all  section
const GET_SECTION = (state, tableau_section) => {
    state.sections = tableau_section
}
// ajouter nature de section
const AJOUTER_SECTION = (state, nouvel_objet) => {

    state.sections.unshift(nouvel_objet)
}

// modifier nature de section
const MODIFIER_SECTION = (state, objetModifie) =>{

    state.sections = state.sections.map(section =>{
        if(section.id == objetModifie.id){
            section = {...objetModifie}
        }
        return section
    })
}

// supprimer nature de section
const SUPPRIMER_SECTION = (state , id) => {
    state.sections = state.sections.filter(section => section.id !=id)
}





// get all structure programme
const GET_STRUCTURE_PROGRAMME = (state, tableau_structure_programme) => {

    state.structures_programmes = tableau_structure_programme
}
// ajouter structure programme
const AJOUTER_STRUCTURE_PROGRAMME = (state, nouveau_element)=> {

    state.structures_programmes.unshift(nouveau_element)
}

// mopdifier structure programme
const MODIFIER_STRUCTURE_PROGRAMME = (state ,elementModif) => {
    state.structures_programmes = state.structures_programmes.map(structure_programme => {
        if(structure_programme.id == elementModif.id) {
            structure_programme = {...elementModif}
        }
        return structure_programme
    })
}

// supprimer structure programme
const SUPPRIMER_STRUCTURE_PROGRAMME = (state, id) => {
    state.structures_programmes= 
    state.structures_programmes.filter(structure_programme => structure_programme.id !=id)
}

// get alll structure administrative
const GET_STRUCTURE_ADMINISTATIVE = (state, tableau_structure_administrative) =>{

    state.structures_administratives = tableau_structure_administrative
}
// ajouter structure administrative 
const AJOUTER_STRUCTURE_ADMINISTRATIVE = (state, nouvel_objet) =>{
    state.structures_administratives.unshift(nouvel_objet)

}
// modifier structure administrative
const MODIFIER_STRUCTURE_ADMINISTRATIVE = (state, objetModifie) => {
 
   state.structures_administratives = state.structures_administratives.map(structure_administative =>{
       if(structure_administative.id == objetModifie.id){
        structure_administative = {...objetModifie}
       }
       return structure_administative
   })

}
// supprimer structure administrative
const SUPPRIMER_STRUCTURE_ADMINISTRATIVE = (state, id) =>{
   state.structures_administratives = state.structures_administratives.filter(structure_administrative =>
       structure_administrative.id != id
   )
}

// get all plan programme
const GET_PLAN_PROGRAMME = (state , tableau_plan_programme) => {

    state.plans_programmes = tableau_plan_programme
}

// ajouter plan programme
const AJOUTER_PLAN_PROGRAMME = (state , objetAjout) =>{
    state.plans_programmes.unshift(objetAjout)
}
// modifier plan programme
const MODIFIER_PLAN_PROGRAMME = (state, nouveau_objet) =>{
    state.plans_programmes = state.plans_programmes.map( plan_programme => {
        if(plan_programme.id == nouveau_objet.id){
            plan_programme = {...nouveau_objet}
        }
        return plan_programme
    })
}

// supprimer plan programme
const SUPPRIMER_PLAN_PROGRAMME = (state,id) =>{
    state.plans_programmes = state.plans_programmes.filter( plan_proramme =>
        plan_proramme.id != id
    )
}


// get all service gestionnaire
const GET_SERVICE_GESTIONNAIRE = (state, tableau_service_gestionnaire) => {
    state.services_gestionnaires = tableau_service_gestionnaire
}
// ajouter serveice gestionnaire
const AJOUTER_SERVICE_GESTIONNAIRE = (state , nouveau_element) => {
 state.services_gestionnaires.unshift(nouveau_element)
}


// modifier service gestionnaire
const MODIFIER_SERVICE_GESTIONNAIRE = (state, objetModifie) => {
    state.services_gestionnaires = state.services_gestionnaires.map(service_gestionnaire =>{
       if(service_gestionnaire.id == objetModifie.id){
        service_gestionnaire = {...objetModifie}
       }
       return service_gestionnaire
    })
    
}
// supprimer service gestionnaire
const SUPPRIMER_SERVICE_GESTIONNAIRE = (state, id) => {
    state.services_gestionnaires = state.services_gestionnaires.filter(gestionnaire => gestionnaire.id !=id
    )
}






// get all chapitre
const GET_CHAPITRE = (state, tableau_chapitre) => {
    state.chapitres = tableau_chapitre
}
// ajouter chapitre
const AJOUTER_CHAPITRE = (state , nouveau_element) => {
 state.chapitres.unshift(nouveau_element)
}


// modifier chapitre
const MODIFIER_CHAPITRE = (state, objetModifie) => {
    state.chapitres = state.chapitres.map(chapitre =>{
       if(chapitre.id == objetModifie.id){
        chapitre = {...objetModifie}
       }
       return chapitre
    })
    
}
// supprimer chapitre
const SUPPRIMER_CHAPITRE = (state, id) => {
    state.chapitres = state.chapitres.filter(chapitre => chapitre.id != id)
    }


// grande nature depense
  const GET_GRANDE_NATURE = (state, tableau_grande_nature) => {

    state.grandes_natures = tableau_grande_nature
  }

  // ajouter grande nature depense
  const AJOUTER_GRANDE_NATURE = (state , objetAjout) => {
      state.grandes_natures.unshift(objetAjout)
  }

  // modifier grande nature
  const MODIFIER_GRANDE_NATURE = (state , objetModifie) => {
      state.grandes_natures = state.grandes_natures.map( grande_nature =>{
         if( grande_nature.id == objetModifie.id){
             grande_nature = {...objetModifie}

                     }
                     return grande_nature
      })
  }

  // supprimer grande nature
  const SUPPRIMER_GRANDE_NATURE = (state, id) => {
     state.grandes_natures = state.grandes_natures.filter(grande_nature =>  grande_nature.id !=id)

  }

  // get all structure fonctionnelle
  const GET_STRUCTURE_GEOGRAPHIQUE = (state, tableau_structure_geographique) => {

    state.structures_geographiques = tableau_structure_geographique
  }

  // ajouter structure geographique
  const AJOUTER_STRUCTURE_GEOGRAPHIQUE = (state, nouveauObjet) => {
      state.structures_geographiques.unshift(nouveauObjet)
  }
  // modifier structure geographique
  const MODIFIER_STRUCTURE_GEOGRAPHIQUE = (state, objetModifie) => {
      state.structures_geographiques = state.structures_geographiques.map(geographie => {
          if(geographie.id == objetModifie.id){
              geographie = {...objetModifie}
          }
          return geographie
      })
  }

  // supprimer structure geographique
  const SUPPRIMER_STRUCTURE_GEOGRAPHIQUE = (state, id) => {
   state.structures_geographiques = state.structures_geographiques.filter(geographie => geographie.id !=id)

  }



// export localisation geographique

// get all localisation geographique
const GET_LOCALISATION_GEOGRAPHIQUE = (state, tableau_localisation_geographique) => {

    state.localisations_geographiques = tableau_localisation_geographique
  }

  // ajouter localisation geographique
  const AJOUTER_LOCALISATION_GEOGRAPHIQUE = (state, nouveauObjet) => {
      state.localisations_geographiques.unshift(nouveauObjet)
  }
  // modifier localisation geographique
  const MODIFIER_LOCALISATION_GEOGRAPHIQUE = (state, objetModifie) => {
      state.localisations_geographiques = state.localisations_geographiques.map(geographie => {
          if(geographie.id == objetModifie.id){
              geographie = {...objetModifie}
          }
          return geographie
      })
  }

  // supprimer localisation geographique
  const SUPPRIMER_LOCALISATION_GEOGRAPHIQUE = (state, id) => {
   state.localisations_geographiques = state.localisations_geographiques.filter(geographie => geographie.id !=id)

  }







export {
    // exportation titre
GET_TITRES,
AJOUTER_TITRE,
SUPPRIMER_TITRE,
MODIFIER_TITRE,
// exportationt exercice budgetaire
GET_EXERCICES_BUDGETAIRES,
AJOUTER_EXERCICE_BUDGETAIRES,
MODIFIER_EXERCICE_BUDGETAIRE,
SUPPRIMER_EXERCICE_BUDGETAIRE,

// exportation nature de section
GET_NATURE_SECTION,
AJOUTER_NATURE_SECTION,
MODIFIER_NATURE_SECTION,
SUPPRIMER_NATURE_SECTION,

// exportation section
GET_SECTION,
AJOUTER_SECTION,
MODIFIER_SECTION,
SUPPRIMER_SECTION,
// exportaytion structure programme
GET_STRUCTURE_PROGRAMME,
AJOUTER_STRUCTURE_PROGRAMME,
MODIFIER_STRUCTURE_PROGRAMME,
SUPPRIMER_STRUCTURE_PROGRAMME,

// export structure administrative
GET_STRUCTURE_ADMINISTATIVE,
AJOUTER_STRUCTURE_ADMINISTRATIVE,
MODIFIER_STRUCTURE_ADMINISTRATIVE,
SUPPRIMER_STRUCTURE_ADMINISTRATIVE,

// exportation plan programme
GET_PLAN_PROGRAMME,
AJOUTER_PLAN_PROGRAMME,
MODIFIER_PLAN_PROGRAMME,
SUPPRIMER_PLAN_PROGRAMME,

// exportation service gestionnaire
GET_SERVICE_GESTIONNAIRE,
AJOUTER_SERVICE_GESTIONNAIRE,
MODIFIER_SERVICE_GESTIONNAIRE,
SUPPRIMER_SERVICE_GESTIONNAIRE,

// exportation chapitre
GET_CHAPITRE,
AJOUTER_CHAPITRE,
MODIFIER_CHAPITRE,
SUPPRIMER_CHAPITRE,

// exportation grande nature
GET_GRANDE_NATURE,
AJOUTER_GRANDE_NATURE,
MODIFIER_GRANDE_NATURE,
SUPPRIMER_GRANDE_NATURE,
// exportation de structure geographique
GET_STRUCTURE_GEOGRAPHIQUE,
AJOUTER_STRUCTURE_GEOGRAPHIQUE,
MODIFIER_STRUCTURE_GEOGRAPHIQUE,
SUPPRIMER_STRUCTURE_GEOGRAPHIQUE,

// exportation localisation geographique
GET_LOCALISATION_GEOGRAPHIQUE,
AJOUTER_LOCALISATION_GEOGRAPHIQUE,
MODIFIER_LOCALISATION_GEOGRAPHIQUE,
SUPPRIMER_LOCALISATION_GEOGRAPHIQUE
}


