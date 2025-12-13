<template>
  <div class="tasks-section">
    <StatusComponent status="to do" />
    <StatusComponent status="in progress" />
    <StatusComponent status="done" />
  </div>
</template>

<script setup lang="ts">
import StatusComponent from "./StatusComponent.vue";
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
