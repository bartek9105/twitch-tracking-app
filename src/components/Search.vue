<template>
  <div class="w-100 p-3" id="search-component">
    <div class="text-white text-center mt-5 mb-3">
      <div class="d-flex justify-content-center">
        <h5 class="mb-5 pt-1">Search for:</h5>
        <div class="pl-2 dropdown">
          <button
            class="btn btn-info dropdown-toggle"
            type="button"
            id="search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{itemName}}</button>
          <div class="dropdown-menu" aria-labelledby="search-dropdown">
            <a href="#" @click="setItemName('Game')" class="dropdown-item">Game</a>
            <a href="#" @click="setItemName('Stream')" class="dropdown-item">Stream</a>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-md-4">
            <form class="form-container">
              <div class="form-group">
                <input
                  v-model="input"
                  type="email"
                  class="form-control"
                  placeholder="Enter a phrase"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <button class="btn btn-info rounded-pill mb-5 mt-5 px-5 shadow" @click="search()">Search</button>
    </div>
    <div id="found-items">
        <div id="found-games" v-if="found.games">
        <div id="games" class="container-fluid">
          <div class="row justify-content-center ml-5">
            <template v-for="game in found.games.slice(0,this.itemShown)">
              <div class="mb-4" :key="game.id">
                <div class="card border-0 w-75">
                  <router-link :to="{name: 'Game', params: {gameName: game.name}}">
                    <img :src="game.box.large" class="img-fluid" alt="game-thumbnail" />
                    <div class="search card-body pl-0">
                      <div class="d-flex">
                        <h5 class="card-title text-white text-truncate">
                          <span id="green-line" class="pr-1 pl-2">|</span>
                          {{ game.name }}
                        </h5>
                      </div>
                      <div class="d-flex pl-2">
                        <span id="add-to-fav" class="text-muted">Add to favourite</span>
                        <i class="far fa-star text-white pl-1 pt-1"></i>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="row justify-content-center mb-2">
          <button
            @click="itemShown+=4"
            class="btn btn-info mt-5 mb-5 rounded-pill px-5 shadow m-auto"
            v-if="found.games.length > 4 && itemName == 'Game'"
          >Load More</button>
        </div>
      </div>
      <div id="found-streams" v-if="found.streams">
        <div id="streams" class="container-fluid">
          <div class="row justify-content-center">
            <template v-for="stream in found.streams.slice(0, this.itemShown)">
              <div class="col-lg-4 col-md-6 col-sm-6 mb-5" :key="stream.id">
                <div class="card border-0 h-100 w-100">
                  <router-link
                    :to="{name: 'Stream', params: {id: stream.channel._id, stream: stream}}"
                  >
                    <img :src="stream.preview.medium" class="card-img-top" alt="stream-thumbnail" />
                    <div class="search card-body">
                      <div class="d-flex">
                        <h5 class="card-title text-white pt-1 text-truncate">
                          <span id="green-line" class="pr-1">|</span>
                          {{ stream.channel.status }}
                        </h5>
                      </div>
                      <div class="d-sm-flex">
                        <p class="streamer-name text-muted">
                          <i class="fas fa-user pr-1 pl-2 pt-1 text-muted"></i>
                          {{ stream.channel.display_name }}
                        </p>
                      </div>
                      <div class="d-sm-flex">
                        <p class="stream-viewer-count text-muted">
                          <i class="fas fa-chart-line text-muted pr-1 pl-2 pt-1"></i>
                          {{ stream.viewers }}
                        </p>
                      </div>
                      <div class="d-sm-flex pl-2">
                        <span id="add-to-fav" class="text-muted">
                          Add to favourites
                          <i class="far fa-star text-white pl-2 pt-1"></i>
                        </span>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="row justify-content-center mb-2">
          <button
            @click="itemShown+=4"
            class="btn btn-info mt-5 mb-5 rounded-pill px-5 shadow m-auto"
            v-if="found.streams.length > 4 && itemName == 'Stream'"
          >Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import axios from "axios";

export default {
  name: "Search",
  components: {
    Button
  },
  data() {
    return {
      input: "",
      found: [],
      itemName: "Choose",
      queryType: "",
      itemShown: 4
    };
  },
  methods: {
    setItemName(itemName) {
      this.itemName = itemName;
      this.queryType = itemName.toLowerCase() + "s";
    },
    async search() {
      try {
        if (this.queryType != "") {
          const response = await axios.get(
            `https://api.twitch.tv/kraken/search/${this.queryType}?query=${this.input}`,
            {
              headers: {
                "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
                Accept: "application/vnd.twitchtv.v5+json"
              }
            }
          );
          this.found = await response.data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {}
};
</script>

<style>
#search-component {
  background-color: #1a202c;
  background-image: url(../assets/tic-tac-toe.svg);
}
.form-group input {
  border-radius: 25px;
  background-color: #edf2f7;
}
.search.card-body {
  background-color: #2d3748 !important;
}
</style>