<template>
    <div id="top-clips">
        <p id="top-clips-header" class="ml-4 pt-3">| Top clips</p>
        <div class="container-fluid">
            <div class="row">
                <template v-for="clip in splicedClips">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" :key="clip.tracking_id">
                        <div class="card border-0 h-100 w-100">
                            <img :src="clip.thumbnails.medium" class="card-img-top img-fluid" alt="clip-thumbnail" />
                            <div class="card-body">
                            <div class="d-sm-flex h-45">                           
                                <h5 class="card-title text-white pt-1 text-truncate"><span id="green-line" class="pr-1">|</span>{{ clip.title }}</h5>
                            </div>
                            <div class="d-sm-inline-flex">
                                <i class="fas fa-user pr-1 pl-2 pt-1 text-muted"></i>
                                <p class="streamer-name text-muted">{{ clip.curator.name }}</p>
                            </div>
                            <div class="d-sm-inline-flex">
                                <i class="fas fa-chart-line text-muted pr-1 pl-2 pt-1 "></i>
                                <p class="stream-viewer-count text-muted">{{ clip.views }}</p>
                            </div>

                            <div class="d-sm-flex pl-2">
                                <span id="add-to-fav" class="text-muted">Add to favourite</span>
                                <i class="far fa-star text-white pl-2 pt-1" @click="addToFav(clip.title)"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="row justify-content-center mb-5">
            <button
                class="btn btn-info mt-5 mb-5 rounded-pill px-5 shadow"
                @click="clipsShown += 4" v-if="clipsShown < this.topClips.length"
            >Load More</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Button from "@/components/Button";

    export default {
    name: "TopClips",
    components: {
        Button
    },
    data() {
        return {
        topClips: [],
        clipsShown: 4
        };
    },
    computed: {
        splicedClips() {
        const splicedClips = this.topClips.slice(0, this.clipsShown);
        return splicedClips;
        }
    },
    methods: {
        //TODO separate replacing size of thumbnails to another method
        async getTopClips() {
            try {
                const response = await axios.get(
                "https://api.twitch.tv/kraken/clips/top",
                    {
                        headers: {
                        "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
                        Accept: "application/vnd.twitchtv.v5+json"
                        }
                    }
                )
                this.topClips = response.data.clips
                console.log(this.topClips[9])
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
        this.getTopClips();
        // this.setThumbnailSize();
    }
    };
</script>

<style>
    #top-clips-header {
    color: #38b2ac;
    font-size: 23px;
    }
    .card {
    width: 18rem;
    }
    .card-body {
    background-color: #1a202c;
    }
    #top-clips {
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