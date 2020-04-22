<template>
  <div id="app" class="bg-dark">
    <router-view/>
    <Navbar/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'

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
            'Client-ID': '2c6c0j18xxty4mx9e43pn1p5s210u9'
          }
        })
        console.log(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    this.getTopStreams()
  },
  components:{
    Navbar
  }
}
</script>

<style lang="scss">

</style>
