<template>
  <transition name='fadeProload'>
    <div class="preload" v-if="visible">
          <img class='imgPreload' src="../assets/pokebola.svg" alt="Preload">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Preload',
  props:{
    visible: Boolean
  }
}
</script>

<style>
.preload{
  background: #F9F9F9;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-content: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
}
.imgPreload{
  animation-name: rotation;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

@keyframes rotation {
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
}
.fadeProload-enter-active, .fadeProload-leave-active {
  transition: opacity .5s;
}
.fadeProload-enter, .fadeProload-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>