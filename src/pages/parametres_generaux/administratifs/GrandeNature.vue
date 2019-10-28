
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
            <h5>Liste des grandes natures</h5>
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
                <tr class="odd gradeX" v-for="(grande_nature, index) in titreFiltres" :key="grande_nature.id">
                  <td @dblclick="afficherModalModifierGrande(index)">{{grande_nature.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierGrande(index)">{{grande_nature.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerGrandeNature(grande_nature.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucune grande nature de depense enregistrée</h6>
              </div>
            </div>
            
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalAjouterTitre"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter grande nature</h3>
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
             <button  v-show="formData.code.length && formData.libelle.length" 
             @click.prevent="ajouterTitreLocal"  class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier  grande nature</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editTitre.code.length && editTitre.libelle.length" 
             @click.prevent="modifierGrandeNatureLocal(editTitre)" class="btn btn-primary"
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
        search:"",
        formData : {
                code: "",
             libelle: ""
        },

        editTitre: {
            code: "",
             libelle: ""
        }
 
    };
  },
 
  created() {
    this.getGrandeNature()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['grandes_natures']),
   
    titreFiltres() {

const searchTerm = this.search.toLowerCase();

return this.grandes_natures.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
   

   }
)

}

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getGrandeNature', 'ajouterGrandeNature', 
   'supprimerGrandeNature', 'modifierGrandeNature']),   
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterGrandeNature(this.formData)

        this.formData = {
                code: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierGrande(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.grandes_natures[index];


        
 },
modifierGrandeNatureLocal(){
  this.modifierGrandeNature(this.editTitre)
  this.editTitre = {
    code:"",
    libelle:""
  }
}

  }
};
</script>

