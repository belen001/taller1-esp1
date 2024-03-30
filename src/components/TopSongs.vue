<template>
  <div class="top-songs">
    <ul>
      <li v-for="song in songs" :key="song.id">
        {{ song.name }} - {{ song.duration }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['songs']
};
</script>
