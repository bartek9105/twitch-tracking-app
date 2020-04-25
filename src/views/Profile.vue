<template>
  <div>
    <Navbar/>
    <Header>
      <template v-slot:header>Profile settings</template>
      <template v-slot:para>Configure your profile by setting avatar</template>
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