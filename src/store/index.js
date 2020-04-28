import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    favourites: null
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
    loadFavourites (state, payload) {
      state.favourites = payload
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
      firebase.firestore().collection("favourites").add({
        name: payload
      })
      .then(function() {
          commit('addFavourite', payload)
          
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });    
    },
    loadFavourites({ commit }){
      firebase.firestore().collection("favourites").get().then((querySnapshot) => {
        const favourites = []
        querySnapshot.forEach((doc) => {
            favourites.push(doc.data().name.name)
        });
        commit('loadFavourites', favourites)
      });
    
    }
  },
  modules: {
  }
})
