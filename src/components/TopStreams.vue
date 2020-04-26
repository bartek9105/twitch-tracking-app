<template>
  <div id="top-streams">
    <p id="top-streams-header" class="ml-4 pt-3">| Top streams</p>
    <div class="m-auto container-fluid">
      <div class="row ml-2">
      <template v-for="stream in splicedStreams">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-5" :key="stream._id">
          <router-link :to="'/stream/' + stream._id">
            <div class="card border-0">
              <img :src="stream.preview.medium" class="card-img-top" alt="stream-thumbnail" />
              <div class="card-body">
                <div class="d-sm-flex">
                  <h5 class="card-title text-white pt-1 text-truncate"><span id="green-line" class="pr-1">|</span>{{ stream.channel.status }}</h5>
                </div>
                <div class="d-sm-inline-flex">
                  <p class="streamer-name text-muted"><i class="fas fa-user pr-1 pl-2 pt-1 text-muted"></i>{{ stream.channel.display_name }}</p>
                </div>
                <div class="d-sm-inline-flex">
                  <p class="stream-viewer-count text-muted"><i class="fas fa-chart-line text-muted pr-1 pl-2 pt-1 "></i>{{ stream.viewers }}</p>
                </div>
                <div class="d-sm-flex pl-2">
                  <span id="add-to-fav" class="text-muted">Dodaj do ulubionych<i class="far fa-star text-white pl-2 pt-1"></i></span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
      </div>
    </div>
    <div class="row justify-content-center m-auto">
      <button v-if="streamsShown < this.streams.length"
        class="btn btn-info mb-5 rounded-pill px-5 shadow"
        @click="streamsShown += 4"
      >Load More</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "@/components/Button";

export default {
  name: "TopStreams",
  components: {
    Button
  },
  data() {
    return {
      streams: [],
      streamsShown: 4
    };
  },
  computed: {
    splicedStreams() {
      const splicedStreams = this.streams.slice(0, this.streamsShown);
      return splicedStreams;
    }
  },
  methods: {
    //TODO separate replacing size of thumbnails to another method
    async getTopStreams() {
      try {
        const response = await axios.get(
          "https://api.twitch.tv/kraken/streams/",
          {
            headers: {
              "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
              Accept: "application/vnd.twitchtv.v5+json"
            }
          }
        );
        this.streams = response.data.streams
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getTopStreams();
  }
};
</script>

<style>
#top-streams-header {
  color: #38b2ac;
  font-size: 23px;
}
.card {
  width: 18.5rem;
}
.card-body {
  background-color: #1a202c;
}
#top-streams {
  background-color: #2d3748;
}
#green-line {
  font-size: 20px;
  color: #38b2ac;
}
.card-title {
  font-size: 15px;
}
</style>