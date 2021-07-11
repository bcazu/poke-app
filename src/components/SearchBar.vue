<template>
  <div>
      <input class="pokeInputSearch" v-model="$store.state.searchNamePoke"   type="text" placeholder="Search">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.pokeInputSearch{
  font-family: Montserrat;
  background: url('../assets/search.svg')  no-repeat scroll  #FFFF;
  background-size: 18px;
  background-position: 15px center;
  width: 93%;
  height: 50px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding-left: 43px;
  font-size: 16px;
  font-weight: 500;
  outline: none;
}
.pokeInputSearch::placeholder {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #BFBFBF;
}
</style>