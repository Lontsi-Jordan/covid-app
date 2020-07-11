<template>
  <div>
    <div class="container m-2">
      <b-row class="col-sm col-md justify-content-center">
        <b-card class="col-md-3 col-sm-3 col-12 mb-2" v-for="(item,index) in global" :key="item.id" :sub-title="index">
          <b-card-text>
            <b-badge pill variant="primary">{{ item }}</b-badge>
          </b-card-text>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed:{
    date(){
      return this.$store.state.date;
    },
    global(){
      return this.$store.state.globalCases;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
