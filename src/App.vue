<template>
  <div id="app" class="bg-dark vh-100">
    <router-view/>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import TopStreams from '@/components/TopStreams'
import Footer from '@/components/Footer'

export default {
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  mounted(){
  },
  components:{
    Navbar,
    Search,
    TopStreams,
    Footer
  }
}
</script>

<style lang="scss">

</style>
