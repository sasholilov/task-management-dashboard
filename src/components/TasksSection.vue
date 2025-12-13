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
  background-color: $background;
  border-radius: $border-radius;
  padding: 2rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}
</style>
