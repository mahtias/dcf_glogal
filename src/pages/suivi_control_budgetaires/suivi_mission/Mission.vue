
<template>
    <div class="container-fluid">
          <table>
            <tr>
              <td>
            
        <div class="quick-actions_homepage" style="position: center;">
      <ul class="quick-actions" >
        <li class="bg_lg " title="Nombre total de mission par unite administrative">
             <a href="#"> <span style="font-size:0.8em">nbre m. par UA </span>
             <i class="icon-eject"></i> <span class="label label-important"> 
                {{NombreDeMissionParUA(ua_id)}} 
               </span> 
               {{NomDeMissionParUA(ua_id)}}
              
             </a> </li>
               
              <li class="bg_lo" title="duree moynenne de missions par unite administrative ">
             <a href="#"> <span style="font-size: 0.8em;">durée m. par UA </span>
        <i class="icon-eject"></i><span class="label label-important">
            {{dureeMoyenneDemissionsParUA(ua_id)}} jrs 
            </span> 
            {{NomDeMissionParUA(ua_id)}}
              </a> </li>



             <li class="bg_ls" title="montant total de missions par unite administrative ">
             <a href="#"><span style="font-size:0.8em">MT par UA</span>
        <i class="icon-pencil"></i><span class="label label-important">
            {{formatageSomme(parseFloat(montantTotalParUA(ua_id)))}}  
            </span> 
            {{NomDeMissionParUA(ua_id)}}       
              </a> </li>

              <li class="bg_ls" title="cout moynen de missions par unite administrative ">
             <a href="#"> <span style="font-size: 0.8em;">cout moyen par UA </span>
        <i class="icon-eject"></i><span class="label label-important">
            {{formatageSomme(parseFloat(coutMoyenParUA(ua_id)))}}  
            </span> 
            {{NomDeMissionParUA(ua_id)}}
              </a> </li> 

             

    
               <li class="bg_lg" title="cout moynen de missions des billets d'avions par unite administrative ">
             <a href="#"> <span style="font-size: 0.8em;">CT. m. par UA </span>
        <i class="icon-eject"></i><span class="label label-important">
            {{formatageSomme(parseFloat(coutMoyenDeBilletAvionParUA(ua_id)))}}  
            </span> 
            {{NomDeMissionParUA(ua_id)}}
              </a> </li>

           <li class="bg_lg" title="taux de dossier de missions rejetés par unite administrative">
             <a href="#"> <span style="font-size: 0.8em;">taux r. par UA</span>
        <i class="icon-eject"></i><span class="label label-important">
            {{tauxDeDossierRejeterParUA(ua_id)}} %
            </span> 
            {{NomDeMissionParUA(ua_id)}}
              </a> </li>


        <li class="bg_ly" title="Nombre total de mission par acteur ">
             <a href="#"> <span style="font-size:0.8em">nbre m. par agent.</span> 
        <i class="icon-user"></i><span class="label label-success">
            {{NombreDemissionsParActeurDepense(acte_personnel_id)}} 
            </span> 
            {{nomParActeurDepense(acte_personnel_id)}}
             </a> </li>


               <li class="bg_ls" title="duree moynenne effectuée par un agent ">
             <a href="#"><span style="font-size:0.8em">durée m. par agent.</span>
        <i class="icon-user"></i><span class="label label-success">
            {{dureeMoyenneDeMissionsParActeurDeDepense(acte_personnel_id)}} jrs  
            </span> 
             {{nomParActeurDepense(acte_personnel_id)}} 
             </a> </li>


               <li class="bg_ly" title="montant total de missions effectuée par un agent  ">
             <a href="#"><span style="font-size:0.8em">MT par agent</span>
        <i class="icon-user"></i><span class="label label-success">
            {{formatageSomme(parseFloat(montantTotalParActeurDepense(acte_personnel_id)))}}  
            </span> 
             {{nomParActeurDepense(acte_personnel_id)}}
             </a> </li>
           
             <li class="bg_lr" title="cout moyen de missions effectuée par un agent  ">
             <a href="#"><span style="font-size:0.8em">CT m. par  agent</span>
        <i class="icon-user"></i><span class="label label-success">
            {{formatageSomme(parseFloat(coutMoyenParAgent(acte_personnel_id)))}}  
            </span> 
             {{nomParActeurDepense(acte_personnel_id)}}
             </a> </li>

         <li class="bg_ls" title="cout moyen de missions des billets d'avion par agent">
             <a href="#"><span style="font-size:0.8em">CT m. par agent</span>
        <i class="icon-user"></i><span class="label label-success">
            {{formatageSomme(parseFloat(coutMoyenBilletAvionParAgent(acte_personnel_id)))}}  
            </span> 
             {{nomParActeurDepense(acte_personnel_id)}}
             </a> </li>


<li class="bg_ls" title="Taux de dossiers de missions rejetés par agent">
             <a href="#"><span style="font-size:0.8em">Tx d. par agent</span>
        <i class="icon-user"></i><span class="label label-success">
            {{tauxDeDossierRejeterParAgent(acte_personnel_id)}} %  
            </span> 
             {{nomParActeurDepense(acte_personnel_id)}}
             </a> </li>
         </ul>
        </div>
              </td>
            </tr>
        </table>
        <hr>
    <div class="row-fluid">     

      <div class="span12">

      <div class="widget-box">

          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Toutes les missions</a></li>
                
              
            </ul>
           
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">

                                           <div>

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des Missions "
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="localisationsFiltre">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 
                                     </div> <br>

                               <div class="widget-box">
                                    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                                        <h5>Liste de toutes les missions  <br /></h5>
                                           
                                       
                                             
                                            
                                        <div align="right">
                                
                                            Rechercher: <input type="text" v-model="search">
                                           
                                        </div>
                                        
                                    </div>
                                    
                          <div class="widget-content nopadding" v-if="all_acteur_depense.length">
                                    <div class="" align="left">
                                      <!-- <div class="span3">
                                        Montrer: <select name="" id="">
                                            <option value="">10</option>
                                            <option value="">15</option>
                                            <option value="">20</option>
                                          </select>
                                      </div> -->

                                       <!-- <div class="span3">
                                          
                           <model-list-select style="background-color: rgb(222, 222, 222);"
                                           class="wide"

                                            :list="exercices_budgetaires"
                                            v-model="exercice_budgetaire_id"
                                                option-value="id"
                                                option-text="annee"
                                                placeholder="Exo ==> saisissez"
                                            >
                                        </model-list-select> 
                                       </div> -->

                                        <div class="span3">

                       <model-list-select style="background-color: rgb(222, 222, 222);"
                                           class="wide"
                                           
                                            :list="uniteAdministratives"
                                            v-model="ua_id"
                                                option-value="id"
                                                option-text="libelle"
                                                placeholder="UA ==> saisissez"
                                            >
                          
                                    </model-list-select> 
                                        </div>
                                        
                                         <div class="span3">


                                          <model-list-select style="background-color: rgb(222, 222, 222);"
                                           class="wide"

                                            :list="all_acteur_depense"
                                            v-model="acte_personnel_id"
                                                option-value="id"
                                                option-text="matricule"
                                                placeholder="Acte Dep ==> saisissez"
                                            >
                                           
                                    </model-list-select> 
                                           
                                                      </div> 
                                          <div align="right">
                                          <!-- <span @click.prevent="" class="btn">
                                            <i class="icon-search"></i></span> -->
                                            </div>
                                        </div> <br>

                       <table class="table table-bordered table-striped">
                          <thead>
                          <tr>
                   <th>Exercice budgetaires</th>
                  <th> Categorie mission</th>
                   <th>Objet</th>
                  <th> Type de mission</th>
                  <th>Date de mission</th>
                  <th>Decision du cf</th>
                  <th>Unité administrative</th>
                  <th>Acte personnel</th>
                   <th>Action</th>
                </tr>                              
              </thead> 
              <tbody>
                <tr class="odd gradeX" v-for="mission in 
                localisationsFiltre"
                 :key="mission.id">
                  <td @dblclick="afficherModalModifierMission(mission.id)">
                     {{mission.objetExerciceBudegetaire.annee}}</td> 
                  <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.categorie_mission.libelle || 'Non renseigné'}}</td> 
                 <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.objet || 'Non renseigné'}}</td>

                    <td 
                    @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.type_mission|| 'Non renseigné'}}
                      </td>

                      <td @dblclick="afficherModalModifierMission(mission.id)">

                      {{ formaterDate(mission.date_mission) || 'Non renseigné'}}</td>

                      <td v-if="mission.decision_cf == 0"
                       @dblclick="afficherModalModifierMission(mission.id)">
                       <span class="label label-success">Validé</span>
                       
                       </td>
                        <td v-else-if="mission.decision_cf == 1"
                       @dblclick="afficherModalModifierMission(mission.id)">
                       <span class="label label-warning">Différé</span>
                       
                       </td>
                         <td v-else
                       @dblclick="afficherModalModifierMission(mission.id)">
                       <span class="label label-important">Réjété</span>
                       
                       </td>

                 
                      
                       <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>
                            
                    <td @dblclick="afficherModalModifierMission(mission.id)">
                     {{mission.objetActeurDepense.matricule}}</td> 

                     
                    
                   

                  <td>


              <div class="btn-group">
                <router-link :to="{ name: 'DetailleMission', params: { id_mission: mission.id }}" 
                class="btn btn-default " title="Detail mission">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link> 
                    
              <button @click.prevent="supprimerMission(mission.id)"  class="btn btn-danger " 
              title="supprimer">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>
                  </td>
                </tr>
              </tbody>
            </table>

              </div>
              <div v-else>
                Aucunne mission
              </div>
               </div>

             </div>

                </div>
      </div>
      </div>
    </div> 
    
           <fab :actions="fabActions"
           main-icon="apps"
       @cache="AllerAPageAjouterMission"
        bg-color="green"

  ></fab>         
   </div>

</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
  import {  ModelListSelect } from 'vue-search-select'
  import 'vue-search-select/dist/VueSearchSelect.css'
  import moment from "moment";
  import {formatageSomme} from '../../../Repositories/Repository'


export default {
    components:{
   ModelListSelect,

    },
  
  data() {
    return {

         json_fields: {
            'Exercice budgetaire': 'objetExerciceBudegetaire.annee',
            'categorie': 'categorie_mission.libelle',
            'Objet': 'objet',
            'Type de mission': 'type_mission',
            'UA': 'objetUniteAdministrative.libelle',
           
        },

        fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
 exercice_budgetaire_id:"",
 ua_id:"",
 acte_personnel_id:"",


     formData:{},
     editMission:{},
          

    search:""
    };
  },

// mounted(){
//  this.formData = this.missions.find(
//    mission => mission.id == this.$router.params.id
//  )
// },
 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ["categories_missions", "getMissionPersonnaliser",
     
      // "nombreDeMissionParActeurPersonnel",
      // "dureeMoyenneDeMissionParUniteAdministrative"
   
    ]) ,

  

       ...mapGetters('personnelUA', ['all_acteur_depense']),
   ...mapGetters('uniteadministrative', ['uniteAdministratives']),
  ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),

  //  format(){
  //    return this.searchFormat(this.searchAnneeBudgetaire, this.searchUA, this.searchActeurDepense)
  //  },
    // methode pour trier un item
           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.getMissionPersonnaliser.filter((item) => {
  
     return item.objet.toLowerCase().includes(searchTerm) 
     || item.type_mission.toLowerCase().includes(searchTerm)
     || item.objetUniteAdministrative.libelle.toLowerCase().includes(searchTerm)
      || item.objetActeurDepense.matricule.toLowerCase().includes(searchTerm)

    //   const searchTrier = this.search.toLowerCase();
    //   return this.
    //  || item.searchUA.toLowerCase().includes(searchTerm)
    //  || item.searchActeurDepense.toLowerCase().includes(searchTerm)
  

   }
)
   },

    NombreDeMissionParUA () {
     return ua_id => {
       if(ua_id != "") {
         return this.getMissionPersonnaliser.filter(element => element.objetUniteAdministrative.id == ua_id ).length
       }
     }  
    },
    NomDeMissionParUA(){
  return ua_id =>{
    if(ua_id !=""){
      var ObjetUA = this.uniteAdministratives.find(element => element.id == ua_id)
      return ObjetUA.libelle
    }
  }
    },

    // duree moyenne par unite administrative
  DureeDeTouteMissionsParUA(){
   return ua_id => {
     if(ua_id !="") {
       return this.getMissionPersonnaliser.filter(element => element.objetUniteAdministrative.id == ua_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.duree),0) 
     
     }
   }
 },

 dureeMoyenneDemissionsParUA(){
  return ua_id => {
    if(ua_id !=""){
      var dureeTotalMissionsparUA = this.DureeDeTouteMissionsParUA(ua_id)
      var nombretotalDeMissionsParUA = this.NombreDeMissionParUA(ua_id)
      return dureeTotalMissionsparUA / nombretotalDeMissionsParUA
    }
  }
 },
 // montant total par unite administrative
montantTotalParUA(){
  return ua_id => {
    if(ua_id !=""){
  
        
    return this.getMissionPersonnaliser.filter(element => element.objetUniteAdministrative.id == ua_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
      
    }
    return 0
  }
},
// cout moyen par unite administrative

coutMoyenParUA(){

 return ua_id => {
    if(ua_id !=""){
     var MontantDeMissionParUA = this.montantTotalParUA(ua_id);
var NombreDeMissionParUA  = this.NombreDeMissionParUA(ua_id);
return MontantDeMissionParUA / NombreDeMissionParUA 
    }
    return 0

  }
},

// cacul du cout total 
coutTotalParMission(){
  return ua_id => {
    if(ua_id !=""){
      return this.getMissionPersonnaliser.filter(element => element.objetUniteAdministrative.id == ua_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cout_total), 0)
    }
  }
},
// cout moyen des billets d'avions par unite administrative

coutMoyenDeBilletAvionParUA(){
  return ua_id => {
    if(ua_id !=""){
      var coutTotal = this.coutTotalParMission(ua_id)
      var NombreDeMissionParUA = this.NombreDeMissionParUA(ua_id)
       return  coutTotal / NombreDeMissionParUA
    }
    return 0
  }
},


totalDeDossierRejeterParUA(){
return ua_id => {
  if(ua_id !=""){
    return this.getMissionPersonnaliser.filter(element => element.decision_cf == 2 && element.objetUniteAdministrative.id == ua_id).length
  }

}
},

// taux de rejet par unite administrative
tauxDeDossierRejeterParUA(){
 return ua_id => {
   var taux = (parseFloat(this.totalDeDossierRejeterParUA(ua_id)) * 100 ) / this.NombreDeMissionParUA(ua_id)
    if(isNaN(taux)) return null

   return taux
    
 }

},



NombreDemissionsParActeurDepense(){
  return acte_personnel_id => {
    if(acte_personnel_id !=""){
      return this.getMissionPersonnaliser.filter(element => element.objetActeurDepense.id == acte_personnel_id).length
    }
  }
},

nomParActeurDepense(){
 return acte_personnel_id => {
   if(acte_personnel_id !=""){
     var ObjetACTE = this.all_acteur_depense.find(element => element.id == acte_personnel_id)
     return ObjetACTE.matricule
   }
 }
},

// duree moyenne de mission par acteur de depense
dureetotalParAccteurDepense()
{
 return acte_personnel_id => {
   if(acte_personnel_id !=""){
     return this.getMissionPersonnaliser.filter(element => element.objetActeurDepense.id == acte_personnel_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.duree), 0)
   }
 }
},

dureeMoyenneDeMissionsParActeurDeDepense(){
  return acte_personnel_id =>{
    if(acte_personnel_id !=""){
      var dureetotalParActeur = this.dureetotalParAccteurDepense(acte_personnel_id)
      var nombreTotalParActeur = this.NombreDemissionsParActeurDepense(acte_personnel_id)
      return dureetotalParActeur / nombreTotalParActeur
    }
  }
},



// montant total par acteur de depense
montantTotalParActeurDepense(){
  return acte_personnel_id => {
    if(acte_personnel_id !=""){
      return this.getMissionPersonnaliser.filter(element => element.objetActeurDepense.id == acte_personnel_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0 )
    }
    return 0
  }
},

// cout moyen par agent
 
 coutMoyenParAgent(){
   return acte_personnel_id => {
     if(acte_personnel_id !=""){
       var montantTotalParActeurDepense = this.montantTotalParActeurDepense(acte_personnel_id)
       var NombreDemissionsParActeurDepense = this.NombreDemissionsParActeurDepense(acte_personnel_id)
       return montantTotalParActeurDepense / NombreDemissionsParActeurDepense
     }
     return 0
   }
 },


// cacul du cout toatl 
coutTotal(){
  return acte_personnel_id => {
    if(acte_personnel_id !=""){
      return this.getMissionPersonnaliser.filter(element => element.objetActeurDepense.id == acte_personnel_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cout_total), 0)
    }
  }
},


 // cout moyen des billets d'avion par agent
 coutMoyenBilletAvionParAgent(){
   return acte_personnel_id => {
     if(acte_personnel_id !="") {
      var coutTotal = this.coutTotal(acte_personnel_id)
      var NombreDemissionsParActeurDepense = 
      this.NombreDemissionsParActeurDepense(acte_personnel_id)
      return coutTotal / NombreDemissionsParActeurDepense
     }
     return 0
   }
 },

// total de dossier rejeter par un agent

totalDeDossierRejeterParAgent(){
return acte_personnel_id => {
  if(acte_personnel_id !=""){
    return this.getMissionPersonnaliser.filter(element => element.decision_cf == 2 && element.objetActeurDepense.id == acte_personnel_id).length
  }

}
},

// taux de dossier rejeter par un agent

  tauxDeDossierRejeterParAgent(){
 return acte_personnel_id => {
   var taux = (parseFloat(this.totalDeDossierRejeterParAgent(acte_personnel_id)) * 100 ) / this.NombreDemissionsParActeurDepense(acte_personnel_id)
   if(isNaN(taux)) return null

  return taux
   
 }
},

  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission','supprimerMission']),   
   
    AllerAPageAjouterMission(){
    
    this.$router.push({
        name: 'AjouterMission'
    })
    },

   

  

// afficher modal modifier
afficherModalModifierMission(id){

 this.$router.push({
   path:"/modifier-mission/" + id
 });

        
 },

// formatage date
formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    // formatage montant
    formatageSomme:formatageSomme,

  }
};
</script>

