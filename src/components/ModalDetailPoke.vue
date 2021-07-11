<template>
<div>
    <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <div class="closeModal">
                  <img @click="close" src="../assets/closeModal.svg" alt="close modal">
                </div>
                <img class='imgPoke' :src="pokeSelected.img" alt="">
              </div>
              <div class="modal-body">
                <div class="descriptionPoke">
                  <p class="tag">Name: <span class="description" v-text="pokeSelected.name"></span></p>
                </div>
                <div class="descriptionPoke">
                  <p class="tag">Weight: <span class="description" v-text="pokeSelected.weight"></span></p>
                </div>
                <div class="descriptionPoke">
                  <p class="tag">Height: <span class="description" v-text="pokeSelected.height"></span></p>
                </div>
                <div class="descriptionPoke">
                  <p class="tag">Types: <span class="description" v-text="pokeSelected.types"></span></p>
                </div>
              </div>
              <div class="modal-footer">
                <div class="share">
                  <button 
                    class="buttonPokeRed shareToMyFriend" 
                    v-clipboard:copy="formatInfo()"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                  >Share to my friends</button>
                </div>
                <div class="favorite">
                  <div class="wrapperFavoriteStar">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path :class="{'starFavorite': pokeSelected.favorite,'starDefault': !pokeSelected.favorite}"  d="M9.81981 0.765294L7.13459 6.45365L1.12675 7.36877C0.0493653 7.53204 -0.38241 8.91975 0.398897 9.71458L4.74543 14.1398L3.7174 20.391C3.53235 21.5209 4.67141 22.3673 5.62543 21.8389L11 18.8873L16.3746 21.8389C17.3286 22.363 18.4677 21.5209 18.2826 20.391L17.2546 14.1398L21.6011 9.71458C22.3824 8.91975 21.9506 7.53204 20.8733 7.36877L14.8654 6.45365L12.1802 0.765294C11.6991 -0.248643 10.305 -0.261532 9.81981 0.765294Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
</div>
</template>

<script>
export default {
  methods:{
    close(){
      this.$emit('close');
    },
    formatInfo(){
      return `
              Name: ${this.pokeSelected.name},
              Weight: ${this.pokeSelected.weight},
              Height: ${this.pokeSelected.height},
              Types: ${this.pokeSelected.types},
              `
    },
    onCopy(e) {
        alert('Acabas de copiar el siguiente texto en el portapapeles: ' + e.text)
    },
    onError(e) {
        alert('No se pudo copiar el texto al portapapeles')
        console.log(e);
    }
  },
  computed:{
    pokeSelected(){
      return this.$store.state.pokeSelected;
    }
  }
}
</script>

<style scoped>
.starFavorite{
  fill: #ECA539
}
.starDefault{
  fill: #BFBFBF
}
.modal-mask {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: grid;
  grid-template-areas: ". cont ."
                       ". cont ."
                       ". cont .";
  grid-template-columns: minmax(30px, 1fr) minmax(300px, 570px)  minmax(30px, 1fr);
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 100%;
  grid-area: cont;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(200px,220px) 1fr 80px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  grid-gap: 0 / 0;
}
.closeModal{
  text-align: right;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.modal-header{
  background: url('../assets/layerPickture.svg') no-repeat transparent;
  background-size: cover;
  background-position: center;
}
.imgPoke{
  width: 190px;
}
.modal-body{
 padding: 0 1em;
}
.modal-body .descriptionPoke{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr ;
  align-items: center;
  justify-content: start;
  justify-items: start;
  height: 47px;
  border-bottom: #E8E8E8 solid 1px;
}
.modal-body .descriptionPoke .tag{
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #5E5E5E;
}
.modal-body .descriptionPoke .description{
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #5E5E5E;
  text-transform: capitalize;
}
.shareToMyFriend{
  padding: 11px 20px;
  width: 195px;
  height: 44px;
}
.wrapperFavoriteStar{
  background: #F5F5F5;  
  border-radius: 44px;
  height: 44px;
  width: 44px;
  display: grid;
  align-content: center;
  justify-content: center;
}
.modal-footer{
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
.modal-footer .share{
    display: grid;
    justify-items: start;
    align-items: center;

}
.modal-footer .favorite{
  display: grid;
  justify-items: end;
  align-items: center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>