import firebase from 'firebase'

export default (to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next('/login')
      }
  })
}