<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <li class="dropdown" id="profile-messages">
        <a
          title="Unité administrative"              
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Unités administratives</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'SourceFinancement'}" tag="a">
              <i class="icon-user"></i>
             Gestion des unites administratives
            </router-link>
          </li>
          
        </ul>
      </li>

      <!--Documentation-->
      <li class="dropdown" id="menu-messages">
        <a
          title="Documentation"
          href="#"
          data-toggle="dropdown"
          data-target="#menu-messages"
          class="dropdown-toggle"
        >
          <i class="icon icon-user"></i>
          <span class="text">Documentation</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <a href="#">
              <i class="icon-user"></i>
              Type de texte
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#">
              <i class="icon-check"></i>
             Acte de creation des unites administratives
            </a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Note de service
            </a>
          </li>
           <li class="divider"></li>
          <li>
            <a href="login.html">
              <i class="icon-key"></i>Archivage des notes de service
            </a>
          </li>
        </ul>
      </li>
      <!--Paramètres programmes
      -->
      <li class="" id="">
        <a title="Out put" href="#"  class="">
          <i class="icon icon-user"></i>
          <span class="text">Out put</span>
        
        </a>
      </li>
      <li class="" id="">
        <a title="Indicateur" href="#"  class="">
          <i class="icon icon-user"></i>
          <span class="text">Indicateur</span>
          
        </a>
      </li>
      
<!--- tableau de bord -->
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
          <li>
            <a href="#">
              <i class="icon-user"></i>
              Tableau de bord
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
 
};
</script>
