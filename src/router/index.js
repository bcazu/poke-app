import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home',
    redirect: {name: 'home'},
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    component: () => import('../views/ListPokes.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/ListFavoritePokes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
