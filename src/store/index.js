import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');
export default new Vuex.Store({
  state: {
    listPokes: []
  },
  mutations: {
    async getPokemons(state){
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
      state.listPokes = result.data.results;
    }
  },
  actions: {
  },
  modules: {
  }
})
