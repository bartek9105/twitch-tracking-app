<template>
    <div id="game-page-container">
        <Navbar />
        <Header>
            <template v-slot:header>Clip overview</template>
            <template v-slot:para>All informations about the clip</template>
        </Header>
        <ClipInfo/>
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ClipInfo from "@/components/ClipInfo";
import Footer from "@/components/Footer";

export default {
    components:{
        Navbar,
        Header,
        ClipInfo,
        Footer
    }
}
</script>

<style>

</style>