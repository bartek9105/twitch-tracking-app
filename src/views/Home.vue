<template>
  <div>
    <Navbar/>
    <Search/>
    <TopStreams/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import TopStreams from '@/components/TopStreams'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Search,
        TopStreams,
        Footer
    }
}
</script>

<style>

</style>