<template>
  <div class="contList">
      <Preload :visible="preloadVisible" />
      <div class="contSearch">
        <search-bar />
      </div>
        <div class="contListPokes">
          <poke-list v-if="listFavoritePokes.length > 0" />
          <not-found v-else/>
        </div>
        <div class="contFooter" v-if="listFavoritePokes.length > 0">
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

export default {
  name: 'Favorites',
  components: {
    Preload,
    SearchBar,
    PokeList,
    NotFound,
    Footer
  },
  mounted(){
    setTimeout(()=>{
      this.getFavoritePokes();
    },1000)
  },
  data(){
    return {
      preloadVisible: true,
      listFavoritePokes: []
    }
  },
  methods:{
    getFavoritePokes: async function(){
        try{
          this.listFavoritePokes = [];
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
  grid-template-rows: auto 1fr 80px;
}
.contList .contSearch{
  grid-area: contSearch;
  background: red;
  padding: 1em;
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