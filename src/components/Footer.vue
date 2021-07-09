<template>
  <footer class="footerPokes">
      <div class="contBtnAll">
        <button class="buttonPokeRed buttonAll" @click="goToAll" >All</button>     
      </div>
      <div class="contBtnFavorites">
        <button class="buttonPokeRed buttonFavorite" @click="goToFavories" >Favorites</button>    
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
.footerPokes .contBtnAll .buttonAll{
  height: 44px;
  width: 275px;
  background: url('../assets/all.svg')  no-repeat scroll #F22539;
  background-size: 18px;
  background-position: 111px center;
  padding-left: 25px;
}
.footerPokes .contBtnFavorites .buttonFavorite{
  height: 44px;
  width: 275px;
  background: url('../assets/star.svg')  no-repeat scroll #F22539;
  background-size: 18px;
  background-position: 85px center;
  padding-left: 25px;
}

</style>