
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
            <h5>Liste des sources de financements</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search" placeholder="searh...">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Libelle</th>
                  <th>Sigle</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(source_financement, index) in 
                localisationsFiltre" :key="source_financement.id">
                  <td @dblclick="afficherModalModifierFinancement(index)">
                    {{source_financement.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierFinancement(index)">
                    {{source_financement.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierFinancement(index)">
                    {{source_financement.sigle || 'Non renseigné'}}</td>
                  <td>

              <div class="btn-group">
              <button @click.prevent="supprimerSourceFinancement(source_financement.id)"  
              class="btn btn-danger ">
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
               <h6 style="color:red;"> Aucune source de financement enregistrée ! </h6>
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
                <h3>Ajouter source de financement</h3>
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
            <div class="controls-group">
              <label class="control-label">Sigle:</label>
              <div class="controls">
              <input type="text" v-model="formData.sigle" class="span" placeholder="Saisir le sigle"/>
            </div>
            </div>  
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length && 
             formData.sigle.length"
              @click.prevent="ajouterFinancementLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier source de financement</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editFinancement.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editFinancement.libelle" class="span" placeholder="" />
              </div>
            </div>
            
            
            <div class="control-group">
              <label class="control-label">Sigle:</label>
              <div class="controls">
                <input type="text" v-model="editFinancement.sigle" class="span">
              </div>
            </div>
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editFinancement.code.length && editFinancement.libelle.length && 
             editFinancement.sigle.length"
              @click.prevent="modifierFinancementLocal(editFinancement)" class="btn btn-primary"
              >Modifier</button>
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
                code: "",
             libelle: "",
             sigle:""
        },

        editFinancement: {
            code: "",
             libelle: "",
             sigle:""
        },
      search:""
    };
  },
 
  created() {
    //  this.getSourceFinancement()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

           localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.sources_financements.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm)
    || item.sigle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
   
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxSourceDeFinancement', ['getSourceFinancement', 'ajouterSourceFinancement', 
   'modifierFinancement',
    'supprimerSourceFinancement']),   
   
    afficherModalAjouterFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterFinancementLocal () {
      this.ajouterSourceFinancement(this.formData)

        this.formData = {
                code: "",
             libelle: "",
               sigle:""
        }
    },
// afficher modal
afficherModalModifierFinancement(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editFinancement = this.sources_financements[index];


        
 },
// 
modifierFinancementLocal(){
  this.modifierFinancement(this.editFinancement)
  this.editFinancement = {
    code:"",
    libelle:"",
    sigle:""
  }
}

  }
};
</script>

