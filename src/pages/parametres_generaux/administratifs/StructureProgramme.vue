
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
                                              title="Liste structure programme "
                                              name ="Liste structure programme"
                                              worksheet = "structure programme"
                                            :data="localisationsFiltre">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des structures programmes</h5>
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
                <tr class="odd gradeX" v-for="(structure_programme, index) in 
                localisationsFiltre" :key="structure_programme.id">
                  <td @dblclick="afficherModalModifierStructure(index)">
                    {{structure_programme.niveau || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierStructure(index)">
                    {{structure_programme.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureProgramme(structure_programme.id)"  class="btn btn-danger ">
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
              <h4 style="color:red;">Aucune structure programme trouvée</h4>
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
                <h3>Ajouter structure programme</h3>
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
             <button v-show="formData.niveau.length && formData.libelle.length"
              @click.prevent="ajouetProgrammeLocal" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" >Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure programme</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="editProgramme.niveau" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editProgramme.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editProgramme.niveau.length && editProgramme.libelle.length"
              @click.prevent="modifierModalStructureprogrammeLocal(editProgramme)" class="btn btn-primary"
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
      json_fields:{
        'Niveau':'niveau',
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
                niveau: "",
             libelle: ""
        },

        editProgramme: {
            niveau: "",
             libelle: ""
        },
         search:""
    };
  },
 
  created() {
   // this.getStructureProgramme()
  },
  computed: {
// methode pour maper le guetter
   ...mapGetters('parametreGenerauxAdministratif', ['structures_programmes']) ,
   // methode pour trier le tableau
       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_programmes.filter((item) => {
  
    return item.libelle.toLowerCase().includes(searchTerm) 
    // || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }

  },
  methods: {
    // methode pour l'action
   ...mapActions('parametreGenerauxAdministratif', ['getStructureProgramme', 
   'ajouterStructureProgramme','modifierStructureProgramme','supprimerStructureProgramme']),   
   
    afficherModalStructure(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetProgrammeLocal () {
      this.ajouterStructureProgramme(this.formData)

        this.formData = {
                niveau: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierStructure(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editProgramme = this.structures_programmes[index];


        
 },
 modifierModalStructureprogrammeLocal(){
   this.modifierStructureProgramme(this.editProgramme)
   this.editProgramme = {
                niveau: "",
               libelle: ""
   }
 }

  }
};
</script>

