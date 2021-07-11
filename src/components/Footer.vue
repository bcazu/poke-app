<template>
  <footer class="footerPokes">
      <div class="contBtnAll">
        <button class="buttonPokeRed buttonAll" :class="{'buttonSelectViewOff': $store.state.view != 'all'}" @click="goToAll" >All</button>     
      </div>
      <div class="contBtnFavorites">
        <button class="buttonPokeRed buttonFavorite" :class="{'buttonSelectViewOff': $store.state.view != 'favorite'}" @click="goToFavories" >Favorites</button>    
      </div>
  </footer>
</template>

<script>
const axios = require('axios');

export default {
  methods:{
    goToAll: async function(){
      this.$store.commit('changeView','all');
      try{
          let result = await axios.get('https://pokeapi.co/api/v2/pokemon');
          result = result.data.results.map((item)=>{
              item.favorite = false;
              return item;
          })
          this.$store.commit('getPokemons',result);
          this.preloadVisible = false;
      }catch(err){
        console.log("Error: ", err);
        this.preloadVisible = false;
      }
    },
    goToFavories: function(){
      this.$store.commit('changeView','favorite');
      const results = JSON.parse(localStorage.getItem('listFavoritePokes'));
      this.$store.commit('updateListPokes', results)
    },
  }
}
</script>

<style>
.buttonSelectViewOff{
  background-color: #BFBFBF !important;
}
.footerPokes{
  display: grid;
  grid-template-columns:minmax(100px,275px) minmax(100px,275px);;
  grid-auto-rows: 1fr;
  justify-content: center;  
  align-items: center;
  height: 100%;
  margin: 0 1em;
  gap: 20px;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
.footerPokes .contBtnAll{
  display: grid;
  justify-items: end;
}
.footerPokes .contBtnFavorites{
  display: grid;
  justify-items: start;
}
.footerPokes .contBtnAll .buttonAll{
  height: 44px;
  width: 100%;
  background: url('../assets/all.svg')  no-repeat scroll #F22539;
  background-size: 18px;
  background-position: 37% center;
  padding-left: 25px;
}
.footerPokes .contBtnFavorites .buttonFavorite{
  height: 44px;
  width: 100%;
  background: url('../assets/star.svg')  no-repeat scroll #F22539;
  background-size: 18px;
  background-position: 25% center;
  padding-left: 25px;
}

</style>