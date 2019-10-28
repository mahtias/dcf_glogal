<template>
   <div class="container-fluid">
      <div class="quick-actions_homepage" style="position: center;">
      <ul class="quick-actions" >
        
        <li class="bg_lb" title="Nombre total de mission global">
             <a href="">
            <i class="icon-dashboard"></i> <span class="label label-important">
              {{nombre_total_mission_globale}}
        </span> Total Mission. </a>  </li>

        <li class="bg_lg " title="Nombre total de mission par unite administrative">
             <a href="">
             <i class="icon-eject"></i> <span class="label label-important">
               {{nombre_total_mission_ua}}</span>
                 Total par UA
             </a> </li>
        <li class="bg_ly" title="Nombre total de mission par acteur ">
             <a href="">
        <i class="icon-user"></i><span class="label label-important">
          {{nombre_total_mission_acteur}}
            </span>  Total par acteur. </a> </li>
         </ul>
        </div>
        <hr>
    <div class="row-fluid">
      <div class="span12">
      <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">liste informations 1</a></li>
              <li><a data-toggle="tab" href="#tab2">liste informations 2</a></li>
            </ul>
          </div>
           <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Autres informations</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">
              <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
                  <thead>
                <tr>
                   
                  <th>Mode de paiment</th>
                   <th>Frais de restauration</th>
                  <th>Frais d'hebergement</th>
                  <th>frais de deplacement</th>
                  <th>Date visa du cf</th>
                  <th>Decision du cf</th>
                  <th>Motif</th>
                  <th>Signataire</th>
                  <th>fichier joint</th>
                   <th>Action</th>
                </tr>
              </thead>
                      
                     <tbody>
                <tr class="odd gradeX" v-for="mission in 
                localisationsFiltre"
                 :key="mission.id">

                  <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.mode_paiement || 'Non renseigné'}}</td> 
                 <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{formatageSomme(parseFloat(mission.frais_restauration)) || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{formatageSomme(parseFloat(mission.frais_hebergement)) || 'Non renseigné'}}</td>

                      <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{formatageSomme(parseFloat(mission.frais_deplacement)) || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.date_visa_cf || 'Non renseigné'}}</td>
                      
                       <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.decision_cf || 'Non renseigné'}}</td>

                       <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.motif || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.signataire || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.fichier_joint || 'Non renseigné'}}</td>
                  <td>


              <div class="btn-group">
              <button @click.prevent="supprimerMission(mission.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
              </table>
                </div>
                 
           <div id="tab2" class="tab-pane">
                  
                 
                    
                    </div>

         

              </div>
               </div>

             </div>

                </div>
              <div align="right">
              <button @click.prevent="AllerPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
                </div>
             
   </div>
   </div>
   
</template>

   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {formatageSomme} from '../../../Repositories/Repository'
export default {
  
  data() {
    return {
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
    
    
    

        editMission: {
           
            
        },
        search:""   
    };
  },
mounted(){

},
 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ["categories_missions", "getMissionPersonnaliser",
    "nombre_total_mission_acteur",
      "nombre_total_mission_globale",
      "nombre_total_mission_ua"]) ,

      // filtrage du tableau
               localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.getMissionPersonnaliser.filter((item) => {
  
     return item.decision_cf.toLowerCase().includes(searchTerm) 
     || item.motif.toLowerCase().includes(searchTerm)

   
  

   }
)
   }
   
  
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission', 'modifierMission']),   
   
    // fonction pour aller a la page liste
    AllerPageListe()
    {
      this.$router.push({
        name:'Mission'
      })
    },
  formatageSomme:formatageSomme,

// vider l'input
// modifierMissionLocal(){
//   this.modifierMission(this.editMission)

// }

  }
};
</script>