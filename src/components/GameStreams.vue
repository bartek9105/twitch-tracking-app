<template>
    <div id="top-game-streams">
        <p id="top-streams-header" class="ml-4 pt-5">| Top streams for  {{ this.gameName }}</p>
        <div class="container-fluid">
            <div class="row">
                <template v-for="stream in splicedStreams">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-5 pb-5" :key="stream._id">
                        <div class="card border-0 h-100 w-100">
                            <router-link :to="{name: 'Stream', params: {id: stream.channel._id, stream: stream}}">
                                <img :src="stream.preview.large" class="card-img-top img-fluid" alt="stream-thumbnail" />
                            </router-link>
                            <div class="card-body">
                            <div class="d-sm-flex h-45">
                                    <h5 class="card-title text-white pt-1 text-truncate"><span id="green-line" class="pr-1">|</span>{{ stream.channel.status }}</h5>
                            </div>
                            
                            <div class="d-sm-flex">
                                <p class="streamer-name text-muted"><i class="fas fa-user pr-1 pl-2 pt-1 text-muted"></i>{{ stream.channel.display_name }}</p>
                            </div>
                            <div class="d-sm-flex">
                                <p class="stream-viewer-count text-muted"><i class="fas fa-chart-line text-muted pr-1 pl-2 pt-1 "></i>{{ stream.viewers }}</p>
                            </div>
                            <div class="d-sm-flex pl-2">
                            <span id="add-to-fav" class="text-muted">Add to favourites
                            </span>
                            <i @click="addToFav(stream.channel.status, stream.channel._id, stream.preview.medium)" class="far fa-star pl-2 pt-1"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";


export default {
    name: 'GameStreams',
    data() {
        return {
            streams: [],
            gameName: this.$route.params.gameName,
            streamsShown: 4
        };
    },
    computed: {
        splicedStreams() {
            const splicedStreams= this.streams.slice(0, this.streamsShown);
            return splicedStreams;
        }
    },
    methods: {
            async getStreams() {
            try {
                const response = await axios.get(
                `https://api.twitch.tv/kraken/search/streams?query=${this.gameName}`,
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
        this.getStreams();
    }
}
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
    #top-game-streams {
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