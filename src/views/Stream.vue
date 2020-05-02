<template>
  <div id="stream-container">
    <Navbar />
    <Header>
      <template v-slot:header>Stream overview</template>
      <template v-slot:para>All informations about the stream</template>
    </Header>
    <StreamInfo/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import StreamInfo from "@/components/StreamInfo";
import Footer from "@/components/Footer";

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
    Navbar,
    Header,
    StreamInfo,
    Footer
  }
};
</script>
<style>
#stream-container {
  min-height: 100vh;
  position: relative;
}
</style>