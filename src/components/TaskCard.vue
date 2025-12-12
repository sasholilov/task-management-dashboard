<template>
  <div class="task-card" v-for="task in tasksToDisplay" :key="task.title">
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
    <p>{{ task.status }}</p>
    <p>{{ task.dueDate }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tasksToDisplay: Array<{
    title: string;
    description: string;
    status: string;
    dueDate: string;
  }>;
}>();
</script>

<style scoped lang="scss">
.task-card {
  border: 1px solid black;
}
</style>
