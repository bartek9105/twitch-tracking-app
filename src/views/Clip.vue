<template>
    <div id="clip-page-container">
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
    #clip-page-container {
        position: relative;
        margin: 0;
        padding-bottom: 6rem;
        min-height: 100vh;
    }
</style>