
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
                                              title="Liste titre "
                                              name ="Liste titre"
                                              worksheet = "titre"
                                            :data="titreFiltres">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des titres</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search" >

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
                <tr class="odd gradeX" v-for="(titre, index) in titreFiltres" :key="titre.id">
                  <td @dblclick="afficherModalModifierTitre(index)">{{titre.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierTitre(index)">{{titre.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerTitre(titre.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucun titre enregistré !</h6>
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
                <h3>Ajouter un titre</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span"
                 placeholder="Saisir le code" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libelle" />
              </div>
            </div>
            
            <span v-if="codeExist" class="form-control" style="color: red;">Ce code est déja enregistré</span>
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length && formData.libelle.length"  
             @click.prevent="ajouterTitreLocal"  class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier un titre</h3>
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
             @click.prevent="modifierTitreLocal(editTitre)" class="btn btn-primary"
            >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->







  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions, mapMutations} from 'vuex'
//import Filtrer from '../../../../utils/filtre'
export default {
  
  data() {
    return {
      json_fields:{
        'Code':'code',
        'Libelle':'libelle'
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
                code: "",
             libelle: ""
        },

        editTitre: {
            code: "",
             libelle: ""
        },
        search: "",
 
    };
  },
 
  created() {
   // this.getTitres()
   //console.log(typeof(VERIF_CODE()))
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['titres', 'codeExist']),  

  titreFiltres() {

const searchTerm = this.search.toLowerCase();

return this.titres.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 

   }
)

}
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['ajouterTitre', 'supprimerTitre', 'modifierTitre']),   
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
    ...mapMutations('parametreGenerauxAdministratif', ['VERIF_CODE']),
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterTitre(this.formData)

        this.formData = {
                code: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierTitre(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });


        this.editTitre = this.titres[index];


        
 },
// vider l'input modifier

modifierTitreLocal() {
  this.modifierTitre(this.editTitre)
  this.editTitre = {
    code:"",
    libelle:""
  }
}
  }
};
</script>

