<template>
  <div>
    <div v-for="element in stream">
      {{ element.title }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Stream',
    data() {
        return {
            stream: []
        }
    },
    methods: {
      async getStream() {
        try {
          const response = await axios.get(
            `https://api.twitch.tv/kraken/streams/${this.$route.params.id}`,
            {
              headers: {
                "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
                Accept: "application/vnd.twitchtv.v5+json"
              }
            }
          );
          this.stream = response.data.streams
        } catch (error) {
              console.log(error);
        }
      }
    },
    mounted() {
      this.getStream()
    }
}
</script>

<style>

</style>