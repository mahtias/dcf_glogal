
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
            <h5>Liste service gestionnaires</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                   <th>Code</th>
                  <!-- <th>Ordre</th> -->
                  <th>libelle</th>
                  <th>structure administrative</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(service_gestionnaire, index) 
                in localisationsFiltre" :key="service_gestionnaire.id">
                <!-- <td @dblclick="afficherModalModifierService(index)">
                    {{service_gestionnaire.ordre || 'Non renseigné'}}</td> -->
                  <td @dblclick="afficherModalModifierService(index)">
                    {{service_gestionnaire.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierService(index)">
                    {{service_gestionnaire.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierService(index)">
                      {{service_gestionnaire.structure_administrative.libelle || 'Non renseigné'}}</td>
                       
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerServiceGestionnaire(service_gestionnaire.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucun service gestionnaire enregistré ! </h6>
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
                <h3>Ajouter service gestionnaires</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">structure administrative:</label>
              <div class="controls">
                <select  v-model="formData.structure_administrative_id">
            <option v-for="administrative in structures_administratives" :key="administrative.id" 
            :value="administrative.id">{{administrative.libelle}}</option>
                </select>
              </div>
            </div>

            <!-- <div class="control-group">
              <label class="control-label">Ordre:</label>
              <div class="controls">
                <input type="number" v-model="formData.ordre" class="span" placeholder="Saisir l'ordre" />
              </div>
            </div> -->
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
             <button  v-show="formData.code.length && formData.libelle.length && 
            formData.structure_administrative_id" 
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier service gestionnaires</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                <div class="control-group">
              <label class="control-label">structure administrative:</label>
              <div class="controls">
                <select  v-model="editGestionnaire.structure_administrative_id">
            <option v-for="administrative in structures_administratives" :key="administrative.id" 
            :value="administrative.id">{{administrative.libelle}}</option>
                </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.libelle" class="span" placeholder="" />
              </div>
            </div>
            
               <!-- <div class="control-group">
              <label class="control-label">Ordre:</label>
              <div class="controls">
                <input type="text" v-model="editGestionnaire.ordre" class="span" placeholder="" />
              </div>
            </div> -->

             

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="editGestionnaire.code.length && editGestionnaire.libelle.length && 
                 editGestionnaire.structure_administrative_id"
             @click.prevent="modifierServiceGestionnaireLocal(editGestionnaire)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
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
            //  ordre:"",
             structure_administrative_id:""
        },

        editGestionnaire: {
            code: "",
             libelle: "",
            //  ordre:"",
              structure_administrative_id:""
        },
        search:"",
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['structures_administratives',
    'services_gestionnaires'])  ,


    
    localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.services_gestionnaires.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
    || item.ordre.toLowerCase().includes(searchTerm)
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getServiceGestionnaire', 'ajouterServiceGestionnaire', 
   'supprimerServiceGestionnaire', 'modifierServiceGestionnaire']),   
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterServiceGestionnaire(this.formData)

        this.formData = {
                code: "",
             libelle: "",
            //  ordre:"",
              structure_administrative_id:""
        }
    },
// afficher modal
afficherModalModifierService(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editGestionnaire = this.services_gestionnaires[index];
  
 },

 // methodes pour vider l'input
  modifierServiceGestionnaireLocal(){
    this.modifierServiceGestionnaire(this.editGestionnaire)

    this.editGestionnaire = {
      code:"",
      libelle:"",
      // ordre:"",
    structure_administrative_id:""

    }
  }

  }
};
</script>

