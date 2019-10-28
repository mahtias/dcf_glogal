
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
            <h5>Liste exercice budgetaire</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Annee</th>
                  <th>Date debut</th>
                  <th>Date fin</th>
                  <th>Encours</th>
                  <!-- <th>Date cloture </th> -->
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(exercice_budgetaire, index) in 
                titreFiltres" :key="exercice_budgetaire.id">
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(index)">
                    {{exercice_budgetaire.annee || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(index)">
                    {{exercice_budgetaire.date_debut || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(index)">
                    {{exercice_budgetaire.date_fin || 'Non renseigné'}}</td>
                  <td v-if="exercice_budgetaire.encours">Oui</td>
                    <td v-else>Non</td>
                   <!-- <td @dblclick="afficherModalModifierExerciceBudgetaire(index)">
                     {{exercice_budgetaire.date_cloture || 'Non reseigné'}}</td> -->
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerExerciceBudgetaire(exercice_budgetaire.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="titreFiltres.length">
            </div>
             
            <div v-else>
              <div align="center">
              <h6 style="color:red;">Aucun exercice budgetaire enregistré !</h6>
            </div>
             </div>
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalExerciceBudgetaire"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter un exrcice budgetaire</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Annee:</label>
              <div class="controls">
                <input type="number" v-model="formData.annee" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Date debut:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_debut" class="span" placeholder="" />
              </div>
            </div>
            
            <div class="control-group">
              <label class="control-label">Date fin:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_fin" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Encours:</label>
              <div class="controls">
                <input type="checkbox" v-model="formData.encours" checked="checked"
                 class="span" placeholder="" />
              </div>
            </div>
             <!-- <div class="control-group">
              <label class="control-label">Date cloture:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_cloture" class="span" placeholder="" />
              </div>
            </div> -->
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.annee.length && formData.date_debut.length 
             && formData.date_fin.length
             && formData.encours"
              @click.prevent="ajouterExerciceLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn " href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->



 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier exrcice budgetaire</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Annee:</label>
              <div class="controls">
                <input type="number" v-model="editExerciceBudgetaire.annee"
                 class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Date debut:</label>
              <div class="controls">
                <input type="date" v-model="editExerciceBudgetaire.date_debut"
                 class="span" placeholder="" />
              </div>
            </div>
            
            <div class="control-group">
              <label class="control-label">Date fin:</label>
              <div class="controls">
                <input type="date" v-model="editExerciceBudgetaire.date_fin"
                 class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Encours:</label>
              <div class="controls">
                <input type="checkbox" v-model="editExerciceBudgetaire.encours" 
                checked="checked" class="span" placeholder="" />
              </div>
            </div>
             <!-- <div class="control-group">
              <label class="control-label">Date cloture:</label>
              <div class="controls">
                <input type="date" v-model="editExerciceBudgetaire.date_cloture" class="span" placeholder="" />
              </div>
            </div> -->
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editExerciceBudgetaire.annee.length && 
             editExerciceBudgetaire.date_debut.length && 
             editExerciceBudgetaire.date_fin.length
             && editExerciceBudgetaire.encours"
             @click.prevent="modifierExerciceBudgetaireLocal(editExerciceBudgetaire)" 
             class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
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
                annee: "",
                date_debut:"",
                date_fin:"",
      
                   
          
             
        },

        editExerciceBudgetaire: {
             annee: "",
                date_debut:"",
                date_fin:"",
                
                     
                
            
        },
        search:""
 
    };
  },
 
  created() {
   // this.getExercicesBudgetaires()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']) ,
  
    titreFiltres() {

const searchTerm = this.search.toLowerCase();

return this.exercices_budgetaires.filter((item) => {
  
    return item.annee.toLowerCase().includes(searchTerm) 
    || item.date_debut.toLowerCase().includes(searchTerm) 
    || item.date_fin.toLowerCase().includes(searchTerm)

   }
)

}


  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', [ 'ajouterExerciceBudgetaire',
    'supprimerExerciceBudgetaire', 'modifierExerciceBudgetaire']),   
   
    afficherModalExerciceBudgetaire(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterExerciceLocal () {
      this.ajouterExerciceBudgetaire(this.formData)

        this.formData = {
              annee: "",
                date_debut:"",
                date_fin:"",
               
             
        }
    },
// afficher modal
afficherModalModifierExerciceBudgetaire(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editExerciceBudgetaire = this.exercices_budgetaires[index];


        
 },

modifierExerciceBudgetaireLocal(){
  this.modifierExerciceBudgetaire(this.editExerciceBudgetaire)
  this.editExerciceBudgetaire ={
    
                     annee: "",
                date_debut:"",
                date_fin:"",
               
               
  }
}
  }
};
</script>

