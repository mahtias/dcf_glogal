<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="administratifs">
        <a                                                
          title ="Administratifs" 
          href="#"
          data-toggle="dropdown"           
          data-target="#administratifs"
          class="dropdown-toggle"
        >
          <i class="icon icon-align-justify"></i>
          <span class="text">   Administratifs</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'ExerciceBudgetaire'}" tag="a">
              <i class="icon-user"></i>
              Exercise budgetaire
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Titre'}" tag="a">
              <i class="icon-check"></i>
              Titre
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'NatureSection'}" tag="a">
              <i class="icon-plus"></i> Nature de section
            </router-link>
          </li>
           <li>
            <router-link :to="{name:'Section'}" tag="a">
              <i class="icon-key"></i> Section
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'StructureProgramme'}" tag="a">
              <i class=" icon-star"></i> Structure progragmme
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'PlanProgramme'}" tag="a">
              <i class="icon-stop"></i> Plan programme
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'StructureAdministrative'}" tag="a">
              <i class="icon-th"></i> Structure administrative
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ServiceGestionnaire'}" tag="a">
              <i class="icon-key"></i> Service gestionnaire
            </router-link>
          </li>


           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'SrtuctureGeographique'}" tag="a">
              <i class="icon-plane"></i> Structure geographique
            </router-link>
          </li>

           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'LocalisationGeographique'}" tag="a">
              <i class="icon-plus"></i> Localisation géographique
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Chapitre'}" tag="a">
              <i class="icon-stop"></i> Chapitre
            </router-link>
          </li>
         
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'GrandeNature'}" tag="a">
              <i class="icon-user"></i> Grande Nature
            </router-link>
          </li>
        </ul>
      </li>
      <!--Source de financement-->
      <li class="dropdown" id="source_financement">
        <a title = "Source de financement" href="#" data-toggle="dropdown" data-target="#source_financement" class="dropdown-toggle">
          <i class="icon icon-film"></i>
          <span class="text">    Source de f.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
           
             <router-link :to="{name:'SourceFinancement'}" tag="a">
              <i class="icon-check"></i> Source de Financement
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name:'TypeFinancement'}" tag="a">
              <i class="icon-key"></i> Type de Financement
            </router-link>
          </li>
        </ul>
      </li>
      <!-- fonctionnelle
      -->
       <li class="dropdown" id="fonctionnelle">
        <a title = "fonctionnelle" href="#" data-toggle="dropdown" data-target="#fonctionnelle" class="dropdown-toggle">
          <i class="icon icon-signal"></i>
          <span class="text">  Fonctionnelle</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'StructureFonctionnelle'}" tag="a">
              <i class="icon-check"></i>
              Structure fonctionnelle
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'PlanFonctionnel'}" tag="a">
              <i class="icon-key"></i> Plan fonctionnel
            </router-link>
          </li>
        </ul>
      </li>
      <!-- Programme
      -->
      <!-- <li class="dropdown" id="programmes">
        <a title="Programme" href="#" data-toggle="dropdown" data-target="#programmes" class="dropdown-toggle">
          <i class="icon icon-user"></i>
          <span class="text">Programme</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'StructureProgramme'}" tag="a">
              <i class="icon-key"></i> Structure Programme
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Classification Programme
            </a>
          </li>
        </ul>
      </li> -->

      <!-- Nature de Depense
      -->
      <li class="dropdown" id="Depense">
        <a title="Nature de depense" href="#" data-toggle="dropdown" data-target="#Depense" class="dropdown-toggle">
          <i class="icon icon-star"></i>
          <span class="text">  Nature d.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'StructureBudgetaire'}" tag="a">
              <i class="icon-key"></i> Structure Budgetaire
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'PlanBudgetaire'}" tag="a">
              <i class="icon-check"></i>
              Plan Budgetaire
            </router-link>
          </li>
        </ul>
      </li>
      <!-- Activite
      -->
      <li class="dropdown" id="Activite">
        <a title="Activité" href="#" data-toggle="dropdown" data-target="#Activite" class="dropdown-toggle">
          <i class="icon icon-table"></i>
          <span class="text">  Activité</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'StructureAtivite'}" tag="a">
              <i class="icon-key"></i> Structure Activité
            </router-link>
          </li>
          
        </ul>
      </li>

      <!-- Généraux
      -->
      <li class="dropdown" id="generaux">
        <a title="Parametres généraux" href="#" data-toggle="dropdown" data-target="#generaux" class="dropdown-toggle">
          <i class="icon icon-th"></i>
          <span class="text">  Parametre G.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'Unite'}" tag="a">
              <i class="icon-key"></i> Unité
            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ZoneGeographique'}" tag="a">
              <i class="icon-check"></i>
              Zone Géographique
            </router-link>
          </li>
        </ul>
      </li>
    </ul>


 <!-- <div  class="quick-actions_homepage">
    <ul class="quick-actions">
      <li class="bg_lb"> <a href="#"> <i class="icon-dashboard"></i>
       Administratif </a> </li>
      <li class="bg_lg"> <a href="#"> <i class="icon-shopping-cart"></i> 
      Source de financement</a> </li>
      <li class="bg_ly"> <a href="#"> <i class=" icon-globe"></i> 
      Struture fonctionnelle </a> </li>
      <li class="bg_lo"> <a href="#"> <i class="icon-group"></i> 
      Nature de depense </a> </li>
      <li class="bg_ls"> <a href="#"> <i class="icon-signal"></i> 
      Activites</a> </li>
       <li class="bg_ls"> <a href="#"> <i class="icon-plus"></i> 
        generaux</a> </li>
    </ul>
  </div> -->




  </div>
</template>

<script>
/*import Navbar from "./Navbar";
import Milieu from "./Milieu";
import Nfooter from "./Nfooter";*/

export default {
  /* components: {
    Navbar,
    Milieu,
    Nfooter
  },*/
 
};
</script>
