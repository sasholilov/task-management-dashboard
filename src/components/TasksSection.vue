<template>
  <div class="tasks-section">
    <ToDo />
    <InProgress />
    <Done />
  </div>
</template>

<script setup lang="ts">
import ToDo from "./ToDo.vue";
import InProgress from "./InProgress.vue";
import Done from "./Done.vue";
</script>

<style scoped lang="scss">
.tasks-section {
  background-color: #f9f9f9;
  padding: 2rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}
</style>
