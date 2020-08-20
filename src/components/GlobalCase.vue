<template>
  <div>
    <div class="container">
      <b-row class="justify-content-center p-2">
        <div
          class="col-xl-5 m-1 col-sm-6 col-12"
          v-for="(item, index) in global"
          :key="item.id"
          :sub-title="index | formatLabel"
        >
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center">
                    <img :src="getIcon(index)" />
                  </div>
                  <div class="media-body text-right">
                    <h6 class="card-subtitle mb-2 text-muted">{{ index | formatLabel }}</h6>
                    <strong>{{ item }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalCase",
  filters: {
    formatLabel: function(label) {
      label = label.toString();
      return label.split(/(?=[A-Z])/).join(" ");
    }
  },
  methods: {
    getIcon(index) {
      if(index.includes("Confirmed"))
        return 'https://img.icons8.com/nolan/64/coronavirus.png';
      if(index.includes("Deaths"))
        return 'https://img.icons8.com/nolan/64/headstone.png';
      if(index.includes("Recovered"))
        return 'https://img.icons8.com/color/48/000000/recovery.png';
    }
  },
  computed: {
    date() {
      return this.$store.state.date;
    },
    global() {
      return this.$store.state.globalCases;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
