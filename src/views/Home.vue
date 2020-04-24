<template>
  <div class="overflow-hidden">
    <Navbar/>
    <Search/>
    <TopGames/>
    <TopStreams/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import TopGames from '@/components/TopGames'
import TopStreams from '@/components/TopStreams'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Search,
        TopGames,
        TopStreams,
        Footer
    }
}
</script>

<style>

</style>