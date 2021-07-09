<template>
   <div class="home">
      <div class="contImgWelcome">
         <img src="../assets/pikachuSvg.svg" alt="Image welcome">
      </div>
      <div class="welcomeDescription">
         <h1>Welcome to Pokédex</h1>
         <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      </div>
      <div class="getStarted">
         <button @click="getStarted">Get Started</button>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{

      }
   },
   methods:{
      getStarted: function(){
         this.$router.push('pokemons');
      }
   }
}
</script>

<style>

.home{
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 150px 50px;
   height: 100vh;
}
.home .welcomeDescription{
}
.home .getStarted{
}
</style>
