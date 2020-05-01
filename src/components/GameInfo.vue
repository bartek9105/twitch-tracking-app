<template>
  <div id="game-info" class="mt-5">
    <div class="container-fluid mt-5">
      <div class="row">
          <div class="col-lg-5 offset-lg-2 col-md-6 offset-md-1 col-sm-6 offset-sm-1 col-12 m-auto">
            <img :src="game[0].box.large" alt="game-thumbnail" class="h-100 w-75 ml-4">
          </div>
          <div class="col-lg-5 col-md-5 col-sm-5 col-10 offset-xs-2 h-100 w-75 mt-3 ml-4">
            <h2 class="text-white mb-3">{{ game[0].name }}</h2>
            <span id="add-to-fav" class="text-muted">Add to favourite</span>
            <i class="far fa-star text-white pl-2 pt-1" @click="addToFav(game[0].name, game[0]._id, game[0].box.large, type)"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GameInfo",
  data() {
    return {
      gameName: this.$route.params.gameName,
      game: '',
      type: 'games'
    };
  },
  methods: {
    async getGame() {
      try {
        const response = await axios.get(
          `https://api.twitch.tv/kraken/search/games?query=${this.gameName}`,
          {
            headers: {
              "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
              Accept: "application/vnd.twitchtv.v5+json"
            }
          }
        );
        this.game = await response.data.games
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
    this.getGame();
  }
};
</script>

<style>
  #game-info{
    background-color: #2d3748;
  }
</style>