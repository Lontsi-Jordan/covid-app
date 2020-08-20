<template>
  <div class="container mt-2">
    <b-row>
      <b-col md="12">
        <b-card class="mb-2" :title="country['Country']" :sub-title="country['CountryCode']">
          <b-card-text>
            <b-row class="mb-2">
              <b-alert show variant="primary" class="col-md-3 col-sm-3 m-md-auto">
                <h4 class="alert-heading">Total Confirmed <b-icon icon="graph-up" scale="1"></b-icon></h4>
                <strong>{{ country["TotalConfirmed"] }}</strong>
              </b-alert>
              <b-alert show variant="danger" class="col-md-3 col-sm-3 m-md-auto">
                <h4 class="alert-heading">Total Deaths <b-icon icon="graph-up" scale="1"></b-icon></h4>
                <strong>{{ country["TotalDeaths"] }}</strong>
              </b-alert>
              <b-alert show variant="warning" class="col-md-3 col-sm-3 m-md-auto">
                <h4 class="alert-heading">Total Recovered <b-icon icon="graph-up" scale="1"></b-icon></h4>
                <strong>{{ country["TotalRecovered"] }}</strong>
              </b-alert>
            </b-row>
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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Detail",
  computed:{
    country(){
      return this.$store.state.countries.find(country=> country['CountryCode'] === this.$route.params.code)
    }
  },

}
</script>

<style scoped>

</style>