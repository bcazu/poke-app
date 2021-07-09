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
      this.$router.push('favorites');
    },
  }
}
</script>

<style>
.footerPokes{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
  height: 100%;
  gap: 20px;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
.footerPokes .contBtnAll{
  display: grid;
  justify-content: end;
  align-content: center;
}
.footerPokes .contBtnFavorites{
  display: grid;
  justify-content: start;
  align-content: center;
}

</style>