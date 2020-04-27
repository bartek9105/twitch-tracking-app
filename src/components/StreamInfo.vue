<template>
  <div id="single-stream-content" class="container-fluid">
    <h2
      id="stream-title"
      class="text-white justify-content-center m-auto pl-5 row"
    >{{this.stream.channel.status}}</h2>
    <div class="row">
      <div id="stream-info" class="pl-5 pt-5 col-xl-3 col-lg-3 pt-md-5 align-self-center">
        <h4 id="about-stream" class="text-white mb-4 pl-3">
          <span id="green-line" class="pr-2">|</span>About Stream
        </h4>
        <div class="d-flex pl-3 mb-3">
          <span id="game-title" class="text-muted">
            <i class="fas fa-play-circle text-muted pr-1"></i>
            Game: {{this.stream.game}}
          </span>
        </div>
        <div class="d-flex pl-3 mb-3">
          <span id="viewers" class="text-muted">
            <i class="fas fa-chart-line text-muted pr-1"></i>
            Viewers: {{this.stream.viewers}}
          </span>
        </div>
        <div class="d-flex pl-3 mb-3">
          <span id="stream-date" class="text-muted">
            <i class="far fa-calendar pr-2"></i>
            Stream started at:
            {{editedStreams.stream_created_at}}
          </span>
        </div>
        <div class="d-flex pl-3 mb-5">
          <span id="add-to-fav" class="text-muted">
            <i class="far fa-star text-white pr-1"></i>
            Add to favourite
          </span>
        </div>
      </div>
      <div id="stream-thumbnail" class="d-none d-lg-block pt-5 pl-5">
        <img :src="this.stream.preview.large" alt="stream_thumbnail" />
      </div>

      <!-- <div class="row"> -->
      <div id="streamer-info" class="pl-5 pt-5 col-lg-3 pb-5 pt-md-0 align-self-center">
        <h4 id="about" class="text-white mb-4 pl-3">
          <span id="green-line" class="pr-2">|</span>About Streamer
        </h4>
        <div class="d-flex pl-3 mb-3">
          <span id="streamer-name" class="text-muted">
            <i class="fas fa-user text-muted pr-1"></i>
            Name: {{this.stream.channel.display_name}}
          </span>
        </div>
        <div class="d-flex pl-3 mb-3">
          <span id="followers" class="text-muted">
            <i class="fas fa-chart-area pr-1"></i>
            Followers: {{this.stream.channel.followers}}
          </span>
        </div>
        <div class="d-flex pl-3 mb-3">
          <span id="channel-created" class="text-muted">
            <i class="far fa-calendar pr-1"></i>
            On Twitch since: {{editedStreams.channel_created_at}}
          </span>
        </div>
      </div>
    </div>
    <div class="row justify-content-xl-center justify-content-md-start">
      <div id="description" class="pl-5 pt-xl-4 pt-md-0 ml-md-3 ml-3">
        <span class="text-white">Description:</span>
        <p class="text-muted pt-3 mb-5 pb-5 mr-5">{{this.stream.channel.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StreamInfo",
  data() {
    return {
      id: this.$route.params.id,
      stream: ''
    };
  },
  computed: {
    editedStreams() {
      let channel_created_at = this.stream.channel.created_at.slice(0, 10);
      let stream_created_at = this.stream.created_at.slice(0, 10);
      return { ...this.stream, channel_created_at, stream_created_at};
    }
  },
  methods: {
    async getStream() {
      try {
        const response = await axios.get(
          `https://api.twitch.tv/kraken/streams/${this.id}`,
          {
            headers: {
              "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
              Accept: "application/vnd.twitchtv.v5+json"
            }
          }
        );
        this.stream = await response.data.stream;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getStream();
  }
};
</script>

<style>
#single-stream-content {
  background-color: #2d3748;
}
#green-line {
  font-size: 25px;
}
#app {
  background-color: #2d3748 !important;
}
</style>