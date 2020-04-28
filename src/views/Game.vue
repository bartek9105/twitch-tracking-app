<template>
  <div id="game-page-container">
    <Navbar />
    <Header>
      <template v-slot:header>Game overview</template>
      <template v-slot:para>All informations about the game</template>
    </Header>
    <GameInfo/>
    <GameStreams/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import GameInfo from "@/components/GameInfo";
import GameStreams from "@/components/GameStreams";
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
    GameInfo,
    GameStreams,
    Footer
  }
};
</script>
<style>
#game-page-container {
  position: relative;
  min-height: 100vh;
}
</style>