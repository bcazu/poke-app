<template>
  <div class="contList">
      <Preload :visible="preloadVisible" />
      <div class="search">

      </div>
      <div class="listPokes">

      </div>
      <div class="footer">

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Preload from '@/components/Preload.vue'
const axios = require('axios');
export default {
  name: 'Pokemons',
  components: {
    Preload
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
          this.listPokes = result.data;
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
  grid-template-columns: 1fr;
  grid-template-rows: 104px 1fr 80px;
}
.contList .search{

}
.contList .listPokes{

}
.contList .footer{

}
</style>