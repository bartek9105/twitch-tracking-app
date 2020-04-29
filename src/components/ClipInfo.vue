<template>
    <div id="clip-info" class="mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-12 m-auto">
                    <img :src="clip.thumbnails.medium" alt="clip-thumbnail" class="h-100 w-100">
                </div>
                <div class="col-lg-11 offset-lg-1 col-md-11 offset-md-1 col-sm-11 offset-sm-1 col-11 offset-xs-1 mt-5 mb-5">
                    <h2 class="text-white">{{ clip.title }}</h2>
                    <div class="mt-3">
                        <span id="clip-created" class="text-muted">
                            <i class="far fa-calendar pr-1"></i>
                            {{ editedClips.clip_created_at }}
                        </span>
                    </div>
                    <div class="mt-3">
                        <span class="text-muted">
                            <i class="fas fa-user text-muted pr-1"></i>
                            {{clip.curator.name}}
                        </span>
                    </div>
                    <div class="mt-3 mb-5">
                        <span class="text-muted">
                            <i class="fas fa-chart-area pr-1"></i>
                            {{ clip.views }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'gameInfo',
    data(){
        return{
            clipSlug: this.$route.params.slug,
            clip: ''
        };
    },
    computed: {
        editedClips() {
            let clip_created_at = this.clip.created_at.slice(0, 10);
            return { ...this.stream, clip_created_at};
        }
    },
    methods: {
        async getClip() {
        try {
            const response = await axios.get(
            `https://api.twitch.tv/kraken/clips/${this.clipSlug}`,
            {
                headers: {
                    "Client-ID": "2c6c0j18xxty4mx9e43pn1p5s210u9",
                    Accept: "application/vnd.twitchtv.v5+json"
                }
            }
            );
            this.clip = await response.data
            console.log(this.clip)
        } catch (error) {
            console.log(error);
        }
        }
    },
    mounted() {
        this.getClip();
    }
}
</script>

<style>
    #clip-info{
        background-color: #2d3748;
    }
</style>