import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async signUserUp({ commit }, payload) {
      try {
        const result = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        const newUser = {
          id: result.user.uid
        }
        commit('setUser', newUser)
        router.push('/login')         
      } catch (error) {
        console.log(error)
      }
    }, 
    async signUserIn({ commit }, payload) {
      try {
        const result = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)   
        const newUser = {
          id: result.user.uid
        }     
        commit('setUser', newUser)
        router.push('/') 
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
