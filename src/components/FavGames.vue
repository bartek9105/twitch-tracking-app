<template>
    <div>
        <Header>
            <template v-slot:header>Favourite games</template>
        </Header>
        <div class="container text-white">
            <div class="text-white" v-for="(el, index) in favouriteGames" :key="el.id">
                <h4>{{el.name}}</h4>
                <img :src="el.img">
                <button @click="removeFav(el.id)">Remove</button>
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
      ...mapGetters(["favouriteGames"])
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