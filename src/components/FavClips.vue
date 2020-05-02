<template>
    <div id="fav-clips">
        <p v-if="getClips.length > 0" id="fav-clips-header" class="text-info ml-4 pt-3">| Favourite clips</p>
        <div class="container-fluid">
            <div class="row pb-5">
                <template>
                  <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" v-for="clip in getClips" :key="clip.id">
                        <div class="card border-0 h-100 w-100">
                            <router-link :to="{name: 'Clip', params:{slug: clip.id}}">
                                <img :src="clip.img" class="card-img-top img-fluid" alt="clip-thumbnail" />
                            </router-link>
                            <div class="card-body">
                              <div class="d-sm-flex h-45">
                                  <h5 class="card-title text-white pt-1 text-truncate"><span id="green-line" class="pr-1">|</span>{{ clip.name }}</h5>
                              </div>

                              <div class="d-sm-flex">
                                <span id="add-to-fav" class="text-muted">Remove</span>
                                <i class="fa fa-trash text-white pl-2 pt-1" style="cursor:pointer;" @click="removeFav(clip.id)"></i>
                              </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="row mt-5"></div>
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
      getClips() {
          return Object.values(this.$store.getters.favourites).filter(item => {
              return item.type == 'clips'
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
    #fav-clips-header {
      font-size: 23px;
    }
    #fav-clips {
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