<template>
  <div>
    <div class="subContainerPokes" v-if="listPokemons.length > 0">
      <list-item-poke  v-for="poke in listPokemons" :key="poke.name" :item="poke"  />
    </div>
    <div v-else>
        <not-found />
    </div>
  </div>
  
</template>

<script>
import ListItemPoke from './ListItemPoke.vue'
import NotFound from './NotFound.vue'
export default {
  name: 'ListPokes',
  components: {
    ListItemPoke,
    NotFound
  },
  data(){
    return{
        
    }
  },
  
  computed:{
    listPokemons(){
      if(!localStorage.getItem('listFavoritePokes')){
        localStorage.setItem('listFavoritePokes', "[]");
      }
      const listForitePokes = JSON.parse(localStorage.getItem('listFavoritePokes'));
      if(listForitePokes.length > 0 ){
        for(let poke of this.$store.state.listPokes){
            let result = listForitePokes.find( pokeFavorite => pokeFavorite.name == poke.name)
            if(result) poke.favorite = true;
            else poke.favorite = false;
        }
      }
      if(!this.$store.state.searchNamePoke)return this.$store.state.listPokes
      const results = this.$store.state.listPokes.filter(poke => {
        return [
          poke.name
        ].find(field => {
          return field.toLowerCase().includes(this.$store.state.searchNamePoke.toLowerCase().trim())
        })
      })
      if(results == 0 )this.$store.commit('updateBeResults',false)
      else this.$store.commit('updateBeResults',true)
      return results;
    }
  }
}
</script>

<style>


</style>