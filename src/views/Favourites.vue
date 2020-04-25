<template>
  <div>
    <Navbar/>
    <Header>
      <template v-slot:header>Favourites</template>
      <template v-slot:para>Your favourite streams, clips and games in one place</template>
    </Header>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Header,
        Footer
    }
}
</script>

<style>

</style>