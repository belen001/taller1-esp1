<template>
  <input type="text" v-model="searchQuery" @input="onSearch" placeholder="Buscar canciones, artistas...">
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.searchQuery);
    }
  }
};
</script>
