<template>
  <div>
     <Sidebar></Sidebar>
    <div>
    <Navbar></Navbar>
  <Milieu></Milieu>
    <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Milieu from "./Milieu";
import Footer from "./Footer";
import Sidebar from './Sidebar'

export default {
  components: {
    Navbar,
    Milieu,
    Footer,
    Sidebar
  },

};
</script>
