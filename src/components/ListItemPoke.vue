<template>
  <div>
    <div class="item" >
      <div class="name" @click="openModalPokes()">
        <p v-text="item.name"></p>
      </div>
      <div class="addFavorite" @click="toggleFavoritePoke">
        <div class="wrapperFavoriteStar">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :class="{'starFavorite': item.favorite,'starDefault': !item.favorite}" d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z" />
          </svg>
        </div>
      </div> 
    </div>
    <modal-detail-poke v-if="showModal" @close="closeModalPokes()">
    </modal-detail-poke>  
  </div>
</template>

<script>
import ModalDetailPoke from './ModalDetailPoke.vue'
const axios = require('axios');
export default {
  name: 'ListItemPoke',
  components: {
    ModalDetailPoke
  },
  props:{
    item: Object
  },
  data(){
    return {
      showModal: false,
      poke:{
        id: null,
        name: null,
        weight: null,
        height: null,
        types: null,
        img: null
      }
    }
  },
  methods:{
    async openModalPokes(){
      const resultPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.item.name}`);
      console.log(resultPoke)
      const resultImage = await axios.get(resultPoke.data.forms[0].url);
      const {id,name,weight,height,types} = resultPoke.data;
      const img = resultImage.data.sprites.front_default;
      this.poke.id = id;
      this.poke.name = name;
      this.poke.weight = weight;
      this.poke.height = height;
      this.poke.types = types.map((type)=>{
        let res = type.type.name
        return res
      }).join(', ');
      console.log(this.poke.types )
      this.poke.img = img;
      this.poke.favorite = this.item.favorite;
      this.$store.commit('setPokeSelected', this.poke);

      this.showModal=true
    },
    closeModalPokes(){
      this.showModal=false
    },
    toggleFavoritePoke(){
      this.item.favorite = this.item.favorite ? false : true;
      const results = this.$store.state.listPokes.filter( poke => poke.favorite )
      localStorage.setItem('listFavoritePokes',JSON.stringify([...results]));
      if(this.$store.state.view == 'favorite')this.$store.commit('updateListPokes', results)
    },
    
  },
}
</script>

<style scoped>
.starFavorite{
  fill: #ECA539
}
.starDefault{
  fill: #BFBFBF
}
.item{
  display: grid;
  grid-template-columns: 1fr 60px;
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
  text-transform: capitalize;
  cursor: pointer;
}
.item .addFavorite{
  display: grid;
  align-content: center;
  justify-content: center;
  cursor: pointer;
}
.item .addFavorite .wrapperFavoriteStar{
  background: #F5F5F5;  
  border-radius: 44px;
  height: 44px;
  width: 44px;
  display: grid;
  align-content: center;
  justify-content: center;
}
</style>