<template>
    <div>
        <Header>
            <template v-slot:header>Favourite clips</template>
        </Header>
        <div class="container text-white">
                <div class="text-white" v-for="clip in getClips" :key="clip.id">
                    <h4>{{clip.name}}</h4>
                    <img :src="clip.img">
                    <button @click="removeFav(clip.id)">Remove</button>
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

</style>