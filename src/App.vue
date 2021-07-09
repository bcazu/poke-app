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
    border: none;
  }
body{
  background: #F9F9F9;
  font-family: 'Lato' !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.buttonPokeRed{
   color: #FFFF;
   background: #F22539;
   border-radius: 60px;
   font-weight: 700;
   font-family: Lato;
   font-style: normal;
   font-size: 18px;
   line-height: 22px;
   cursor: pointer;
}
.buttonPokeRed:active {
   background: #C00E20;  
}
</style>
