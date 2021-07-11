import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('../views/VError404.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/VHome.vue')
  },
  {
    path: '/home',
    redirect: {name: 'home'},
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    component: () => import('../views/VPokes.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/ListPokes.vue'),
        name: 'listPokemons'
      }      
    ]
  },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
