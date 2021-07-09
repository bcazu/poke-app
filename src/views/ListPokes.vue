<template>
  <div class="contList">
      <Preload :visible="preloadVisible" />
      <div class="contSearch">
        <search-bar />
      </div>
        <div class="contListPokes">
          <poke-list v-if="listPokes.length > 0" />
          <not-found v-else/>
        </div>
        <div class="contFooter" v-if="listPokes.length > 0">
          <Footer/>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Preload from '@/components/Preload.vue'
import SearchBar from '@/components/SearchBar.vue'
import PokeList from '@/components/PokeList.vue'
import NotFound from '@/components/NotFound.vue'
import Footer from '@/components/Footer.vue'

const axios = require('axios');
export default {
  name: 'Pokemons',
  components: {
    Preload,
    SearchBar,
    PokeList,
    NotFound,
    Footer
  },
  mounted(){
    setTimeout(()=>{
      this.getPokes();
    },1000)
  },
  data(){
    return {
      preloadVisible: true,
      listPokes: []
    }
  },
  methods:{
    getPokes: async function(){
        try{
          const result = await axios.get('https://pokeapi.co/api/v2/pokemon');
          this.listPokes = result.data.results;
          this.preloadVisible = false;
        }catch(err){
          console.log("Error: ", err);
          this.preloadVisible = false;
        }
    }
  }
}
</script>
<style>
.contList{
  display: grid;
  height: 100vh;
  grid-template-areas: ". contSearch ."
                       ". contListPokes ."
                       "contFooter contFooter contFooter";
  grid-template-columns: minmax(30px, 291px) 1fr minmax(30px, 291px);
  grid-template-rows: 125px 1fr 80px;
}
.contList .contSearch{
  grid-area: contSearch;
  display: grid;
  align-content: center;
}
.contList .contListPokes{
  grid-area: contListPokes;
background: blue;
}
.contList .contFooter{
  grid-area: contFooter;
  background: blueviolet;
}
</style>