<template>
  <div id="app" class="bg-dark vh-100">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

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
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    this.getTopStreams()
  }
}
</script>

<style lang="scss">

</style>
