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
      state.favourites = Object.values(state.favourites).filter(item => {
        return item.id != payload
      })
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
    async addToFavourites({ commit }, payload) {   
      const userId = firebase.auth().currentUser.uid
      let unique = true
      await firebase.database().ref(`favourites/${userId}`).once('value').then(data => {
        if(data.val()) {
          const snap = Object.values(data.val())
          snap.forEach(obj => {
            if(Object.values(obj).includes(payload.name)) {
              unique = false
              Vue.toasted.error("This item is already added to favourites", toastOptions)
            }
          })
        }
      })
      if (unique) {
        firebase.database().ref(`favourites/${userId}`).push({
          name: payload.name,
          id: parseInt(payload.id),
          img: payload.img,
          type: payload.type
        }).then(() => {
          Vue.toasted.success("Added to favourites", toastOptions)
          commit('addFavourite', payload)
        }).catch(err => console.log(err))
      }
    },
    loadFavourites({ commit }){
      firebase.database().ref('favourites/' + firebase.auth().currentUser.uid).once('value').then(data => {
        if(data.val()){
          commit('loadFavourite', data.val())
        }
      }); 

    },
    removeFavourite({ commit }, payload) {
      const userId = firebase.auth().currentUser.uid 
      firebase.database().ref('favourites/' + userId).orderByChild('id').equalTo(parseInt(payload)).once('value').then((snapshot) => {
        snapshot.forEach(child => {
          child.ref.remove()
        })
      }).then(() => {
        commit('remove', payload)
        Vue.toasted.success("Removed from favourites", toastOptions)
      }).catch(err => console.log(err))
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
})
