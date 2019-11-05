<template>
     <div class="container-fluid">
            <div class="row-fluid">
                 <div class="span12">

                <div class="widget-box">
                     <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Detail de mission</h5>
            
             
          </div>
             <table class="table table-bordered table-striped">
              <thead>
                <tr>
                   <th>Exercice budgetaires</th>
                  <th> Categorie mission</th>
                   <th>Objet</th>
                  <th> Type de mission</th>
                  <th>Date de mission</th>
                  <th>Date de depart</th>
                  <th>UA</th>
                  <th>Acte personnel</th>
                </tr>
              </thead>
              <tbody>                          
                <tr class="odd gradeX" >
                  <td >
                     {{mission.objetExerciceBudegetaire.annee}}</td> 
                  <td>
                      {{mission.categorie_mission.libelle || 'Non renseigné'}}</td> 
                 <td >
                      {{mission.objet || 'Non renseigné'}}</td>

                    <td >
                      {{mission.type_mission || 'Non renseigné'}}</td>

                      <td >
                      {{mission.date_mission || 'Non renseigné'}}</td>

                 <td >
                      {{mission.date_depart || 'Non renseigné'}}</td>
                      
                       <td >
                      {{mission.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>
                            
                    <td >
                     {{mission.objetActeurDepense.matricule}}</td> 
                    
                </tr>
              </tbody>
            </table>




                 <table class="table table-bordered table-striped">
              <thead>
                <tr>

                   <th>Mode de paiment</th>
                   <th>Frais de restauration</th>
                  <th>Frais d'hebergement</th>
                  <th>frais de deplacement</th>
                  <th>Date visa du cf</th>
                  <th>Decision du cf</th>
                  <th>Motif</th>
                  <th>Signataire</th>
                  <th>fichier joint</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" >
               
                <td >{{mission.mode_paiement || 'Non renseigné'}}</td> 
                
                 <td >  {{formatageSomme(parseFloat(mission.frais_restauration)) || 'Non renseigné'}}</td>

                   
                 <td > {{formatageSomme(parseFloat(mission.frais_hebergement)) || 'Non renseigné'}}</td>

                      
                 <td >{{formatageSomme(parseFloat(mission.frais_deplacement)) || 'Non renseigné'}}</td>

              
                  <td >  {{ formaterDate(mission.date_visa_cf) || 'Non renseigné'}}</td>
                      
                      
                <td > {{mission.decision_cf || 'Non renseigné'}}</td>

                     
                      <td >  {{mission.motif || 'Non renseigné'}}</td>

                    
                     <td > {{mission.signataire || 'Non renseigné'}}</td>
                      
                      <td > {{mission.fichier_joint || 'Non renseigné'}}</td>
                    
                
                </tr>
              </tbody>
            </table>
             
         <table class="table table-bordered table-striped">
              <thead>
                <tr>

                   <th>Date de retour</th>
                   <th>Duree</th>
                  <th>Numero autorisation</th>
                  <th>Numero ccm</th>
                  <th>Classe voyage</th>
                  <th>Montant de la mission</th>
                  <th>Destination</th>
                   <th>Itineraire retenu</th>
                    <th>Moyen de transport</th>
                
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" >
             
                 <td > {{mission.date_retour || 'Non renseigné'}}</td> 
                
                  <td>{{mission.duree || 'Non renseigné'}}</td>

                    
                  <td >{{mission.numero_autorisation || 'Non renseigné'}}</td>

                    
                    <td >  {{mission.numero_ccm || 'Non renseigné'}}</td>

                
                     <td > {{mission.classe_voyage || 'Non renseigné'}}</td>
                      
                      
                     <td > {{formatageSomme(parseFloat(mission.montant)) || 'Non renseigné'}}</td>

                       
                     <td > {{mission.destination || 'Non renseigné'}}</td>

                       
                     <td > {{mission.itineraire_retenu || 'Non renseigné'}}</td>
                        
                     <td > {{mission.moyen_transport || 'Non renseigné'}}</td>
                   
                    
                
                </tr>
              </tbody>
            </table>
            </div>
            </div>
     </div>
     </div>

</template>
<script>
import {mapGetters} from 'vuex'
import {formatageSomme} from '../../../Repositories/Repository'
import moment from "moment";

export default {
    data(){
    return{
        mission: undefined
    }
},
 created(){
 this.mission = this.getMissionPersonnaliser.find(
   mission => mission.id == this.$route.params.id_mission
 )
},

 computed: {
// methode pour maper notre guetter
   ...mapGetters('suivi_controle_budgetaire', ['getMissionPersonnaliser'])
   
  },
  methods:{
    formatageSomme:formatageSomme,


    // formater la date
 formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  }
}
</script>