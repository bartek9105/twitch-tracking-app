<template>
  <div>
    <Navbar/>
    <Header>
      <template v-slot:header>Explore</template>
      <template v-slot:para>Explore top streams, games and clips</template>
    </Header>
    <Search/>
    <TopStreams/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Search from '@/components/Search'
import TopStreams from '@/components/TopStreams'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Header,
        Search,
        TopStreams,
        Footer
    }
}
</script>

<style>

</style>