<template>
  <div class="contNotFound">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>
    <button class="buttonPokeRed buttonGoBack" @click="goBackHome">Go back home</button>
  </div>
</template>

<script>
export default {
  methods:{
    goBackHome: function(){
      this.$router.push('/pokemons');
    }
  }
}
</script>

<style>
.contNotFound h1{
  font-size: 36px;
  font-weight: 700;
  color: #353535;
}
.contNotFound p{
  color: #5E5E5E;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin-top: 10px;
  margin-bottom: 25px;
  font-family: Lato;
  font-style: normal;
}
.contNotFound .buttonGoBack{
  padding: 11px 20px;
  width: 155px;
  height: 44px;
  line-height: 21.6px;
}
</style>