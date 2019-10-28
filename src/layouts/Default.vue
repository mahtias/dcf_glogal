<template>
  <div>
     <Sidebar></Sidebar>
    <div>
    <Navbar></Navbar>
        <div id="content">
        <!--breadcrumbs-->
        <div id="content-header">
            <br>
        
        </div>
                <slot />

        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from './Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  },

 beforeCreate () {
     if (!this.$store.state.Utilisateurs.isLoggedIn) {
        this.$router.push({ name: 'Login' })
     }
  },

};
</script>
