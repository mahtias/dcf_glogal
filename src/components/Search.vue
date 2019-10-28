<template>
  <div id="search">
   

       <div class="btn-group" v-if="$store.state.Utilisateurs.user !== null">
              <button data-toggle="dropdown"
                style="color: white;" 
              class="tip-bottom btn dropdown-toggle">{{$store.state.Utilisateurs.user.name}} <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li><a href="#">Profil</a></li>

                <li>
                    <router-link tag="a" :to="{ name: 'Logout' }">
                  <i class="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Déconnexion</router-link>                  
                </li>

              
               
              </ul>
            </div>
                <input type="text" style="background-color: black;" readonly />

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

created(){
 // console.log(JSON.stringify(this.$store.state.Utilisateurs.user))
//console.log(this)

},

  computed: {
    ...mapGetters('Utilisateurs', ['user'])
  }
}
</script>