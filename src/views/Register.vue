<template>
  <div>
      <div class="container vh-100 d-flex justify-content-center align-items-center text-white">
              <div class="col-sm-12 col-md-6 text-center">
                  <i class="fab fa-twitch h1"></i>
                  <Logo/>
                  <h5 class="my-5">Signup</h5>
                  <form @submit.prevent="signUp">
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
                     <p>Already have an account? 
                         <router-link to="/login">
                            <span class="text-info">Login</span>
                         </router-link>
                     </p>
                    <Button>Signup</Button>
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
        signUp() {
            this.$store.dispatch('signUserUp', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>