
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
            <h5>Liste des plans programmes</h5>
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
                  <th>Structure programme</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(plan_programme, index) in localisationsFiltre" 
                :key="plan_programme.id">
                  <td @dblclick="afficherModalModifierPlanProgramme(index)">
                    {{plan_programme.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierPlanProgramme(index)">
                    {{plan_programme.libelle || 'Non renseigné'}}</td>
                  <td>
                       {{plan_programme.structure_programme.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerPlanProgramme(plan_programme.id)"  class="btn btn-danger ">
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
              <h4 style="color:red;">Aucun plan programme trouvé</h4>
              </div>
          </div>
           </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalStructure"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter plan programme</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

               <div class="control-group">
              <label class="control-label">Structure programme:</label>
              <div class="controls">
              <select v-model="formData.structure_programme_id" >
                <option v-for="structure in structures_programmes " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
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
             <button v-show="formData.code.length && formData.libelle.length && 
             formData.structure_programme_id"
              @click.prevent="ajouetProgrammeLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier plan programme</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                    <div class="control-group">
              <label class="control-label">Structure programme:</label>
              <div class="controls">
              <select v-model="editPlanProgramme.structure_programme_id" >
                <option v-for="structure in structures_programmes " :key="structure.id" 
                 :value="structure.id">{{structure.libelle}} </option>
              </select>
            </div>
            </div>
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editPlanProgramme.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editPlanProgramme.libelle" class="span" placeholder="" />
              </div>
            </div>
           

          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="editPlanProgramme.code.length && editPlanProgramme.libelle.length && 
             editPlanProgramme.structure_programme_id"
              @click.prevent="modifierPlanProgrammeLocal(editPlanProgramme)" class="btn btn-primary"
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
          structure_programme_id:""
        },

        editPlanProgramme: {
            code: "",
             libelle: "",
          structure_programme_id:""

        },
        search:""
 
    };
  },
 
  created() {
    //this.getPlanProgramme()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', [ 'structures_programmes',
    'plans_programmes']) ,

       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.plans_programmes.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm) 
  

   }
)
   }

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getPlanProgramme', 
   'ajouterPlanProgramme','modifierPlanProgramme','supprimerPlanProgramme']),   
   
    afficherModalStructure(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetProgrammeLocal () {
      this.ajouterPlanProgramme(this.formData)

        this.formData = {
                code: "",
             libelle: "",
          structure_programme_id:""
        }
    },
// afficher modal
afficherModalModifierPlanProgramme(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editPlanProgramme = this.plans_programmes[index];


        
 },
 // vider l'input de modifier
 modifierPlanProgrammeLocal(){

this.modifierPlanProgramme(this.editPlanProgramme)
this.editPlanProgramme = {
  code:"",
  libelle:"",
  structure_programme_id:""
}
 }


  }
};
</script>

