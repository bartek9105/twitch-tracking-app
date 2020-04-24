<template>
  <div id="top-streams">
    <p id="top-streams-header" class="ml-4 pt-3">| Top streams</p>
    <div class="ml-3 row row-cols-1 row-cols-md-4">
      <template v-for="stream in splicedStreams">
        <div class="col mb-4" :key="stream.id">
          <div class="card border-0 h-100">
            <img :src="stream.preview.medium" class="card-img-top" alt="stream-thumbnail" />
            <div class="card-body">
              <div class="d-sm-flex h-45">
                <span id="green-line" class="pr-1">|</span>
                <h5 class="card-title text-white pt-2">{{ stream.slicedStatus }}</h5>
              </div>
              <div class="d-sm-inline-flex">
                <img
                  src="../assets/user-alt-solid.svg"
                  class="human-vector pr-1 pl-2"
                  alt="streamer-icon"
                />
                <p class="streamer-name text-muted pt-3">{{ stream.channel.display_name }}</p>
              </div>

              <div class="d-sm-inline-flex">
                <img
                  src="../assets/chart-line-solid.svg"
                  class="chart-vector pr-1 pl-2"
                  alt="chart-icon"
                />
                <p class="stream-viewer-count text-muted pt-3">{{ stream.viewers }}</p>
              </div>
              <div class="d-sm-flex pl-2">
                <span id="add-to-fav" class="text-muted">Dodaj do ulubionych</span>
                <img src="../assets/star-solid.svg" class="star-vector pl-2" alt="star-icon" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="row justify-content-center">
      <button
        class="btn btn-info mt-5 mb-5 rounded-pill px-5 shadow"
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
        this.streams = response.data.streams.map(stream => {
          if (stream.channel.status.length > 50) {
            let slicedStatus = stream.channel.status.slice(0, 50) + "...";
            return { ...stream, slicedStatus };
          }
          else {
              let slicedStatus = stream.channel.status
            return { ...stream, slicedStatus };
          }
          
        });
      } catch (error) {
        console.log(error);
      }
    },
    loadMore() {
      this.streamsShown *= 2;
    }
    // setThumbnailSize() {

    // }
  },
  mounted() {
    this.getTopStreams();
    // this.setThumbnailSize();
  }
};
</script>

<style>
#top-streams-header {
  color: #38b2ac;
  font-size: 23px;
}
.card {
  width: 18rem;
}
.card-body {
  background-color: #1a202c;
}
#top-streams {
  background-color: #2d3748;
}
#green-line {
  font-size: 30px;
  color: #38b2ac;
}
.card-title {
  font-size: 15px;
}
</style>