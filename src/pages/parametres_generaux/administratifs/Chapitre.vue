
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
                                              title="Liste chapitre "
                                              name ="Liste chapitre"
                                              worksheet = "chapitre"
                                            :data="localisationsFiltre">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des chapitres</h5>
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
                  <th>Service gestionnaire</th>
                  <th>Localisation geographique</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(chapitre, index) 
                in localisationsFiltre" :key="chapitre.id">
                
                  <td @dblclick="afficherModalModifierChapitre(index)">
                    {{chapitre.code || 'Non renseigné'}}</td>

                   <td @dblclick="afficherModalModifierChapitre(index)">
                    {{chapitre.libelle || 'Non renseigné'}}</td>
                    
                   <td @dblclick="afficherModalModifierChapitre(index)">
                      {{chapitre.localisation_geographique.libelle || 'Non renseigné'}}</td>

                      <td @dblclick="afficherModalModifierChapitre(index)">
                        {{chapitre.service_gestionnaire.libelle || 'Non renseigné'}} </td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerChapitre(chapitre.id)"  class="btn btn-danger ">
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
              <h6 style="color:red;">Aucun chapitre enregistré !</h6>
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
                <h3>Ajouter un chapitre</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div class="control-group">
              <label class="control-label">Service gestionnaire:</label>
              <div class="controls">
                <select  v-model="formData.servicegestionnaires_id">
            <option v-for="response in services_gestionnaires" :key="response.id" 
            :value="response.id">{{response.code}} {{response.libelle}}</option>
                </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Localisation geographique:</label>
              <div class="controls">
                <select  v-model="formData.localisation_geographique_id">
            <option v-for="response in localisations_geographiques" :key="response.id" 
            :value="response.id">{{response.code}} {{response.libelle}}</option>
                </select>
              </div>
            </div>
            
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" :value="codeChapitre" class="span" placeholder="Saisir le code" />
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
             <button v-show=" formData.libelle.length "
             
              @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier chapitre</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">Service gestionnaire:</label>
              <div class="controls">
                <select  v-model="editTitre.servicegestionnaires_id">
            <option v-for="response in services_gestionnaires" :key="response.id" 
            :value="response.id">{{response.libelle}}</option>
                </select>
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Localisation geographique:</label>
              <div class="controls">
                <select  v-model="editTitre.localisation_geographique_id">
            <option v-for="response in localisations_geographiques" :key="response.id" 
            :value="response.id">{{response.libelle}}</option>
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
             <button v-show="editTitre.code.length && editTitre.libelle.length 
             && editTitre.servicegestionnaires_id && editTitre.localisation_geographique_id"
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
// import {groupBy} from '../../../Repositories/Repository'
export default {
  
  data() {
    return {
       json_fields: {
            'Code': 'code',
            'Libelle': 'libelle',
          'localisation':'localisation_geographique.libelle',
          'service gestionnaire':'  service_gestionnaire.libelle'
        
           
           
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
             localisation_geographique_id:"",
             servicegestionnaires_id:""
        },

        editTitre: {
            code: "",
             libelle: "",
             localisation_geographique_id:"",
             servicegestionnaires_id:""
        },
        search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxAdministratif', ['services_gestionnaires','localisations_geographiques',
   'chapitres']),

   codeChapitre(){
     const service = this.services_gestionnaires.find(ser => ser.id == this.formData.servicegestionnaires_id)
    const localisation = this.localisations_geographiques.find(ser => ser.id == this.formData.localisation_geographique_id)

     if(service && localisation){
       return service.code + localisation.code
     }
   },
   
        localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.chapitres.filter((item) => {
  
    return item.libelle.toLowerCase().includes(searchTerm) 
    // || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxAdministratif', ['getChapitre', 
    'ajouterChapitre', 
   'supprimerChapitre', 'modifierChapitre']),     
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterChapitre(this.formData)

        this.formData = {
                code: "",
             libelle: "",
            localisation_geographique_id:"",
            servicegestionnaires_id:""
        }
    },
// afficher modal
afficherModalModifierChapitre(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.chapitres[index];


        
 },
modifierLocalisationLocal(){
  this.modifierChapitre(this.editTitre)
  this.editTitre = {
                code: "",
             libelle: "",
             localisation_geographique_id:"",
             servicegestionnaires_id:""
  }
},
//   sup(id){
// this.supprimerChapitre(id)
//  this.getChapitre()
//   }

  }
};
</script>

