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
        async login() {
            try {
                const result = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                this.$toasted.global.success({
                    message: 'Successfully logged in'
                })
                this.$router.push('/')                
            } catch (err) {
                console.log(err.code, err.message)
                this.$toasted.global.error({
                    message: err.message
                })                
            }

        }
    }
}
</script>

<style>

</style>