<template>
  <div class="task-card-list">
    <TaskCard :tasksToDisplay="tasks" />
  </div>
</template>

<script setup lang="ts">
import TaskCard from "./TaskCard.vue";
import { mockTasks } from "../mockData.ts";

const props = defineProps<{
  status?: string;
}>();

const tasks = mockTasks.filter((task: any) =>
  props.status ? task.status.toLowerCase() === props.status.toLowerCase() : true
);
</script>

<style scoped lang="scss">
.task-card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
