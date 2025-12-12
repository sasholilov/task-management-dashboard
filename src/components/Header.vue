<template>
  <div class="header">
    <h1 class="title">Tasks</h1>
    <SearchFilters />
    <button class="add-task-button"><span>+</span>Create Task</button>
  </div>
</template>

<script setup lang="ts">
import SearchFilters from "./SearchFilter.vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  .title {
    font-weight: 600;
  }
}
</style>
