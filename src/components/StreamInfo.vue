<template>
  <div id="single-stream-content" class="container-fluid">
    <h2
      id="stream-title"
      class="text-white justify-content-center m-auto pl-5 row pb-md-4"
    >{{this.stream.channel.status}}</h2>
    <div class="row">
      <div id="stream-thumbnail" class="embed-responsive embed-responsive-16by9 mb-xl-5 mr-5 mt-xl-5 ml-md-5 mt-md-0 ml-5 ml-xl-5 mb-md-5">
        <iframe class="embed-responsive-item"
          :src="'https://player.twitch.tv/?channel=' + this.stream.channel.display_name"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div id="stream-info" class="pl-5 pt-5 col-xl-3 col-lg-4 pt-md-0 mb-xl-5 align-self-center">
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
          <i @click="addToFav(stream.channel.status, stream.channel._id, stream.preview.medium, type)" class="far fa-star pl-2 pt-1 text-white mr-2"></i>
          <span id="add-to-fav" class="text-muted">Add to favourites
          </span>
        </div>
      </div>
      <div id="streamer-info" class="pl-5 pt-lg-0 col-lg-4 pb-xl-5 pb-md-3 pt-md-0 mb-xl-5">
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
      <div class="row justify-content-xl-center justify-content-md-start">
      <div id="description" class="pl-5 pt-xl-4 pt-md-0 pt-3 ml-md-4 ml-4">
        <span class="text-white">Description:</span>
        <p class="text-muted pt-3 mb-5 pb-5 mr-5">{{this.stream.channel.description}}</p>
      </div>
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
      stream: "",
      type: "streams"
    };
  },
  computed: {
    editedStreams() {
      let channel_created_at = this.stream.channel.created_at.slice(0, 10);
      let stream_created_at = this.stream.created_at.slice(0, 10);
      return { ...this.stream, channel_created_at, stream_created_at };
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
    },
    addToFav(name, id, img, type){
      this.$store.dispatch('addToFavourites', {
        name: name,
        id: id,
        img: img,
        type: this.type
      })
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