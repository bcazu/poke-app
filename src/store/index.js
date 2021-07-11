import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listPokes: [],
    searchNamePoke: "",
    pokeSelected: {},
    view: "all",
    beResults: true
  },
  mutations: {
     getPokemons(state, list){
      state.listPokes = list;
    },
    updateSearchNamePoke(state, newName){
      state.searchNamePoke = newName;
    },
    resetSearchName(state){
      state.searchNamePoke = "";
    },
    changeView(state,view){
      state.view = view;
    },
    updateBeResults(state,value){
      state.beResults = value;
    },
    updateListPokes(state, newList){
      state.listPokes = newList;
    }
  },
  actions: {
  },
  modules: {
  }
})
