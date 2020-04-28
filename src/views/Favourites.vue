<template>
  <div>
    <Navbar/>
    <Header>
      <template v-slot:header>Favourites</template>
      <template v-slot:para>Your favourite streams, clips and games in one place</template>
    </Header>
    <div v-for="el in favourites" class="text-white">
      {{ el }}
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
    components: {
        Navbar,
        Header,
        Footer
    },
    computed: {
      ...mapGetters(["favourites"])
    }
}
</script>

<style>

</style>