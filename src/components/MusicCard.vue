

<template>
    <div class="music__card">
      <img :src="song.imageUrl"/>
      <div class="music__card-content">
        <h4> {{ song.name }}</h4>
        <p> {{ song.artist }}</p>
      </div>

    </div>

</template>


<style scoped>

.music__card {
    display: flex;
    width: 280px;
    flex-direction: column;
    padding: 10px;
    border-radius: 8px;
}

.music__card img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    aspect-ratio: square;
    border-radius: 8px;
}

.music__card-content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
}

.music__card-content h4, p {
    margin: 0;
    padding-top: 0.1rem;
}

.music__card-content p{
    font-size: 1rem;
    color: #FFFFFF85;

}


</style>

<script>

export default {
  name: 'MusicCard',
  props: {
    song: {
      type: Object, 
      required: true 
    }
  }
}
</script>

