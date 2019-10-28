
<template>
    <div class="container-fluid">
        <div class="quick-actions_homepage" style="position: center;">
      <ul class="quick-actions" >
        <li class="bg_lg " title="Nombre total de mission par unite administrative">
             <a href="#">
             <i class="icon-eject"></i> <span class="label label-important">
                {{nombreDeMissionParUA}} 
               </span>
              
             </a> </li>
        <li class="bg_ly" title="Nombre total de mission par acteur ">
             <a href="#">
        <i class="icon-user"></i><span class="label label-important">
          <!-- {{nombre_total_mission_acteur}} -->
            </span>   </a> </li>
         </ul>
        </div>

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
                                        Montrer: <select name="" id="">
                                            <option value="">10</option>
                                            <option value="">15</option>
                                            <option value="">20</option>
                                          </select>
                                          Exo:
                     
                                        <select v-model="searchAnneeBudgetaire" id="">
                                            <option value=""></option>
                                            <option v-for="exo in exercices_budgetaires" :key="exo.id" :value="exo.id">{{exo.annee}}</option>
                                          </select>
                                          UA   
                                           <select v-model="searchUA" id="">
                                            <option value=""></option>
                                            <option v-for="ua in uniteAdministratives" :key="ua.id" :value="ua.id">{{ua.libelle}}</option>
                                          </select> 
                                           Acte   
                                           <select v-model="searchActeurDepense" id="">
                                            <option value=""></option>
                                            <option v-for="acteur in all_acteur_depense" :key="acteur.id" :value="acteur.id">{{acteur.matricule}}</option>
                                          </select> 
                                      <span @click.prevent="format" class="btn"><i class="icon-search"></i></span>
                                        </div> 

                       <table class="table table-bordered table-striped">
                          <thead>
                          <tr>
                   <th>Exercice budgetaires</th>
                  <th> Categorie mission</th>
                   <th>Objet</th>
                  <th> Type de mission</th>
                  <th>Date de mission</th>
                  <th>Date de depart</th>
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
                     {{mission.exoBugdet.annee}}</td> 
                  <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.categorie_mission.libelle || 'Non renseigné'}}</td> 
                 <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.objet || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.type_mission || 'Non renseigné'}}</td>

                      <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.date_mission || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.date_depart || 'Non renseigné'}}</td>
                      
                       <td @dblclick="afficherModalModifierMission(mission.id)">
                      {{mission.exoplans.libelle || 'Non renseigné'}}</td>
                            
                    <td @dblclick="afficherModalModifierMission(mission.id)">
                     {{mission.exoDepense.matricule}}</td> 
                    
                   

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

export default {
  
  data() {
    return {

         json_fields: {
            'Exercice budgetaire': 'exoBugdet.annee',
            'categorie': 'categorie_mission.libelle',
            'Objet': 'objet',
            'Type de mission': 'type_mission',
            'UA': 'exoplans.libelle',
           
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


     formData:{},
     editMission:{},
       searchAnneeBudgetaire: null,
       searchActeurDepense: null,
       searchUA: null,   

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
   ...mapGetters('suivi_controle_budgetaire', ["categories_missions", "searchFormat", "getMissionPersonnaliser",
      "nombreDeMissionParUA",
   
    ]) ,

       ...mapGetters('personnelUA', ['all_acteur_depense']),
   ...mapGetters('uniteadministrative', ['uniteAdministratives']),
  ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),

   format(){
     return this.searchFormat(this.searchAnneeBudgetaire, this.searchUA, this.searchActeurDepense)
   },
    // methode pour trier un item
           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.getMissionPersonnaliser.filter((item) => {
  
     return item.objet.toLowerCase().includes(searchTerm) 
     || item.type_mission.toLowerCase().includes(searchTerm)
     || item.exoplans.libelle.toLowerCase().includes(searchTerm)
      || item.exoDepense.matricule.toLowerCase().includes(searchTerm)

    //   const searchTrier = this.search.toLowerCase();
    //   return this.
    //  || item.searchUA.toLowerCase().includes(searchTerm)
    //  || item.searchActeurDepense.toLowerCase().includes(searchTerm)
  

   }
)
   }


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


  }
};
</script>

