<template>
    <div>
        <div class="container d-flex vh-100 text-white justify-content-center align-items-center">
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
                <div class="d-flex flex-column align-items-center social-buttons mt-5">
                    <button class="btn btn-facebook w-50 text-white mb-3" @click="fbLogin">
                        <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                    </button>       
                    <button class="btn btn-google w-50 text-white" @click="googleLogin">
                    <i class="fab fa-google mr-2"></i> Sign in with Google
                    </button>
                </div>
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
            this.$store.dispatch('signUserIn', {
                email: this.email,
                password: this.password
            })
        },
        async fbLogin() {
            try {
                const provider = new firebase.auth.FacebookAuthProvider()
                const result = await firebase.auth().signInWithPopup(provider)
                this.$router.push('/')
                console.log(result.user)                
            } catch (error) {
                console.log(error.message)
            }
        },
        async googleLogin() {
            try {
                const provider = new firebase.auth.GoogleAuthProvider()
                const result = await firebase.auth().signInWithPopup(provider)
                this.$router.push('/')
                console.log(result.user)                
            } catch (error) {
                console.log(error.message)
            }
        }
    }
}
</script>

<style lang="scss">
    .social-buttons {
        .btn-facebook {
            background-color: #29487d;
        }
        .btn-google {
            background-color: #dd4b39;
        }
    }
</style>