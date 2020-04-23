<template>
  <div>
    <Navbar/>
    <Search/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Search,
        Footer
    }
}
</script>

<style>

</style>