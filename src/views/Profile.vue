<template>
  <div id="profile-page-container">
    <Navbar/>
    <Header>
      <template v-slot:header>Profile settings</template>
      <template v-slot:para>Configure your profile by setting avatar</template>
    </Header>
    <ProfileSettings/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import ProfileSettings from '@/components/ProfileSettings'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Header,
        ProfileSettings,
        Footer
    }
}
</script>

<style>
#profile-page-container {
  position: relative;
  min-height: 100vh;
  margin: 0;
  padding-bottom: 6rem;
  background-color: #2d3748;
}
</style>