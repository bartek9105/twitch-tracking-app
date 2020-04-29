<template>
  <div class="favourites">
    <Navbar/>
    <Header>
      <template v-slot:header>Favourites</template>
      <template v-slot:para>Your favourite streams, clips and games in one place</template>
    </Header>
    <div class="container text-white">
      <div class="text-white" v-for="(el, index) in favourites">
        <h4>{{el.name}}</h4>
        <img :src="el.img">
        <button @click="removeFav(index)">Remove</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
    components: {
        Navbar,
        Header,
        Footer
    },
    computed: {
      ...mapGetters(["favourites"])
    },
    methods: {
      loadFavs () {
        firebase.database().ref('favourites/' + firebase.auth().currentUser.uid).once('value').then(data => {
          this.$store.dispatch('loadFavourites', data.val())
          }); 
      },
      removeFav (id) {
        this.$store.dispatch('removeFavourite', id)
      }
    },
    mounted () {
      this.loadFavs()   
    }
}
</script>

<style>
  .favourites{
    height: auto;
  }
</style>