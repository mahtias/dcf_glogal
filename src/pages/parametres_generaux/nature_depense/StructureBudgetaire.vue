
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
            <h5>Liste structures budgetaires</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>Libelle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(budgetaire, index) in localisationsFiltre"
                 :key="budgetaire.id">
                  <!-- <td @dblclick="afficherModalModifierBudgetaire(index)">{{budgetaire.code || 'Non renseigné'}}</td> -->
                  <td @dblclick="afficherModalModifierBudgetaire(index)">{{budgetaire.niveau || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierBudgetaire(index)">{{budgetaire.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureBudgetaire(budgetaire.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="localisationsFiltre.length">
            </div>
            <div v-else>
              <div align ="center">
                <h6 style="color:red;">Aucune structure budgetaire enregistrée </h6>
              </div>
            </div>
                  
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalAjouterFinancement"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter structure budgetaire</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">niveau:</label>
              <div class="controls">
                <input type="number" v-model="formData.niveau" class="span" placeholder="Saisir le niveau" />
              </div>
            </div>
            <!-- <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div> -->
             
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show=" formData.niveau.length  && formData.libelle.length"
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->




<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure budgetaire</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div class="control-group">
              <label class="control-label">niveau:</label>
              <div class="controls">
                <input type="number" v-model="editBudgetaire.niveau" class="span" placeholder="" />
              </div>
            </div>
            <!-- <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editBudgetaire.code" class="span" placeholder="" />
              </div>
            </div> -->
              
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editBudgetaire.libelle" class="span" placeholder="" />
              </div>
            </div>
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show=" editBudgetaire.niveau.length  && editBudgetaire.libelle.length"
              @click.prevent="modifierBudgetaireLocal(editBudgetaire)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
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
                niveau: "",
                // code:"",
             libelle: "",
            
        },

        editBudgetaire: {
            niveau: "",
            // code:"",
             libelle: "",
            
        },
        search:""
    };
  },
 
  created() {
    //  this.getStructureBudgetaire()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxBudgetaire', ['structures_budgetaires']) ,

          localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_budgetaires.filter((item) => {
  
    return item.libelle.toLowerCase().includes(searchTerm) 
    // || item.code.toLowerCase().includes(searchTerm)
    // || item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }


  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxBudgetaire', ['getStructureBudgetaire', 'ajouterStructureBudgetaire', 
   'modifierStructureBudgetaire','supprimerStructureBudgetaire']),   
   
    afficherModalAjouterFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterBudgetaireLocal () {
      this.ajouterStructureBudgetaire(this.formData)

        this.formData = {
              code:"",
                niveau: "",
             libelle: "",
            
        }
    },
// afficher modal
afficherModalModifierBudgetaire(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editBudgetaire = this.structures_budgetaires[index];


        
 },
// 
modifierBudgetaireLocal(){
  this.modifierStructureBudgetaire(this.editBudgetaire)
  this.editBudgetaire = {
    niveau:"",
    // code:"",
    libelle:"",
   
  }
}

  }
};
</script>

