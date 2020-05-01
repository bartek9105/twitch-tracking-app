import Vue from 'vue'
import firebase from 'firebase'

let toastOptions = {
  position: 'bottom-center',
  duration: 3000
}

export default {
  state: {
    favourites: []
  },
  getters: {
    favourites (state) {
      return state.favourites
    }
  },
  mutations: {
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
    }
  },
  actions: {
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
          id: payload.id,
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
      firebase.database().ref('favourites/' + userId).orderByChild('id').equalTo(payload).once('value').then((snapshot) => {
        snapshot.forEach(child => {
          child.ref.remove()
        })
      }).then(() => {
        commit('remove', payload)
        Vue.toasted.success("Removed from favourites", toastOptions)
      }).catch(err => console.log(err))
    }
  },
  modules: {
  }
}
