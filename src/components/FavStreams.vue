<template>
    <div id="fav-streams">
        <p v-if="getStreams.length > 0" id="fav-streams-header" class="text-info ml-4 pt-3">| Favourite streams</p>
        <div class="container-fluid">
            <div class="row">
                <template>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" v-for="stream in getStreams" :key="stream.id">
                        <div class="card border-0 h-100 w-100">
                            <router-link :to="{name: 'Stream', params:{id: stream.id}}">
                                <img :src="stream.img" class="card-img-top img-fluid" alt="game-thumbnail" />
                            </router-link>
                            <div class="card-body">
                              <div class="d-sm-flex h-45">
                                  <h5 class="card-title text-white pt-1 text-truncate"><span id="green-line" class="pr-1">|</span>{{ stream.name }}</h5>
                              </div>

                              <div class="d-sm-flex">
                                <span id="add-to-fav" class="text-muted">Remove</span>
                                <i class="fa fa-trash text-white pl-2 pt-1" style="cursor:pointer;" @click="removeFav(stream.id)"></i>
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
import Header from './Header'
import { mapGetters } from 'vuex'

export default {
    components: {
        Header
    },
    computed: {
        getStreams() {
            return Object.values(this.$store.getters.favourites).filter(item => {
                return item.type == 'streams'
            })
        }
    },
    methods: {
        removeFav(id) {
            this.$store.dispatch('removeFavourite', id)
        }
    }
}
</script>

<style>
    #fav-streams-header {
      font-size: 23px;
    }
    #fav-streams {
        background-color: #2d3748;
    }
    .card {
      width: 18rem;
    }
    .card-body {
      background-color: #1a202c;
    }
    .card-title {
      font-size: 15px;
    }
</style>