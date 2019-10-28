
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
                                              title="Liste structures activites "
                                              name ="Liste  structures activites"
                                              worksheet = "Structure activite"
                                            :data="localisationsFiltre">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 

                                         </div> <br>
                                <div class="widget-box">

                                    
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste structures activites</h5>
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
                <tr class="odd gradeX" v-for="(activites, index) in localisationsFiltre"
                 :key="activites.id">
                  <td @dblclick="afficherModalModifierBudgetaire(index)">
                      {{activites.niveau || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierBudgetaire(index)">
                      {{activites.libelle || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureActivite(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="localisationsFiltre.length">
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune structure activité enregistrée </h6>
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
                <h3>Ajouter structure activites</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="formData.niveau" class="span" placeholder="Saisir le niveau" />
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
             <button v-show="formData.niveau.length  && formData.libelle.length"
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure activites</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="editBudgetaire.niveau" class="span" placeholder="" />
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
             <button v-show="editBudgetaire.niveau.length  && editBudgetaire.libelle.length" 
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
       json_fields: {
            'Niveau': 'niveau',
            'Libelle': 'libelle',  
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

                niveau:"",
             libelle: "",
            
        },

        editBudgetaire: {
            niveau:"",
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
   ...mapGetters('parametreGenerauxActivite', ['structures_activites']) ,
   
    // methode pour trier un item
           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_activites.filter((item) => {
  
    // return item.niveau.toLowerCase().includes(searchTerm) 
    return item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }
  },

  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxActivite', ['getStructureActivite', 'ajouterStructureActivite', 
   'modifierStructureActivite','supprimerStructureActivite']),   
   
    afficherModalAjouterFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterBudgetaireLocal () {
      this.ajouterStructureActivite(this.formData)

        this.formData = {
              niveau:"",
             libelle: "",
            
        }
    },
// afficher modal
afficherModalModifierBudgetaire(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editBudgetaire = this.structures_activites[index];


        
 },
// 
modifierBudgetaireLocal(){
  this.modifierStructureActivite(this.editBudgetaire)
  this.editBudgetaire = {
    niveau:"",
    libelle:"",
   
  }
}

  }
};
</script>

