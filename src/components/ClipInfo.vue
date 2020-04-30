<template>
    <div id="clip-info" class="mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="embed-responsive embed-responsive-21by9">
                    <iframe :src="clip.embed_url" class="embed-responsive-item" frameborder='0' scrolling='no' allowfullscreen='true'></iframe>
                </div>
                <div class="col-lg-11 offset-lg-1 col-md-11 offset-md-1 col-sm-11 offset-sm-1 col-11 offset-xs-1 mt-5 mb-5">
                    <h2 class="text-white">{{ clip.title }}</h2>
                    <div class="mt-3">
                        <span id="clip-created" class="text-muted">
                            <i class="far fa-calendar pr-1"></i>
                            Clip created at: {{ editedClips.clip_created_at }}
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
                    <div class="text-white">
                        <span id="add-to-fav" class="text-muted">Add to favourite</span>
                        <i class="far fa-star text-white pl-2 pt-1" @click="addToFav(clip.title, clip.tracking_id, clip.thumbnails.medium, type)"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ClipInfo',
    data(){
        return{
            clipSlug: this.$route.params.slug,
            clip: '',
            type: 'clips'
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
        this.getClip();
    }
}
</script>

<style>
    #clip-info{
        background-color: #2d3748;
    }
</style>