
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
            <h5>Liste des structures administratives</h5>
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
                <tr class="odd gradeX" v-for="(structure_administrative, index) in 
                localisationsFiltre" :key="structure_administrative.id">
                  <td @dblclick="afficherModalModifierStructureAdministrative(index)">
                      {{structure_administrative.niveau || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierStructureAdministrative(index)">
                      {{structure_administrative.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureAdministrative(structure_administrative.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucune structure administrative enregistrée! </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
            </div>

                <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalAjouterStructureAdministrative"
        bg-color="green"

  ></fab>

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter structure administrative</h3>
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
              @click.prevent="ajouterAdministrativeLocal" class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure administrative</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="editStructureAdministrative.niveau" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editStructureAdministrative.libelle" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editStructureAdministrative.niveau.length && editStructureAdministrative.libelle.length" 
             @click.prevent="modifierStructureLocal(editStructureAdministrative)" class="btn btn-primary"
              href="#">Modifier</button>
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
                niveau: "",
             libelle: ""
        },

        editStructureAdministrative: {
            niveau: "",
             libelle: ""
        },
         search:""
    };
  },
 
  created() {
    //this.getStructureAdministrative()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['structures_administratives']),
   
   
     localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_administratives.filter((item) => {
  
    // item.niveau.toLowerCase().includes(searchTerm) 
    return  item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', ['getStructureAdministrative', 'ajouterStructureAdministrative', 
   'supprimerStructureAdministrative', 'modifierStructureAdministrative']),   
   
    afficherModalAjouterStructureAdministrative(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterAdministrativeLocal () {
      this.ajouterStructureAdministrative(this.formData)

        this.formData = {
                niveau: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierStructureAdministrative(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editStructureAdministrative = this.structures_administratives[index];


        
 },
modifierStructureLocal()
{
  this.modifierStructureAdministrative(this.editStructureAdministrative)
  this.editStructureAdministrative = {

          niveau: "",
             libelle: ""
  }
}

  }
};
</script>

