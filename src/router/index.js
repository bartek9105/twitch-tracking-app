import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Home from '@/views/Home'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
