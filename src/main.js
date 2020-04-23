import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import config from '@/firebaseConfig.js'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Toasted from 'vue-toasted';

firebase.initializeApp(config)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Toasted, {
  iconPack: 'fontawesome'
})

Vue.toasted.register('success',
    (payload) => {
    	return payload.message
    },
    {
      type: 'success',
      position: 'bottom-center',
      duration: '3000',
      icon: 'fa-check-circle'
    }
)

Vue.toasted.register('error',
    (payload) => {
    	return payload.message
    },
    {
      type: 'error',
      position: 'bottom-center',
      duration: '3000',
      icon: 'fa-exclamation-circle'
    }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
