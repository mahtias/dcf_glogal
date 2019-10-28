<template>
  <div>
    <!--Header-part-->
    <div id="header">
      <h1>
        <a href="dashboard.html">Matrix Admin</a>
      </h1>
    </div>
    <!--close-Header-part-->
    <!--sidebar-menu-->
    <div id="sidebar" style="position: fixed;">
      <a title=" Dashboard" href="#" class="visible-phone">
        <i class="icon icon-home"></i>Dashboard
      </a>
      <ul>
        <li :class="{active: active_el == 0 }" @click.prevent="activate(0)">
          <a href="index.html">
            <i class="icon icon-home"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li :class="{active: active_el == 11 }" @click.prevent="navigateToParametreGeneraux">
          <a title="PARAMETRES GENERAUX" href="#">
            <i class="icon icon-signal"></i>
            <span>PARAMETRES GENERAUX</span>
          </a>
        </li>
        <li @click.prevent="navigateToUniteAdministrative" :class="{active: active_el == 1 }">
          <a  title="" href="#">
            <i class="icon icon-inbox"></i>
            <span>UNITE ADMINISTRATIVE</span>
          </a>
        </li>
        <li  @click.prevent="navigateToActeurDepense" :class="{active: active_el == 2 }">
          <a href="#">
            <i class="icon icon-th"></i>
            <span>ACTEURS DE LA DEPENSE</span>
          </a>
        </li>
        <li @click.prevent="activate(3)" :class="{active: active_el ==3}">
          <a href="#">
            <i class="icon icon-fullscreen"></i>
            <span>PLANIFICATION</span>
          </a>
        <li @click.prevent="activate(4)" :class="{active: active_el ==4}">
          <a title="SUIVIB ET CONTROLE BUDGETAIRE 1" href="#">
            <i class="icon icon-th-list"></i>
            <span>SUIVI ET CONTRÔLE B.</span>
            <span class="label label-important"></span>
          </a>
        
        <li @click.prevent="activate(13)" :class="{active: active_el ==13}">
          <a title="SUIVIB ET CONTROLE BUDGETAIRE 2" href="#">
            <i class="icon icon-tint"></i>
            <span>SUIVI ET CONTRÔLE B.</span>
          </a>
        </li>
        <li @click.prevent="activate(5)" :class="{active: active_el ==5}">
          <a title="CARTOGRAPHIE DES OPERATIONS BUDGETAIRES" href="#">
            <i class="icon icon-pencil"></i>
            <span>CARTOGRAPHIE DES OP. B.</span>
          </a>
        </li>
        <li @click.prevent="activate(6)" :class="{active: active_el ==6}">
          <a title="CONTRÔLE AXE SUR LA PERFORMANCE" href="#">
            <i class="icon icon-file"></i>
            <span>CONTRÔLE AXE SUR LA P.</span>
            <span class="label label-important"></span>
          </a>
        </li>
        <li  @click.prevent="activate(7)" :class="{active: active_el ==7}">
          <a title="OPERATIONNALISATION DU RAPPORT D’ACTIVITE ET DE LA CARTOGRAPHIE DES RISQUES" href="#">
            <i class="icon icon-info-sign"></i>
            <span>OP. DU RAPPORT ACTIVITE...</span>
            <span class="label label-important"></span>
          </a>
        </li>
        <li @click.prevent="activate(8)" :class="{active: active_el ==8}">
          <a title="OPERATIONNALISATION DU DISPOSITIF DE CONTRÔLE INTERNE" href="#">
            <i class="icon icon-heart"></i>
            <span>OP. DU DISPOSITIF DE C. I.</span>
            <span class="label label-important"></span>
          </a>
        </li>

           <li @click.prevent="logoutUser()" >
          <a title="DECONNEXION" href="#">
            <i class="icon icon-off"></i>
            <span>DECONNEXION</span>
            <span class="label label-important"></span>
          </a>
        </li>
      </ul>
    </div>
    <!--sidebar-menu-->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  mounted() {
    // console.log(this.$store.state);
  },

  computed: {
      ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
  },

  methods: {
   
      ...mapMutations('parametrageMenu', ['activate']),
      ...mapActions('Utilisateurs', ['logoutUser']),

      navigateToActeurDepense(){
        this.activate(2)
        this.$router.push({
          name: 'TableauBordActeurDepense'
        })
      },

       navigateToUniteAdministrative(){
        this.activate(1)
        this.$router.push({
          name: 'tableaudebord'
        })
      },

       navigateToParametreGeneraux(){
        this.activate(11)
        this.$router.push({
          name: 'ExerciceBudgetaire'
        })
      }


    


  }
};
</script>
