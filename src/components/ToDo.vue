<template>
  <div class="to-do">
    <h4 class="status-title">To Do<span>(1)</span></h4>
    <div class="tasks-wrapper">
      <TaskCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from "./TaskCard.vue";
</script>

<style scoped lang="scss">
.tasks-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
