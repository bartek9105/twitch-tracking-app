import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    favourites: []
  },
  getters: {
    user (state) {
      return state.user
    },
    favourites (state) {
      return state.favourites
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    addFavourite (state, payload) {
      state.favourites.push(payload)
    },
    loadFavourite (state, payload) {
      state.favourites = payload
    },
    remove (state, payload) {
      Vue.delete(state.favourites, payload)
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
    },
    addToFavourites({ commit }, payload) {   
      const userId = firebase.auth().currentUser.uid 
      firebase.database().ref('favourites/' + userId).push({
        name: payload.name,
        id: payload.id,
        img: payload.img
      }).then(() => {
        commit('addFavourite', payload)
      }).catch(err => console.log(err))
    },
    loadFavourites({ commit }, payload){
      commit('loadFavourite', payload)
    },
    removeFavourite({ commit }, payload) {
      const userId = firebase.auth().currentUser.uid 
      firebase.database().ref('favourites/' + userId).child(payload).remove().then(() => {
        commit('remove', payload)
      }).catch(err => console.log(err))
      commit('remove', payload)
    }
  },
  modules: {
  }
})
