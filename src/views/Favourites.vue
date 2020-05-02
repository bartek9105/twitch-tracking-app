<template>
  <div class="favourites">
    <Navbar/>
    <Header>
      <template v-slot:header>Favourites</template>
      <template v-slot:para>Your favourite streams, clips and games in one place</template>
    </Header>
    <FavGames/>
    <FavStreams/>
    <FavClips/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import FavGames from '@/components/FavGames'
import FavStreams from '@/components/FavStreams'
import FavClips from '@/components/FavClips'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Header,
        FavGames,
        FavStreams,
        FavClips,
        Footer
    },
    methods: {
      loadFavs(){
        this.$store.dispatch('loadFavourites')
      }
    }, 
    created() {
      this.loadFavs()
    }

}
</script>

<style>
  .favourites{
    height: 100vh;
    position: relative;
  }
</style>