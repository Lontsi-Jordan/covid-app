<template>
  <div>
    <div class="container">
      <b-form-input placeholder="Search country" class="mt-2 mb-2" v-model="search"></b-form-input>
      <b-row>
        <b-col md="12">
          <b-card class="mb-2" v-for="(country) in countries" :key="country.id" :title="country['Country']" :sub-title="country['CountryCode']">
            <b-card-text>
              <b-row>
                <b-alert show variant="primary" class="col-md-3 col-sm-2 m-auto">
                    <h4 class="alert-heading">New Confirmed <b-icon icon="graph-up" scale="1"></h4>
                    <p class="font-weight-bolder text-black">{{ country["NewConfirmed"] }}</p>
                  </b-alert>
                  <b-alert show variant="danger" class="col-md-3 col-sm-2 m-auto">
                    <h4 class="alert-heading">New Deaths <b-icon icon="graph-up" scale="1"></b-icon></h4>
                    <p class="font-weight-bolder text-black">{{ country["NewDeaths"] }}</p>
                  </b-alert>
                  <b-alert show variant="warning" class="col-md-3 col-sm-2 m-auto">
                    <h4 class="alert-heading">New Recovered <b-icon icon="graph-up" scale="1"></b-icon></h4>
                    <p class="font-weight-bolder text-black">{{ country["NewRecovered"] }}</p>
                  </b-alert>
              </b-row>
            </b-card-text>
            <a href="#" class="card-link btn btn-primary text-white">see more</a>
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
      search:''
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
