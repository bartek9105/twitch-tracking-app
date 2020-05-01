import Vue from 'vue'
import Vuex from 'vuex'
import userAuth from './userAuth'
import favourites from './favourites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userAuth: userAuth,
    favourites: favourites
  }
})
