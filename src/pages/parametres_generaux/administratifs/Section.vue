
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
            <h5>Liste des sections</h5>
             <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div>
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Code</th>
                  <th>Nom section</th>
                  <th>Nature de section</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(section, index) 
                in localisationsFiltre" :key="section.id">
                  <td @dblclick="afficherModalModifierSection(index)">
                    {{section.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierSection(index)">
                    {{section.nom_section || 'Non renseigné'}}</td>
                    
                   <td @dblclick="afficherModalModifierSection(index)">
                      {{section.nature_section.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerSection(section.id)"  class="btn btn-danger ">
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
                <h6 style="color:red;">Aucune section enregistrée ! </h6>
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
                <h3>Ajouter section</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  
             <div class="control-group">
              <label class="control-label">Nature de section:</label>
              <div class="controls">
                <select  v-model="formData.naturesection_id">
            <option v-for="resultat in natures_sections" :key="resultat.id" 
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
              <label class="control-label">Nom section:</label>
              <div class="controls">
                <input type="text" v-model="formData.nom_section" class="span" placeholder="Saisir le nom de section" />
              </div>
            </div>
            
               
          </form>              
          </div>
           <div class="modal-footer"> 
             <button  v-show="formData.code.length && formData.nom_section.length &&
              formData.naturesection_id" 
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier section</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

               <div class="control-group">
              <label class="control-label">Nature de section:</label>
              <div class="controls">
                <select  v-model="editSection.naturesection_id">
            <option v-for="resultat in  natures_sections" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editSection.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Nom section:</label>
              <div class="controls">
                <input type="text" v-model="editSection.nom_section" class="span" placeholder="" />
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editSection.code.length && editSection.nom_section.length &&
              editSection.naturesection_id" 
              @click.prevent="modifierSectionLocal(editSection)" class="btn btn-primary"
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
             nom_section: "",
             naturesection_id:""
        },

        editSection: {
            code: "",
             nom_section: "",
              naturesection_id:""
        },
       search:""
    };
  },
 
  created() {
    // this.getTypeFinancement()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxAdministratif', ['natures_sections', 
  'sections']) ,
  
            localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.sections.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.nom_section.toLowerCase().includes(searchTerm)

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxAdministratif', ['getSection', 
    'ajouterSection', 
   'supprimerSection', 'modifierSection']),     
   
    afficherModalAjouterTitre(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterSection(this.formData)

        this.formData = {
                code: "",
             nom_section: "",
            naturesection_id:""
        }
    },

// afficher modal
afficherModalModifierSection(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editSection = this.sections[index];


        
 },
modifierSectionLocal(){
  this.modifierSection(this.editSection)
  this.editSection = {
                code: "",
             nom_section: "",
             naturesection_id:""
  }
},
//   sup(id){
// this.supprimerChapitre(id)
//  this.getChapitre()
//   }

  }
};
</script>

