import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import('../views/ListPokes.vue')
  },
  {
    path: '/pokemons/favorites',
    name: 'Favorites',
    component: () => import('../views/ListFavoritesPokes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
