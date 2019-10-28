<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!-- administratifs-->
      <li class="dropdown" id="administratif">
        <a
          title="Configurations budgetaires"
          href="#"
          data-toggle="dropdown"
          data-target="#administratif"      
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Configuration b.
               </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'SourceFinancement'}" tag="a">
              <i class="icon-user"></i>
             Budget general
            </router-link>
          </li>
          <li class="divider"></li>
          <!-- <li>
            <router-link :to="{name: 'ParametreFonctionnelle'}" tag="a">
              <i class="icon-check"></i>
             Budget en transfert
            </router-link>
          </li> -->
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Budget detaillé
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Mouvement budget detaillé
            </a>
          </li>
          <li class="divider"></li>
          
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> suivi des réamenagements budgetaires
            </a>
          </li>
          
          
        </ul>
      </li>
      <!--Plan des passations des marche-->
      <li class="dropdown" id="plant">
        <a title="Plan de passation des marchés" href="#" data-toggle="dropdown" data-target="#plant" class="dropdown-toggle">
          <i class="icon icon-user"></i>
          <span class="text">Plan de passation m. </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Type de marché
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Mode de passation
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Etapes de marchés
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>
              Marchés et contrats
            </a>
          </li>
          
        </ul>
      </li>
      <!-- document
      -->
      <li class="dropdown" id="document">
        <a
          title="Documentations des marchés "
          href="#"
          data-toggle="dropdown"
          data-target="#document"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Documentations m.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Document PTBA-PPM
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
              Document presence CF
            </a>
          </li>
        </ul>
      </li>
     
      
      <!-- out put
      -->
      <li class="" id="Depense">
        <a title="Out put" href="#" >
          <i class="icon icon-user"></i>
          <span class="text">Out put</span>
          <b class="caret"></b>
        </a>
        
      </li>
       <!-- indicateur
      -->
      <li class="" id="Depense">
        <a title="Indicateur" href="#">
          <i class="icon icon-user"></i>
          <span class="text">Indicateur</span>
          <b class="caret"></b>
        </a>
        
      </li>
      <!-- Activite
      -->
      <li class="dropdown" id="tableau">
        <a title="Tableau de bord" href="#" data-toggle="dropdown" data-target="#tableau" class="dropdown-toggle">
          <i class="icon icon-user"></i>
          <span class="text">Tableau bord</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>tableau de bord
            </a>
          </li>
          
        </ul>
      </li>
      <!-- Généraux
      -->
     
    </ul>
  </div>
</template>

<script>
/*import Navbar from "./Navbar";
import Milieu from "./Milieu";
import Nfooter from "./Nfooter";*/

export default {

};
</script>
