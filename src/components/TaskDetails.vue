<template>
  <div>
    <h1>Task Details</h1>
    <p>{{ task?.title }}</p>
    <p>{{ task?.description }}</p>
    <p>{{ task?.status }}</p>
    <p>{{ task?.dueDate }}</p>
  </div>
</template>

<script setup lang="ts">
import { mockTasks } from "../mockData.ts";
const props = defineProps<{
  id: number;
}>();
const task = mockTasks.find((t) => t.id === +props.id);
</script>

<style scoped></style>
