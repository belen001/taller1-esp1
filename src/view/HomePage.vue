<script setup>
import NavBar from '../components/NavBar.vue';
import songs from '../assets/data/songs.json';
import artists from '../assets/data/artists.json';
import MusicCard from '../components/MusicCard.vue';
import ArtistCard from '../components/ArtistCard.vue';

</script>

<template>
    <NavBar />
    <div class="container">
        <main>

            <section class="home__explore-container">
                <div class="home__explore-title">
                    <h1>Explorar</h1>
                    <p> Descubre nueva música, estilos y artistas. </p>
                </div>

            </section>

            <!-- <section class="home__artist-list">
                <ArtistCard v-for="artist in artists" :key="artist.id" :artist="artist" />
            </section> -->
            <section class="home__music-grid">
                <MusicCard v-for="song in songs" :key="song.id" :song="song" />
            </section>


        </main>
    </div>

</template>


<style scoped>
.container {
    display: flex;
    align-items: flex-end;
    width: 100vw;
    height: 100%;
}

main {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-left: 23vw;
    overflow-y: auto;

}

.home__explore-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.home__explore-title {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    text-align: left;
}

.home__explore-title h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2vh;
    margin-bottom: 0;
}

.home__explore-title p {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 10px;
}

.home__music-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
}


.home__artist-list {
    display: flex;

    overflow-x: auto;

}
</style>
