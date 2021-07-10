<template>
  <div class="subContainerPokes">
      <list-item-poke  v-for="poke in listPokemons" :key="poke.name" :item="poke"  />
      
  </div>
</template>

<script>
import ListItemPoke from './ListItemPoke.vue'
export default {
  name: 'ListPokes',
  components: {
    ListItemPoke
  },
  data(){
    return{
        
    }
  },
  
  computed:{
    listPokemons(){
      return this.$store.state.listPokes
    }
  }
}
</script>

<style>


</style>