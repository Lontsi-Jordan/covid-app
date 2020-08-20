<template>
  <div id="app">
    <Nav/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Footer from "@/components/Footer";

export default {
  components:{
    Nav,
    Header,
    Footer
  },
  created(){
    this.$store.dispatch('getData');
  }
}
</script>
<style>

</style>
