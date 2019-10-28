
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
            <h5>Liste des types financements</h5>
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
                  <th>Source de financement</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(types, index) 
                in localisationsFiltre" :key="types.id">
                  <td @dblclick="afficherModalModifierTypefinancement(index)">
                    {{types.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierTypefinancement(index)">
                    {{types.libelle || 'Non renseigné'}}</td>
                    
                   <td @dblclick="afficherModalModifierTypefinancement(index)">
                      {{types.souce_financement.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerTypeFinancement(types.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
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
                <h3>Ajouter type de financement</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="formData.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
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
             <button v-show="formData.source_financement_id && formData.code.length && 
             formData.libelle.length"
              @click.prevent="ajouterTitreLocal" class="btn btn-primary">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier type de financement</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="editTitre.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
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
             <button v-show="editTitre.source_financement_id && editTitre.code.length && 
             editTitre.libelle.length"
              @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
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
                code: "",
             libelle: "",
             source_financement_id:""
        },

        editTitre: {
            code: "",
             libelle: ""
        },
       search:""
    };
  },
 
  created() {
    // this.getTypeFinancement()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  
            localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.types_financements.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxSourceDeFinancement', ['getTypeFinancement', 
    'ajouterTypeFinancement', 
   'supprimerTypeFinancement', 'modifierTypeFinancement']),     
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterTypeFinancement(this.formData)

        this.formData = {
                code: "",
             libelle: "",
            source_financement_id:""
        }
    },

// afficher modal
afficherModalModifierTypefinancement(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.types_financements[index];


        
 },
modifierLocalisationLocal(){
  this.modifierTypeFinancement(this.editTitre)
  this.editTitre = {
                code: "",
             libelle: "",
             source_financement_id:""
  }
},
//   sup(id){
// this.supprimerChapitre(id)
//  this.getChapitre()
//   }

  }
};
</script>

