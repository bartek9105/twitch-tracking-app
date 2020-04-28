<template>
    <div id="top-games">
        <p id="top-games-header" class="ml-4 pt-3">| Top games</p>
        <div class="container-fluid">
            <div class="row ml-5">
                <template v-for="game in splicedGames">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" :key="game.game.id">
                        <div class="card border-0 h-100 w-75">
                            <img :src="game.game.box.large" class="card-img-top img-fluid" alt="game-thumbnail" />
                            <div class="card-body">
                            <div class="d-sm-flex h-45">
                                <h5 class="card-title text-white pt-1 text-truncate"><span id="green-line" class="pr-1">|</span>{{ game.game.name }}</h5>
                            </div>

                            <div class="d-sm-flex pl-2">
                                <span id="add-to-fav" class="text-muted">Add to favourite</span>
                                <i class="far fa-star text-white pl-2 pt-1" @click="addToFav(game.game.name)"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="row justify-content-center">
            <button
                class="btn btn-info mt-5 mb-5 rounded-pill px-5 shadow m-auto"
                @click="gamesShown += 4" v-if="gamesShown < this.topGames.length"
            >Load More</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Button from "@/components/Button";

    export default {
    name: "TopGames",
    components: {
        Button
    },
    data() {
        return {
        topGames: [],
        gamesShown: 4
        };
    },
    computed: {
        splicedGames() {
        const splicedGames = this.topGames.slice(0, this.gamesShown);
        return splicedGames;
        }
    },
    methods: {
        //TODO separate replacing size of thumbnails to another method
        async getTopGames() {
            try {
                const response = await axios.get(
                "https://api.twitch.tv/kraken/games/top",
                    {
                        headers: {
                        "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
                        Accept: "application/vnd.twitchtv.v5+json"
                        }
                    }
                );
                this.topGames = response.data.top
            } catch (error) {
                console.log(error);
            }
        },
        addToFav(name){
            this.$store.dispatch('addToFavourites', {
                name: name
            })
        }
    },
    mounted() {
        this.getTopGames();
        // this.setThumbnailSize();
    }
    };
</script>

<style>
    #top-games-header {
    color: #38b2ac;
    font-size: 23px;
    }
    .card {
    width: 18rem;
    }
    .card-body {
    background-color: #1a202c;
    }
    #top-games {
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