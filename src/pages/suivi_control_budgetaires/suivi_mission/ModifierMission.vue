<template>
   <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
      <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1">Modification champ1</a></li>
              <li><a data-toggle="tab" href="#tab2">Modification champ2</a></li>
              <li><a data-toggle="tab" href="#tab3">Modification champ3</a></li>
            </ul>
          </div>
          <div class="widget-content tab-content">
            <div id="tab1" class="tab-pane active">

                  
                  <table border="0px">
               
                      
                          <tr>


                  <td> 
            <div class="control-group">
              <label class="control-label">categorie mission:</label>
              <div class="controls">
           <select v-model="editMission.categorie_missions_id" class="span">
               <option v-for="budget in categories_missions" :key="budget.id" 
               :value="budget.id">{{budget.libelle}}</option>
           </select>
              </div>
            </div>
             </td>
                        <td> 
            <div class="control-group">
              <label class="control-label">Objet:</label>
              <div class="controls">
     <input type="text" v-model="editMission.objet" class="span" 
     placeholder="Saisir l'objet" />
              </div>
            </div>
                              </td>
                              <td style="width:2px;">           
               <div class="control-group">
              <label class="control-label">Date de mission:</label>
              <div class="controls">
                <input type="date" v-model="editMission.date_mission" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Numero autorisation:</label>
              <div class="controls">
                <input type="number" v-model="editMission.numero_autorisation" 
                class="span"  />
                </div>
                  </div>
                              </td>


                                        <td> 
            <div class="control-group">
              <label class="control-label">Numero du commerce:</label>
              <div class="controls">
     <input type="number" v-model="editMission.numero_ccm" class="span" 
     placeholder="Saisir le numero" />
              </div>
            </div>
                                        </td>
                          </tr>

                          <tr>
                                    
                              <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Type de mission:</label>
              <div class="controls">
                <input type="text" v-model="editMission.type_mission" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Destination:</label>
              <div class="controls">
                <input type="text" v-model="editMission.destination" 
                class="span"  />
                </div>
                  </div>
                              </td>
                          

                          

                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Itineraire retenu:</label>
              <div class="controls">
                <input type="text" v-model="editMission.itineraire_retenu" 
                class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Moyen de transport:</label>
              <div class="controls">
                <input type="text" v-model="editMission.moyen_transport" 
                class="span"  />
                </div>
                  </div>
                              </td>

                             <td>         
                  
               <div class="control-group">
              <label class="control-label">Class voyage:</label>
              <div class="controls">
                <input type="text" v-model="editMission.classe_voyage" 
                class="span"  />
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
           <select v-model="editMission.categorie_missions_id" class="span">
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
     <input type="number" v-model="editMission.montant" class="span" 
     placeholder="Saisir le montant" />
              </div>
            </div>
                              </td>
                              <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Date depart:</label>
              <div class="controls">
                <input type="date" v-model="editMission.date_depart" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Date retoure:</label>
              <div class="controls">
                <input type="date" v-model="editMission.date_retour" 
                class="span"  />
                </div>
                  </div>
                              </td>


                     <td> 
            <div class="control-group">
              <label class="control-label">Duree:</label>
              <div class="controls">
     <input type="number" v-model="editMission.duree" class="span" 
     placeholder="Saisir le numero" />
              </div>
            </div>
                     </td>
                          </tr>

                          <tr>
                                    
                              <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Mode de paiement:</label>
              <div class="controls">
                <input type="text" v-model="editMission.mode_paiement" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Frais de restauration:</label>
              <div class="controls">
                <input type="number" v-model="editMission.frais_restauration" 
                class="span"  />
                </div>
                  </div>
                              </td>
                          

                          

                         <td style="width:;">           
               <div class="control-group">
              <label class="control-label">frais d'hebergement:</label>
              <div class="controls">
                <input type="text" v-model="editMission.frais_hebergement" 
                class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Frais de deplacement:</label>
              <div class="controls">
                <input type="text" v-model="editMission.frais_deplacement" 
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
                <input type="date" v-model="editMission.date_visa_cf" 
                class="span"  />
                </div>
                  </div>
                  </td>

             <td> 
            <div class="control-group">
              <label class="control-label">Decision du cf:</label>
              <div class="controls">
                <select v-model="editMission.decision_cf" class="span">
                  <option value="choisir">--veillez selectionner la decision--</option>
                  <option value="0">Validée</option>
                  <option value="1">Differée</option>
                   <option value="2">rejetée</option>
                </select>
              </div>
            </div>
                      </td>

             <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Motif:</label>
              <div class="controls">
                <input type="text" v-model="editMission.motif" class="span"/>
              </div>
                </div>
                </td>
                    
                      <td style="width:;">           
               <div class="control-group">
              <label class="control-label">Signataire:</label>
              <div class="controls">
                <input type="text" v-model="editMission.signataire" class="span"/>
              </div>
                </div>
                </td>

                              <td>         
                  
               <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="text" v-model="editMission.fichier_joint" 
                class="span"  />
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
              @click.prevent="modifierMission" class="btn btn-primary"
              >Modifier</button> &nbsp;&nbsp;&nbsp;
              <button @click.prevent="AllerPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> 
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
    
    
    

        editMission: {
            //     objet:"",
            //  date_mission: "",
            //  categorie_missions_id:"",
            //  numero_autorisation:"",
            //  destination:"",
            //  type_mission:"",
            //  numero_ccm:"",
            //  moyen_transport:"",
            //  itineraire_retenu:"",
            //  montant:"",
            //  mode_paiement:"",
            //  duree:"",
            //  date_retour:"",
            //  date_depart:"",
            //  frais_deplacement:"",
            //  frais_hebergement:"",
            //  fichier_joint:"",
            //  signataire:"",
            //  decision_cf:"",
            //  date_visa_cf:"",
            //  motif:""
            
        },
           
    };
  },
mounted(){
 this.editMission = this.missions.find(
   mission => mission.id == this.$route.params.id_mission
 )
},
 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['categories_missions','missions']) ,
   
  
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getMission', 'modifierMission']),   
   
    // fonction pour aller a la page liste
    AllerPageListe()
    {
      this.$router.push({
        name:'Mission'
      })
    },


// vider l'input
// modifierMissionLocal(){
//   this.modifierMission(this.editMission)

// }

  }
};
</script>