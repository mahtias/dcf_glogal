
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
                                              title="Liste localisation geigraphique "
                                              name ="Liste localistaion geographique"
                                              worksheet = "localisation geographique"
                                            :data="localisationsFiltre">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des localisations geographiques</h5>
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
                  <th>Structure geographique</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(geographique, index) 
                in localisationsFiltre" :key="geographique.id">
                  <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{geographique.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                    {{geographique.libelle || 'Non renseigné'}}</td>
                    
                   <td @dblclick="afficherMoadlModifierLocalisation(index)">
                      {{geographique.structure_localisation_geographique.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerLocalisationGeographique(geographique.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucune localisattion géogrphique enregistrée</h6>
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
                <h3>Ajouter localisation geographique</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                         <div class="control-group">
              <label class="control-label">Structure geographique:</label>
              <div class="controls">
                <select  v-model="formData.structure_localisation_geographique_id">
            <option v-for="localisation in structures_geographiques" :key="localisation.id" 
            :value="localisation.id">{{localisation.libelle}}</option>
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
             <button v-show="formData.structure_localisation_geographique_id && formData.code.length &&
             formData.libelle.length" 
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier localisation geographique</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                          <div class="control-group">
              <label class="control-label">Structure geographique:</label>
              <div class="controls">
                <select  v-model="editTitre.structure_localisation_geographique_id">
            <option v-for="localisation in structures_geographiques" :key="localisation.id" 
            :value="localisation.id">{{localisation.libelle}}</option>
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
             <button  v-show="editTitre.structure_localisation_geographique_id && editTitre.code.length &&
             editTitre.libelle.length" 
              @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
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
               'Code':'code',
               'Libelle':'lielle',
               'structure localistion':'structure_localisation_geographique.libelle'
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
             libelle: "",
             structure_localisation_geographique_id:""
        },

        editTitre: {
            code: "",
             libelle: "",
   structure_localisation_geographique_id:""
        },
        search:""
 
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques', 
  'localisations_geographiques'])  ,

   localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.localisations_geographiques.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxAdministratif', ['getLocalisationGeographique', 
    'ajouterLocalisationGeographique', 
   'supprimerLocalisationGeographique', 'modifierLocalisationGeographique']),     
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterLocalisationGeographique(this.formData)

        this.formData = {
                code: "",
             libelle: "",
              structure_localisation_geographique_id:""
        }
    },
// afficher modal
afficherMoadlModifierLocalisation(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.localisations_geographiques[index];


        
 },
modifierLocalisationLocal(){
  this.modifierLocalisationGeographique(this.editTitre)
  this.editTitre = {
                code: "",
             libelle: "",
        structure_localisation_geographique_id:""
  }
}

  }
};
</script>

