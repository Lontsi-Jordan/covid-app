import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalCases:[],
    countries:[],
    date:''
  },
  mutations: {
    setData(state,data){
      state.globalCases = data['Global'];
      state.countries = data['Countries'];
      state.date = data['Date'];
    }
  },
  actions: {
    async getData(context){
      let data = (await Axios.get("https://api.covid19api.com/summary")).data;
      context.commit('setData',data);
    }
  },
  modules: {
  }
})
