<template>
   <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
      <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Identification</a></li>
              <li><a data-toggle="tab" href="#tab2">Description</a></li>
              <li><a data-toggle="tab" href="#tab3">Decision de cf</a></li>
            </ul>
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">

                  
                  <table border="0px">
               
                      
                          <tr>


                  <td> 
            <div class="control-group">
              <label class="control-label">Categorie mission:</label>
              <div class="controls">
           <select v-model="formData.categorie_missions_id" class="span">
               <option v-for="budget in categories_missions" :key="budget.id" 
               :value="budget.id">{{budget.libelle}}</option>
           </select>
              </div>
            </div>
             </td>

                  <td> 
            <div class="control-group">
              <label class="control-label">Exercice budgetaire:</label>
              <div class="controls">
           <select v-model="formData.exercice_budgetaire_id" class="span">
               <option v-for="exercice in exercices_budgetaires" :key="exercice.id" 
               :value="exercice.id">{{exercice.annee}}</option>
           </select>
              </div>
            </div>
             </td>
                  <td> 
            <div class="control-group">
              <label class="control-label">Unite administrative:</label>
              <div class="controls">
           <select v-model="formData.ua_id" class="span">
               <option v-for="plans in uniteAdministratives" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
                  <td> 
            <div class="control-group">
              <label class="control-label">Acte de personnel:</label>
              <div class="controls">
           <select v-model="formData.acte_personnel_id" class="span">
               <option v-for="depense in all_acteur_depense" :key="depense.id" 
               :value="depense.id">{{depense.matricule}}</option>
           </select>
              </div>
            </div>
             </td>
               
                        <td> 
            <div class="control-group">
              <label class="control-label">Objet:</label>
              <div class="controls">
     <input type="text" v-model="formData.objet" class="span" 
     placeholder="Saisir l'objet" />
              </div>
            </div>
                              </td>
                    

              
                          </tr>

                          <tr>
                                    
                      

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Destination:</label>
              <div class="controls">
                <input type="text" v-model="formData.destination" 
                class="span"  />
                </div>
                  </div>
                              </td>
                          

                          

                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Itineraire retenu:</label>
              <div class="controls">
                <input type="text" v-model="formData.itineraire_retenu" 
                class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Moyen de transport:</label>
              <div class="controls">
                <input type="text" v-model="formData.moyen_transport" 
                class="span"  />
                </div>
                  </div>
                    </td>

                    <td>           
               <div class="control-group">
              <label class="control-label">Type de mission:</label>
              <div class="controls">
                <select v-model="formData.type_mission" class="span">
        <option value="choisir">--veillez selectionner le type de mission--</option>
                  <option value="mission civ">Mission en cote d'ivoire</option>
                  <option value="mission hors civ">Mission hors cote d'ivoire</option>
                  
                </select>
              </div>
            </div>
                          <td>           
               <div class="control-group">
              <label class="control-label">Date de mission:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_mission" class="span"/>
              </div>
                </div>
                </td>
                

                   
                     </tr>

                       <tr>
                         
                       <td>         
                  
               <div class="control-group">
              <label class="control-label">Class voyage:</label>
              <div class="controls">
                <input type="text" v-model="formData.classe_voyage" 
                class="span"  />
                </div>
                  </div>
                        </td>
                        
                         <td>         
                  
               <div class="control-group">
              <label class="control-label">Numero autorisation:</label>
              <div class="controls">
                <input type="text" v-model="formData.numero_autorisation" 
                class="span"  />
                </div>
                  </div>
                              </td>


                                        <td> 
            <div class="control-group">
              <label class="control-label">N°ccm:</label>
              <div class="controls">
     <input type="text" v-model="formData.numero_ccm" class="span" 
     placeholder="Saisir le numero" />
              </div>
            </div>
                      </td>

                       <td>         
               <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
          <input type="file" id="file" ref="myFiles" @change="previewFiles" multiple  />
                </div>
                  </div>
                     </td>

                       </tr>
                       </table> 
         
                 
                 
            
                </div>
            <div id="tab2" class="tab-pane">
                  <table border="0px">
    
                          <tr>


                  <!-- <td> 
            <div class="control-group">
              <label class="control-label">categorie mission:</label>
              <div class="controls">
           <select v-model="formData.categorie_missions_id" class="span">
               <option v-for="budget in categories_missions" :key="budget.id" 
               :value="budget.id">{{budget.libelle}}</option>
           </select>
              </div>
            </div>
             </td> -->
                        <td> 
             <div class="control-group">
              <label class="control-label">Montant:</label>
              <div class="controls">
     <input type="number" v-model="formData.montant" class="span" 
     placeholder="Saisir le montant" />
              </div>
            </div>
                              </td>
                              <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Date depart:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_depart" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Date retour:</label>
              <div class="controls">
                <input type="date" :min="formData.date_depart" :readonly="getDateRetourValue" v-model="formData.date_retour" 
                class="span"  />
                </div>
                  </div>
                              </td>


                     <td> 
            <div class="control-group">
              <label class="control-label">Durée:</label>
              <div class="controls">
     <input type="text" readonly :value="nombreJourCalucle" class="span" 
     placeholder="Saisir la durée" />
              </div>
            </div>
                     </td>
                          </tr>

                          <tr>
                                    
                              <td style="width:;">           
              <div class="control-group">
              <label class="control-label">Mode de paiment:</label>
              <div class="controls">
                <select v-model="formData.mode_paiement" class="span">
              <option value="choisir">--veillez selectionner le paiement--</option>
                  <option value="Virement">Virement</option>
                  <option value="chèque">Chèque</option>
                   <option value="espèce">Espèce</option>
                </select>
              </div>
            </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Frais de restauration:</label>
              <div class="controls">
                <input type="number" v-model="formData.frais_restauration" 
                class="span"  />
                </div>
                  </div>
                              </td>
                          

                          

                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">frais d'hebergement:</label>
              <div class="controls">
                <input type="text" v-model="formData.frais_hebergement" 
                class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Frais de deplacement:</label>
              <div class="controls">
                <input type="text" v-model="formData.frais_deplacement" 
                class="span"  />
                </div>
                  </div>
                              </td>

                          </tr>
           
             
       
            </table> 
            </div>
            <div id="tab3" class="tab-pane">
                  
                  <table border="0px">
                          <tr>

                         
                             <td>         
                  
               <div class="control-group">
              <label class="control-label">Date visa du cf:</label>
              <div class="controls">
                <input type="date" v-model="formData.date_visa_cf" 
                class="span"  />
                </div>
                  </div>
                  </td>


                        <td> 
            <div class="control-group">
              <label class="control-label">Decision du cf:</label>
              <div class="controls">
                <select v-model="formData.decision_cf" class="span">
                  <option value="choisir">--veillez selectionner la decision--</option>
                  <option value="validée">Validée</option>
                  <option value="differée">Differée</option>
                   <option value="rejetée">rejetée</option>
                </select>
              </div>
            </div>
                      </td>

             <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Motif:</label>
              <div class="controls">
                <input type="text" v-model="formData.motif" class="span"/>
              </div>
                </div>
                </td>


                      <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Signataire:</label>
              <div class="controls">
                <input type="text" v-model="formData.signataire" class="span"/>
              </div>
                </div>
                </td>

                      

                          </tr>
                
       
                      </table> 

                    </div>

         

              </div>
               </div>

             </div>

                </div>
           <div align="right">
             <button
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button> &nbsp;&nbsp;&nbsp;
              <button @click.prevent="AllerAPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
                </div>


               
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

                   objet:"",
             date_mission: "",
             categorie_missions_id:"",
             numero_autorisation:"",
             destination:"",
             type_mission:"",
             numero_ccm:"",
             moyen_transport:"",
             itineraire_retenu:"",
             montant:"",
             mode_paiement:"",
             duree:"",
             date_retour:"",
             date_depart:"",
             frais_deplacement:"",
             frais_hebergement:"",
             fichier_joint:"",
             signataire:"",
             decision_cf:"",
             date_visa_cf:"",
             motif:"" ,
             acte_personnel_id:"",
             ua_id:"" ,
             exercice_budgetaire_id:""
            
        },

             
           
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions','missions']) ,
  ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
  ...mapGetters('personnelUA', ['all_acteur_depense']),
   ...mapGetters('uniteadministrative', ['uniteAdministratives']),

   nombreJourCalucle(){
     const form = this.formData
     if(form.date_depart == form.date_retour && form.date_retour !== "" && form.date_depart !== "") return 1 
        if( form.date_retour == "" && form.date_depart == "") return null 
   var dateR = new Date(form.date_retour).getTime()
    var dateD = new Date(form.date_depart).getTime()
    var diffTime = dateR - dateD

    var diffJours = diffTime / (1000 * 3600 * 24)
          if(isNaN(diffJours)) return null

    if(parseFloat(diffJours) < 0 ) return "durée invalide"

      return diffJours;
   },

   getDateRetourValue(){
     return !this.formData.date_depart != ""
   }





  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission', 'ajouterMission', 
   'modifierMission','supprimerMission']),  
   previewFiles() {
      this.files = this.$refs.myFiles.files;
    }, 
   
  // fonction pour aller a la page de la liste
    AllerAPageListe(){
  
    this.$router.push({
        name: 'Mission'
    })
    },
    
   // fonction pour vider l'input
     ajouterBudgetaireLocal () {
       var nouvelObjet = {
         ...this.formData,
         duree: this.nombreJourCalucle

            }
     this.ajouterMission(nouvelObjet)

        this.formData = {
               objet:"",
             date_mission: "",
             categorie_missions_id:"",
             numero_autorisation:"",
             destination:"",
             type_mission:"",
             numero_ccm:"",
             moyen_transport:"",
             itineraire_retenu:"",
             montant:"",
             mode_paiement:"",
             duree:"",
             date_retour:"",
             date_depart:"",
             frais_deplacement:"",
             frais_hebergement:"",
             fichier_joint:"",
             signataire:"",
             decision_cf:"",
             date_visa_cf:"",
             motif:""
            
         }
     },


  }
};
</script>