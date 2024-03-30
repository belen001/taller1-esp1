<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArtistCard',
    props: {
        artist: {
            type: Object,
            required: true
        }
    }
});

</script>

<template>
    <div class="artist__card">
        <img :src="artist.imageUrl" alt="artist.name" />
        <div class="artist__card-content">
        </div>
    </div>

</template>



<style scoped>
.artist__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 400px;
    height: 250px;
    border-radius: 8px;
}

.artist__card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.artist__card-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0.5rem;
}
</style>