  import {groupBy} from '../../../Repositories/Repository'


export const categories_missions = state => state.categories_missions.sort((a,b)=>(a.code>b.code)? 1:-1)

export const imputations = state =>state.imputations.sort((a,b)=>(a.code>b.code)? 1:-1)

export const missions = state => state.missions.sort((a,b)=>(a.code>b.code)? 1:-1)


 export const  montantTotalDeToutesLesMissions = (state, getters) => getters.missions.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0)

 export const dureeDeTouteLesMissions = (state, getters) => getters.missions.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.duree), 0 )

 export const nombreTotalDeTouteMissions  = state => parseFloat(state.missions.length)

 export const dureeMoyenneDeTouteLesMissions  = (state, getters) =>( getters.dureeDeTouteLesMissions / getters.nombreTotalDeTouteMissions).toFixed(2)

 export const coutMoyenDeBilletAvionMissions = (state, getters) => (getters.montantTotalDeToutesLesMissions / getters.nombreTotalDeTouteMissions).toFixed(2)
// le taux de rejet de dossier de missions
 export const totalDeDossierRejetMissions = state => state.missions.filter( varDossierrejeter => varDossierrejeter.decision_cf == 'rejetée').length;


 export const tauxDossierRejetMissions = (state, getters) => (getters.totalDeDossierRejetMissions * 100 / getters.nombreTotalDeTouteMissions).toFixed(2)

// le taux de dossier valider
 export const totalDossierValiderMissions = state => state.missions.filter( varDossiervalider => varDossiervalider.decision_cf == 'validée').length;


 export const tauxValiderDossierMissions = (state, getters) => (getters.totalDossierValiderMissions * 100 / getters.nombreTotalDeTouteMissions).toFixed(2)

// le taux de dossier differee
 export const totalDossierDiffereemission = state => state.missions.filter( varDossierDifferer => varDossierDifferer.decision_cf == 'differée').length;

 export const tauxDiffererDossiermission = (state, getters) => (getters.totalDossierDiffereemission * 100 / getters.nombreTotalDeTouteMissions).toFixed(2)




 // affichage des missions total par unite administrative
  export const nombreDeMissionParUA =  (state, getters) => (getters.ua_id !== 'ua_id').length

  //state => state.missions.filter(varUa => varUa.ua_id !=='ua_id').length;

  








 export  const getMissionPersonnaliser = (state, getters,rootState, rootGetters) =>
 state.missions.map(element => {
     if(element.exercice_budgetaire_id !== null && element.acte_personnel_id !== null && element.ua_id !== null ){
         element = {
             ...element,
             exoBugdet:rootGetters['parametreGenerauxAdministratif/exercices_budgetaires'].find(
                 exo => exo.id == element.exercice_budgetaire_id
             ),
            exoDepense:rootGetters['personnelUA/all_acteur_depense'].find(
               depens => depens.id == element.acte_personnel_id
            ),
            exoplans:rootGetters['uniteadministrative/uniteAdministratives'].find(
                plans => plans.id == element.ua_id
             )
         }
         
     }
     return element;
 })

  const searchFormat = (state, getters,rootState, rootGetters) => {
    return (exercice, ua, acteur) => getters.getMissionPersonnaliser.filter(item =>{
        if(exercice && ua && acteur){
            return item.exoBugdet.id === exercice 
            && item.exoDepense.id === acteur
            && item.exoplans.id === ua

        }else if(exercice && ua && !acteur){
            return item.exoBugdet.id === exercice 
            && item.exoplans.id === ua
        }else if(exercice && !ua && !acteur){
            return item.exoBugdet.id === exercice 
           
        }else if(exercice && !ua && acteur){
            return item.exoBugdet.id === exercice 
            && item.exoDepense.id === acteur
        }
    });
  }
