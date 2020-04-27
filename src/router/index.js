import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Favourites from '@/views/Favourites'
import Profile from '@/views/Profile'
import Stream from '@/views/Stream'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/register',
    component: Register,
    name: 'Register'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/favs',
    component: Favourites,   
    name: 'Favourites'
  },
  {
    path: '/profile/:id',
    component: Profile,
    name: 'Profile settings'
  },
  {
    path: '/stream/:id',
    component: Stream,
    name: 'Stream',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
