<template>
  <div class="overflow-hidden">
    <Navbar/>
    <Header>
      <template v-slot:header>Explore</template>
      <template v-slot:para>Explore top streams, games and clips</template>
    </Header>
    <Search/>
    <TopGames/>
    <TopStreams/>
    <TopClips/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Search from '@/components/Search'
import TopGames from '@/components/TopGames'
import TopStreams from '@/components/TopStreams'
import TopClips from '@/components/TopClips'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Header,
        Search,
        TopGames,
        TopStreams,
        TopClips,
        Footer
    }
}
</script>

<style>

</style>