
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
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
            <h5>Liste categorie missions</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Code</th>
                  <th>Libelle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(activites, index) in 
                categorieMissionFiltre"
                 :key="activites.id">
                  <td @dblclick="afficherModalModifierBudgetaire(index)">
                      {{activites.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierBudgetaire(index)">
                      {{activites.libelle || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerCategorieMission(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="categorieMissionFiltre.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune categorie mission enregistrée </h6>
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
                <h3>Ajouter categorie mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length  && formData.libelle.length"
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier categorie mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editBudgetaire.code" class="span" placeholder="" />
              </div>
            </div>
          
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editBudgetaire.libelle" class="span" placeholder="" />
              </div>
            </div>
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editBudgetaire.code.length  && editBudgetaire.libelle.length" 
             @click.prevent="modifierBudgetaireLocal(editBudgetaire)" class="btn btn-primary"
              href="#">Modifier</button>
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
      json_fields:{
             'Libelle':'libelle',
             'Code':'code'
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
     
        formData : {

                code:"",
             libelle: "",
            
        },

        editBudgetaire: {
            code:"",
             libelle: "",
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions']) ,
   
    // methode pour trier un item
           categorieMissionFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.categories_missions.filter((item) => {
  
     return item.code.toLowerCase().includes(searchTerm) 
     || item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'ajouterCategorieMission', 
   'modifierCategorieMission','supprimerCategorieMission']),   
   
    afficherModalAjouterFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
     ajouterBudgetaireLocal () {
     this.ajouterCategorieMission(this.formData)

        this.formData = {
             code:"",
            libelle: "",
            
         }
     },
// afficher modal
afficherModalModifierBudgetaire(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editBudgetaire = this.categories_missions[index];


        
 },
// 
modifierBudgetaireLocal(){
  this.modifierCategorieMission(this.editBudgetaire)
  this.editBudgetaire = {
    code:"",
    libelle:"",
   
  }
}

  }
};
</script>

