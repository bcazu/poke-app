<template>
  <footer class="footerPokes">
      <div class="contBtnAll">
        <button @click="goToAll" >All</button>     
      </div>
      <div class="contBtnFavorites">
        <button @click="goToFavories" >Favorites</button>    
      </div>
  </footer>
</template>

<script>
export default {
  methods:{
    goToAll: function(){
      this.$router.push('pokemons');
    },
    goToFavories: function(){
      this.$router.push('/pokemons/favorites');
    },
  }
}
</script>

<style>
.footerPokes{
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
  height: 100%;
  gap: 20px;
}
.footerPokes .contBtnAll{
  background: chartreuse;
  display: grid;
  justify-content: end;
  align-content: center;
}
.footerPokes .contBtnFavorites{
  background: coral;
  display: grid;
  justify-content: start;
  align-content: center;
}

</style>