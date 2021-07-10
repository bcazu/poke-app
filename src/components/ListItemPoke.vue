<template>
  <div class="item">
    <div class="name">
      <p v-text="item.name"></p>
    </div>
    <div class="addFavorite">
      <img src="../assets/star.svg" alt="AddFavorite">
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ListItemPoke',
  props:{
    item: Object
  }
}
</script>

<style scoped>
.item{
  display: grid;
  grid-template-columns: 1fr 44px;
  grid-template-rows: 60px ;
  margin-bottom: 10px;
  background: #FFFFFF;
  border-radius: 5px;
  align-items: center;
}
.item .name{
  justify-self: start;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #353535;
  margin-left: 20px;
}
.item .addFavorite{
  background: #F5F5F5;
  align-content: center;
  justify-content: center;
  /* padding: 9px; */
  border-radius: 29px;
  height: 44px;
  display: grid;
}
.item .addFavorite img{
  color: #BFBFBF;
}
</style>