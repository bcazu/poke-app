<template>
  <div class="contNotFound">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>
    <button @click="goBackHome">Go back home</button>
  </div>
</template>

<script>
export default {
  methods:{
    goBackHome: function(){
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>