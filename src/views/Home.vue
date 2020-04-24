<template>
  <div>
    <Navbar/>
    <Header header_name="Explore" paragraph="Explore top streams, games and clips"></Header>
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