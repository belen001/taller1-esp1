<script setup>
import { ref, watch } from 'vue';
import NavBar from '../../components/NavBar.vue';
import SearchBar from '../../components/SearchBar.vue';
import TopSongs from '../../components/TopSongs.vue';
import songsData from '../../assets/data/songs.json';

const searchTerm = ref('');
const hasSearched = ref(false);
const filteredSongs = ref([]);

const handleSearch = (newSearchTerm) => {
  searchTerm.value = newSearchTerm;
  hasSearched.value = true;
  filterResults();
};

const filterResults = () => {
  if (searchTerm.value) {
    filteredSongs.value = songsData.filter(song =>
        song.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    filteredSongs.value = [];
  }
};

</script>

<template>
  <NavBar />
  <main class="container">
    <SearchBar @onSearch="handleSearch" />
    <TopSongs v-if="hasSearched" :songs="filteredSongs" />
    <div class="h1">Pruebas</div>
  </main>
</template>

<style scoped>

</style>
