<template>
  <div class="Error">
        <h1>Sorry no existe</h1>
        <span>Vuelve a intentarlo regresando al </span><button @click="goBackHome"> Home </button>
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