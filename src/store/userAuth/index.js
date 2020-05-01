import Vue from 'vue'
import router from '../../router'
import firebase from 'firebase'

let toastOptions = {
  position: 'bottom-center',
  duration: 3000
}

export default {
  state: {
    user: null,
    favourites: []
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    userLogout(state) {
      state.user = null
      state.favourites = []
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
        Vue.toasted.success("Successfully registered", toastOptions)
        router.push('/login')         
      } catch (error) {
        Vue.toasted.error(`${error}`, toastOptions)
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
        Vue.toasted.success("Successfully registered", toastOptions)
        router.push('/') 
      } catch (error) {
        Vue.toasted.error(`${error}`, toastOptions)
        console.log(error)
      }
    },
    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
        Vue.toasted.success("Successfully logged out", toastOptions)
        commit('userLogout')
      } catch (error) {
        console.log(error);
      }
    } 
  },
  modules: {
  }
}
