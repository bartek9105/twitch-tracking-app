import Vue from 'vue'
import VueRouter from 'vue-router'
import Protect from './protect'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Favourites from '@/views/Favourites'
import Profile from '@/views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    beforeEnter: Protect
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
    name: 'Favourites',
    beforeEnter: Protect
    
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile settings',
    beforeEnter: Protect
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
