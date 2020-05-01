<template>
    <div>
        <Header>
            <template v-slot:header>Favourite streams</template>
        </Header>
        <div class="container text-white">
            <div class="text-white" v-for="el in getStreams" :key="el.id">
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
        getStreams() {
            console.log(typeof this.$store.getters.favourites)
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

</style>