<template>
  <div>
    <div class="container">
      <b-form-input placeholder="Search country" class="mt-2 mb-2"></b-form-input>
      <b-row>
        <b-col md="12">
          <b-card class="mb-2" v-for="(country) in countries" :key="country.id" :title="country['Country']" :sub-title="country['CountryCode']">
            <b-card-text>
              <b-row>
                <b-alert show variant="primary" class="col-md-3 col-sm-2 m-auto">
                    <h4 class="alert-heading">New Confirmed</h4>
                    <p class="text-white text-bold">{{ country["NewConfirmed"] }}</p>
                  </b-alert>
                  <b-alert show variant="danger" class="col-md-3 col-sm-2 m-auto">
                    <h4 class="alert-heading">New Deaths</h4>
                    <p class="text-white text-bold">{{ country["NewDeaths"] }}</p>
                  </b-alert>
                  <b-alert show variant="warning" class="col-md-3 col-sm-2 m-auto">
                    <h4 class="alert-heading">New Recovered</h4>
                    <p class="text-white">{{ country["NewRecovered"] }}</p>
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
  computed:{
    date(){
      return this.$store.state.date;
    },
    countries(){
      return this.$store.state.countries;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
