<template>
  <div>
    <div class="item" >
      <div class="name" @click="openModalPokes()">
        <p v-text="item.name"></p>
      </div>
      <div class="addFavorite">
        <div class="wrapperFavoriteStar">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  :fill="fill"  d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z" />
          </svg>
        </div>
      </div> 
    </div>
    <modal-detail-poke v-if="showModal" @close="CloseModalPokes()">
    </modal-detail-poke>  
  </div>
</template>

<script>
import ModalDetailPoke from './ModalDetailPoke.vue'

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
      fill: '#BFBFBF',
      showModal: false
    }
  },
  methods:{
    openModalPokes(){
      this.showModal=true
    },
    CloseModalPokes(){
      this.showModal=false
    }
  },
}
</script>

<style scoped>
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