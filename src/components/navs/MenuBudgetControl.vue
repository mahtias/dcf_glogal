<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="excution">
        <a
          title="Excution budgetaire"
          href="#"
          data-toggle="dropdown"
          data-target="#excution"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Excution budgetaire
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <!-- <router-link :to="{name: 'SourceFinancement'}" tag="a">
              <i class="icon-user"></i>
           Suivi d'une activité particulière 
            </router-link>
          </li> -->
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ParametreFonctionnelle'}" tag="a">
              <i class="icon-check"></i>
        Suivi du respect du PPM, du PTBA, du plan d'engagement et Cadre de performance

            </router-link>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivre l'exécution et les régularisations des régies
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi de certaines catégories d'opérations
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi du respect du référentiel des prix
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi du respect du glossaire des natures de dépense
            </a>
          </li>

          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi du patrimoine

            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi de la répartition des ressources
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi des dépenses improductives
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi des projets et programmes en transferts

            </a>
          </li>
          
           <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Suivi des actes de modification budgétaire
            </a>
          </li>

          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Comptabilisation des lettres d'avance
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Gestion des mandats-provision
            </a>
          </li>
          
          
        </ul>
      </li>
      <!--Out put-->
      <li class="" id="Out ">
        <a title="Out put" href="#" data-toggle="dropdown" data-target="#Out" >
          <i class="icon icon-user"></i>
          <span class="text">Out put</span>
          <b class="caret"></b>
        </a>
        
      </li>

<!-- indicateur
      -->
      <li class="" id="indicateur ">
        <a title="Indicateur" href="#" data-toggle="dropdown" data-target="#indicateur" >
          <i class="icon icon-user"></i>
          <span class="text">Indicateurs</span>
          <b class="caret"></b>
        </a>
        
      </li>
      <!-- tableau
      -->
      <li class="dropdown" id="tableau">
        <a
          title="Tableau de bord"
          href="#"
          data-toggle="dropdown"
          data-target="#tableau"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Tableau de bord</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Tableau de bord

            </a>
          </li>
        </ul>
      </li>
     
     
      
      
    </ul>
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
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
