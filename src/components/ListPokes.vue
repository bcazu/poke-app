<template>
  <div class="subContainerPokes">
    <div class="containerListPokes">
      <ListItemPke v-for="poke in listPokemons" :key="poke.name" :item="poke" />
    </div>
  </div>
</template>

<script>
import ListItemPke from '@/components/ListItemPoke.vue'
export default {
  name: 'ListPokes',
  components: {
    ListItemPke
  },
  computed:{
    listPokemons(){
      return this.$store.state.listPokes
    }
  }
}
</script>

<style>

.subContainerPokes .containerFooter{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>