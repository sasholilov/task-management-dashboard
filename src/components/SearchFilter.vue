<template>
  <div class="search-filter-container">
    <Search />
    <Filter />
  </div>
</template>

<script setup lang="ts">
import Search from "./Search.vue";
import Filter from "./Filter.vue";
</script>

<style scoped lang="scss">
.search-filter-container {
  display: flex;
  gap: 3rem;
}
</style>
