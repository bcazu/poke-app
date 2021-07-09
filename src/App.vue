<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>


<script>
export default {
 
}
</script>

<style>
*{
    margin:0;
    padding:0;
  }
body{
  background: #F9F9F9;
  font-family: 'Lato';
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
;
}
</style>
