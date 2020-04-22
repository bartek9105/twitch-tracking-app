<template>
  <div id="app" class="bg-dark vh-100">
    <router-view/>
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  data(){
    return {
      
    }
  },
  methods: {
    async getTopStreams(){
      try {
        const response = await axios.get('https://api.twitch.tv/helix/streams?first=20', {
          headers: {
            'Client-ID': process.env.VUE_APP_TWITCH_KEY
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    this.getTopStreams()
  },
  components:{
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">

</style>
