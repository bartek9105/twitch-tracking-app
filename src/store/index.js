import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from 'firebase'

Vue.use(Vuex)

let toastOptions = {
  position: 'bottom-center',
  duration: 3000
}

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
        Vue.toasted.success("Successfully signed up", toastOptions)
        router.push('/login')         
      } catch (error) {
          Vue.toasted.error(error, toastOptions)
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
        Vue.toasted.success("Successfully signed in", toastOptions)
        router.push('/') 
      } catch (error) {
          Vue.toasted.error(error, toastOptions)
          console.log(error)
      }
    }
  },
  modules: {
  }
})
