<template>
  <div>
    <div class="container">
      <b-form-input placeholder="Search country" class="mt-2 mb-2" v-model="search"></b-form-input>
      <b-row>
        <b-col md="12">
          <div class="text-center justify-content-center" v-if="countries.length<=0">
            <b-spinner
              :variant="variants[Math.floor(Math.random() * Math.floor(7))]">
            </b-spinner>
            <p class="text-center">Loading Data...</p>
          </div>
          <b-card class="mb-2" v-for="(country) in countries" :key="country.id" :title="country['Country']" :sub-title="country['CountryCode']">
            <b-card-text>
              <b-row>
                <b-alert show variant="primary" class="col-md-3 col-sm-3 m-md-auto">
                  <h4 class="alert-heading">New Confirmed <b-icon icon="graph-up" scale="1"></b-icon></h4>
                  <strong>{{ country["NewConfirmed"] }}</strong>
                </b-alert>
                <b-alert show variant="danger" class="col-md-3 col-sm-3 m-md-auto">
                  <h4 class="alert-heading">New Deaths <b-icon icon="graph-up" scale="1"></b-icon></h4>
                  <strong>{{ country["NewDeaths"] }}</strong>
                </b-alert>
                <b-alert show variant="warning" class="col-md-3 col-sm-3 m-md-auto">
                  <h4 class="alert-heading">New Recovered <b-icon icon="graph-up" scale="1"></b-icon></h4>
                  <strong>{{ country["NewRecovered"] }}</strong>
                </b-alert>
              </b-row>
            </b-card-text>
            <router-link v-bind:to="'country/detail/'+country['CountryCode']">View more</router-link>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country',
  data(){
    return {
      search:'',
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
    }
  },
  computed:{
    date(){
      return this.$store.state.date;
    },
    countries(){
      if(this.search === ''){
        return this.$store.state.countries;
      }
      let self = this;
      return this.$store.state.countries.filter(
        (country) => {
        return country["Country"].toLowerCase().includes(self.search.toLowerCase());
      });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
