
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
                                              title="Liste structure geographique "
                                              name ="Liste structure geographique"
                                              worksheet = "structure geographique"
                                            :data="localisationsFiltre">
                                         <i title="Exporter en excel" class="icon-table"></i>

                                                 </download-excel> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste structures geographique</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Niveau</th>
                  <th>libelle</th>      
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(structure_geographique, index) 
                in localisationsFiltre" :key="structure_geographique.id">
                  <td @dblclick="afficherModalModifierService(index)">
                    {{structure_geographique.niveau || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierService(index)">
                    {{structure_geographique.libelle || 'Non renseigné'}}</td>
                     
                       
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureGeographique(structure_geographique.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucune structure géographique enregistrée! </h6>
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
                <h3>Ajouter structure geographique</h3>
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
             <button  v-show="formData.niveau.length && formData.libelle.length" 
              @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure geographique</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="editStructure.niveau" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editStructure.libelle" class="span" placeholder="" />
              </div>
            </div>
          
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editStructure.niveau.length && editStructure.libelle.length" 
             @click.prevent="modifierStructureLocal(editStructure)" class="btn btn-primary"
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
             libelle: "",
           
             
        },

        editStructure: {
            niveau: "",
             libelle: "",
             
        },
            search:""
    };
  },
 
  created() {
    //this.getSection()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['structures_geographiques']),
   
       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_geographiques.filter((item) => {
  
    // return item.niveau.toLowerCase().includes(searchTerm) 
    return item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }

  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getStructureGeographique', 
   'ajouterStructureGeographique', 
   'supprimerStructureGeographique', 'modifierStructureGeographique']),   
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterStructureGeographique(this.formData)

        this.formData = {
                niveau: "",
             libelle: "",
            
        }
    },
// afficher modal
afficherModalModifierService(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editStructure = this.structures_geographiques[index];


        
 },
modifierStructureLocal(){
    this.modifierStructureGeographique(this.editStructure)
    this.editStructure = {
        niveau:"",
        libelle:""
    }
}

  }
};
</script>

