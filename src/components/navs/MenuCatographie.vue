<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <li class="dropdown" id="profile-messages">
        <a
          title="Cartographie des opérations budgétaires"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Cartographie op.</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          
          <!-- <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ParametreFonctionnelle'}" tag="a">
              <i class="icon-check"></i>
             Géolocalisation et analyse spatiale
            </router-link>
          </li> -->
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i> Analyse des opérations
            </a>
          </li>

          
        </ul>
      </li>
      
      <!--Paramètres programmes
      -->
      <li class="" id="out">
        <a title="Out put" href="#" class="">
          <i class="icon icon-users"></i>
          <span class="text">Out put</span>
        </a>
      </li>

<li class="" id="indicateur">
        <a title="Indicateur" href="#" class="">
          <i class="icon icon-users"></i>
          <span class="text">Indicateur</span>
        </a>
      </li>
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
