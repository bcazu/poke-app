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
         <button
            class="buttonPokeRed buttonGetStarded"
            @click="getStarted"
         >
            Get started
         </button>
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
         this.$store.commit('changeView','all');
      }
   }
}
</script>

<style>
.home{
   display: grid;
   gap: 10px;
   grid-template-areas: ". contImgWelcome ."
                        ". welcomeDescription ."
                        "getStarted getStarted getStarted";
   grid-template-columns:  minmax(30px, 1fr) minmax(315px, 570px)  minmax(30px, 1fr);
   grid-template-rows: auto 1fr 150px;
   height: 100vh;
}
.home .contImgWelcome{
   grid-area: contImgWelcome;
}
.home .contImgWelcome img{
   width: 325px;
   height: 288px;
}
.home .welcomeDescription{
   grid-area: welcomeDescription;
}
.home .welcomeDescription h1{
   font-size: 26px;
   margin-bottom: 30px;
}
.home .welcomeDescription p{
   font-size: 18px;
}
.home .getStarted{
   grid-area: getStarted;
}
.home .getStarted .buttonGetStarded{
   height: 44px;
   width: 132px;
   left: -706px;
   top: 12434px;
   padding: 11px 20px 11px 20px;
   
}

</style>
