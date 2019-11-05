 
 //import {groupBy} from '../../../Repositories/Repository'

export const categories_missions = state => state.categories_missions.sort((a,b)=>(a.code>b.code)? 1:-1)

export const imputations = state =>state.imputations.sort((a,b)=>(a.code>b.code)? 1:-1)

export const missions = state => state.missions.sort((a,b)=>(a.code>b.code)? 1:-1)


 export const  montantTotalDeToutesLesMissions = (state, getters) => {
  const val =  getters.missions.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
   if(isNaN(val)) return null
   return val
 }

 export const nombreTotalDeTouteMissions  = state => parseFloat(state.missions.length)


 export const dureeDeTouteLesMissions = (state, getters) => getters.missions.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.duree), 0 )

 
 export const dureeMoyenneDeTouteLesMissions  = (state, getters) => {
  const val = (getters.dureeDeTouteLesMissions / getters.nombreTotalDeTouteMissions).toFixed(2)
  if(isNaN(val)) return null
  return val
             
 }
//  export const coutMoyenDeMissions = (state, getters) => {
//    const val = (getters.montantTotalDeToutesLesMissions / getters.)
//  }

 export const coutMoyenDeBilletAvionDeMissions = (state, getters) => {
  const val = (getters.montantTotalDeToutesLesMissions / getters.nombreTotalDeTouteMissions).toFixed(2)
   if(isNaN(val)) return null
   return val
 } 

 export const  coutTotalMission = (state, getters) => getters.missions.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cout_total),  0)

 export const coutMoyenDeMissions = (state, getters) => {
   const val = (getters.coutTotalMission / getters.nombreTotalDeTouteMissions)
   if(isNaN(val)) return null
   return val
 }
// le taux de rejet de dossier de missions
 export const totalDeDossierRejetMissions = state => state.missions.filter( varDossierrejeter => varDossierrejeter.decision_cf == 2).length;


 export const tauxDossierRejetMissions = (state, getters) => {

    const val = (getters.totalDeDossierRejetMissions * 100 / getters.nombreTotalDeTouteMissions).toFixed(2)
    if(isNaN(val)) return null
    return val
 }
 

// le taux de dossier valider
 export const totalDossierValiderMissions = state => state.missions.filter( varDossiervalider => varDossiervalider.decision_cf == 0).length;


 export const tauxValiderDossierMissions = (state, getters) =>{

   const val = (getters.totalDossierValiderMissions * 100 / getters.nombreTotalDeTouteMissions).toFixed(2)
    if(isNaN(val)) return null
    return val
 }
  

// le taux de dossier differee
 export const totalDossierDiffereemission = state => state.missions.filter( varDossierDifferer => varDossierDifferer.decision_cf == 1).length;

 export const tauxDiffererDossiermission = (state, getters) =>{
   const val = (getters.totalDossierDiffereemission * 100 / getters.nombreTotalDeTouteMissions).toFixed(2)
    if(isNaN(val)) return null
    return val

 } 




 // affichage des missions total par unite administrative
//   export const nombreDeMissionParUniteAdministrative =  (state, getters) => (getters.getMissionPersonnaliser).length;


// export const dureeMoyenneDeMissionParUniteAdministrative = (state, getters) =>{
// const val =   (getters.getMissionPersonnaliser / getMissionPersonnaliser)
// if(isNaN(val))  return null
// return val
// } 


  export const nombreDeMissionParActeurPersonnel = (state, getters) => (getters.getMissionPersonnaliser).length;
 
  //state => state.missions.filter(varUa => varUa.ua_id !=='ua_id').length;

  








 export  const getMissionPersonnaliser = (state, getters,rootState, rootGetters) =>
 state.missions.map(element => {
     if(element.exercice_budgetaire_id !== null && element.acte_personnel_id !== null && element.ua_id !== null ){
         element = {
             ...element,
             objetExerciceBudegetaire:rootGetters['parametreGenerauxAdministratif/exercices_budgetaires'].find(
                 exo => exo.id == element.exercice_budgetaire_id
             ),
            objetActeurDepense:rootGetters['personnelUA/all_acteur_depense'].find(
               depens => depens.id == element.acte_personnel_id
            ),
            objetUniteAdministrative:rootGetters['uniteadministrative/uniteAdministratives'].find(
                plans => plans.id == element.ua_id
             )
         }
         
     }
     return element;
 })

//   const searchFormat = (state, getters,rootState, rootGetters) => {
//     return (exercice, ua, acteur) => getters.getMissionPersonnaliser.filter(item =>{
//         if(exercice && ua && acteur){
//             return item.exerciceBu.id === exercice 
//             && item.exoDepense.id === acteur
//             && item.exoplans.id === ua

//         }else if(exercice && ua && !acteur){
//             return item.exerciceBu.id === exercice 
//             && item.exoplans.id === ua
//         }else if(exercice && !ua && !acteur){
//             return item.exerciceBu.id === exercice 
           
//         }else if(exercice && !ua && acteur){
//             return item.exerciceBu.id === exercice 
//             && item.exoDepense.id === acteur
//         }
//     });
//   }
