
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des imputations des missions</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Montant</th>
                  <th>Mission</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(imputation, index) in
                 imputations"
                 :key="imputation.id">
                  <td @dblclick="afficherModalModifierimputationMission(index)">
                      {{imputation.montant || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierimputationMission(index)">
                    {{imputation.mission_imputation.objet || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerImputation(imputation.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="imputations.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucun imputation budget de mission enregistrée </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
                main-icon ="apps"
       @cache="afficherModalAjouterImputation"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter imputation du budget de mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">Mission:</label>
              <div class="controls">
               <select v-model="formData.mission_id" class="span">
                   <option v-for="imputation in missions" :key="imputation.id"
                   :value="imputation.id">{{imputation.objet}}</option>
               </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">montant:</label>
              <div class="controls">
                <input type="number"
                suffix="F CFA"
                 v-model="formData.montant" class="span" placeholder="Saisir le montant" />
              </div>
            </div>

           
             
          </form>              
          </div>
           <div class="modal-footer"> 
           <button 
              @click.prevent="ajouterImputationLocal" class="btn btn-primary"
            >Valider</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier imputation du budget de mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

              <div class="control-group">
              <label class="control-label">Mission:</label>
              <div class="controls">
               <select v-model="editImputation.mission_id" class="span">
                   <option v-for="imputation in missions" :key="imputation.id"
                   :value="imputation.id">{{imputation.objet}}</option>
               </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Montant:</label>
              <div class="controls">
                <input type="text" v-model="editImputation.montant" class="span" placeholder="" />
              </div>
            </div>
          
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
             @click.prevent="modificationImputationLocal(editImputation)" 
             class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button>
               </div>
            </div>


<!----- fin modifier modal  ---->







  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
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
     
        formData : {

               montant:"",
             mission_id: "",
            
        },

        editImputation: {
            montant:"",
             mission_id: "",
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['missions','imputations']) ,
   
    // methode pour trier un item
//            localisationsFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.imputations.filter((item) => {
  
//    return item.montant.toLowerCase().includes(searchTerm) 
//      return item.montant

//     || item.mission.toLowerCase().includes(searchTerm) 
//    }
// )
//    }
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getImputation', 'ajouterImputation', 
   'modifierImpuatation','supprimerImputation']),   
   
    afficherModalAjouterImputation(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterImputationLocal () {
      this.ajouterImputation(this.formData)

        this.formData = {
              montant:"",
             mission_id: "",
            
        }
    },
// afficher modal
afficherModalModifierimputationMission(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

      this.editImputation = this.imputations[index];


        
 },
// 
modificationImputationLocal(){
  this.modifierImpuatation(this.editImputation)
  this.editImputation = {
    montant:"",
    mission_id:"",
   
  }
}

  }
};
</script>

