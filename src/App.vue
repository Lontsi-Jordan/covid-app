<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>


<script>
import Nav from './components/Nav.vue'
export default {
  components:{
    Nav
  },
  created(){
    this.$store.dispatch('getData');
  }
}

</script>
<style>

</style>
