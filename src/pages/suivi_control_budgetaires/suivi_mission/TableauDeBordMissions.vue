
<template>
  <div>
    <!-- End Page Header -->
    <!-- Default Light Table -->

    <div class="container-fluid">
         <div class="quick-actions_homepage" style="position: center;">
      <ul class="quick-actions" >
        
        <li class="bg_lb" title="Nombre total de mission global">
             <a href="#">
            <i class="icon-dashboard"></i> <span class="label label-important">{{nombreTotalDeTouteMissions}}
        </span> Nombre total de missions. </a> </li>
              
        <li class="bg_lg " title="Duree moyenne de mission">
             <a href="#">
             <i class="icon-eject"></i> <span class="label label-important">{{dureeMoyenneDeTouteLesMissions}} jrs</span>
                 Duree moyenne de missions 
             </a> </li>

        <li class="bg_ly" title="Montant total des missions ">
            <a href="#">
        <i class="icon-user"></i><span class="label label-success">{{formatageSomme(parseFloat(montantTotalDeToutesLesMissions))}}
           </span> Montant total de missions . </a> </li>

        <li class="bg_lo" title="cout moyen des billets d'avion globale de mission">
             <a href="#">
             <i class="icon-th"></i><span class="label label-warning">{{formatageSomme(parseFloat(coutMoyenDeBilletAvionDeMissions))}}
              </span> Cout moyen des billets d'avion.</a> </li>

        <li class="bg_ls" title="Taux de dossiers de missions rejetés">
             <a href="#">
            <i class="icon-fullscreen"></i><span class="label label-success">{{tauxDossierRejetMissions}}
                %</span>
             Tx de dossiers de m. rejetés.</a> </li>
             
              <li class="bg_lb " title="taux de dossiers de missions validés"> 
                <a href="#"> <i class="icon- icon-pencil"></i><span class="label label-success">{{tauxValiderDossierMissions}}
               % </span>  tx de dossiers de m. validés</a> </li>

                    <li class="bg_lr" title="taux de dossiers de missions differés"> 
                <a href="#"> <i class="icon-info-sign"></i><span class="label label-primary">{{tauxDiffererDossiermission}}
               % </span>  tx de dossiers m. differés </a> </li>



                 <li class="bg_lg" title="cout moyen de mission "> 
                <a href="#"> <i class="icon-info-sign"></i><span class="label label-primary">{{formatageSomme(parseFloat(coutMoyenDeMissions))}}
             </span> cout moyen de missions </a> </li>
      

        
      </ul>
    </div>
     

    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import {formatageSomme} from '../../../Repositories/Repository'
export default {
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("suivi_controle_budgetaire", [
      "nombreTotalDeTouteMissions",
      "montantTotalDeToutesLesMissions",
      "dureeMoyenneDeTouteLesMissions",
      "coutMoyenDeBilletAvionDeMissions",
      "tauxDossierRejetMissions",
      "tauxValiderDossierMissions",
      "tauxDiffererDossiermission",
      "coutMoyenDeMissions"
 

      // "nbreArchivageNotes"
    ]),
    // filtre_archivage_document() {
    //   const st = this.search.toLowerCase();
    //   return this.archivageDocuments.filter(archivagedocument => {
    //     return (
    //       archivagedocument.reference.toLowerCase().includes(st) ||
    //       archivagedocument.unite_administrative.libelle
    //         .toLowerCase()
    //         .includes(st) ||
    //       archivagedocument.type_texte.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    formatageSomme:formatageSomme
  }
};
</script>



<style>
.nbre {
  background-color: #27a9e3;
}
.center1 {
  margin: 5px 270px 5px;
}
</style>
