<template>
  <div>
      <div class="container vh-100 d-flex justify-content-center align-items-center text-white">
              <div class="col-sm-12 col-md-6 text-center">
                  <i class="fab fa-twitch h1"></i>
                  <Logo/>
                  <h5 class="my-5">Login</h5>
                  <form @submit.prevent="login">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Enter email" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd" v-model="password">
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label ">
                        <input class="form-check-input" type="checkbox"> Remember me
                        </label>
                    </div>
                     <p>Don't have an account? 
                         <router-link to="/register">
                            <span class="text-info">Register</span>
                         </router-link>
                     </p>
                    <Button>Login</Button>
                   </form>
              </div>
      </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Logo from '@/components/Logo'

import firebase from 'firebase'

export default {
    components: {
        Button,
        Logo
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    console.log(`User with email ${data.user.email} logged in successfuly`)
                    this.$toasted.success('Successfully logged in', {
                        position: 'bottom-center',
                        duration: '3000',
                        icon: 'fa-check-circle'
                    })
                    this.$router.push('/')
                })
                .catch(err => {
                    var errorCode = err.code
                    var errorMessage = err.message
                    this.$toasted.error(errorMessage, {
                        position: 'bottom-center',
                        duration: '3000',
                        icon: 'fa-cexclamation-circle'
                    })
            });
        }
    }
}
</script>

<style>

</style>