<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="excution">
        <a
          title="Execution marchés-contrat"
          href="#"
          data-toggle="dropdown"
          data-target="#excution"                 
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Excution m.
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: ''}" tag="a">
              <i class="icon-user"></i>
            Secteur d'activité
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'ParametreFonctionnelle'}" tag="a">
              <i class="icon-check"></i>
             Entrprise
            </router-link>
          </li> -->
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi des obligations sociales
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Marchés & Contrats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Avenants
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> suivi du respects des delais contratuels
            </a>
          </li>
          
          
        </ul>
      </li>
      <!--Excution budgetaire-->
      <li class="dropdown" id="plant">
        <a title="Excution budgetaire" href="#" data-toggle="dropdown" data-target="#plant" 
        class="dropdown-toggle">
          <i class="icon icon-user"></i>
          <span class="text">Excution b.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
            Suivi des engagements
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Suivi des mandats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Documentation engagement-mandats
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
              Op hors SIGFIP provisoires

            </a>
          </li>

           <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Op hors SIGFIP définitifs 

            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
              Document op hors SIGFIP
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Suivi des rejets et des différés
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
             Suivi du délai de traitement des dossiers

            </a>
          </li>

        </ul>
      </li>
      <!-- document
      -->
      <li class="dropdown" id="mission">
        <a
          title="Suivi des missions"
          href="#"
          data-toggle="dropdown"
          data-target="#mission"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Suivi m.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'CategorieMission'}" tag="a">
              <i class="icon-key"></i> Catégories de missions
            </router-link>
          
          </li>
          <li class="divider"></li>
            <li> 
              <router-link :to ="{name: 'Imputation'}" tag="a">
                <i class="icon-user"></i> Imputation budget en mission
              </router-link>
            </li>
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'Mission'}" tag="a">
              <i class="icon-check"></i>
             Missions
            </router-link>
          </li>
        </ul>
      </li>
     
     
      
      <!-- Activite
      -->
      <li class="dropdown" id="tableau">
        <a title="Suivi des immobilisations" href="#" data-toggle="dropdown" data-target="#tableau" class="dropdown-toggle">
          <i class="icon icon-user"></i>
          <span class="text">Suivi I. </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Familles

            </a>
          </li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Services
            </a>
          </li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Immobilisation

            </a>
          </li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Amortissements
            </a>
          </li>

          
        </ul>
      </li>

  <!-- out put
      -->
      <li class="" id="put">
        <a
          title="Out put"
          href="#"
         
          data-target="#put"
          class=""
        >
          <i class="icon icon-user"></i>
          <span class="text">Out put</span>
          
        </a>
        
      </li>

  <!-- indicateur
      -->
       
      <!-- Généraux
      -->
         <li class="dropdown" id="bord">
        <a
          title="Tableau de bord"
          href="#"
          data-toggle="dropdown"
          data-target="#bord"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Tableau de bord</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'TableauDeBordMissions'}" tag="a">
              <i class="icon-key"></i>tableau de bord
            </router-link>
          
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
 
};
</script>
