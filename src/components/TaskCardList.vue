<template>
  <div class="task-card-list">
    <TaskCard :tasks-to-display="tasks" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TaskCard from "./TaskCard.vue";
import { useTasksStore } from "../store/tasksStore.ts";
import type { Task } from "./types.ts";

const store = useTasksStore();

const props = defineProps<{
  status?: string;
}>();

const tasks = computed(() =>
  store.tasks.filter((task: Task) =>
    props.status
      ? task.status.toLowerCase() === props.status.toLowerCase()
      : true
  )
);
</script>

<style scoped lang="scss">
.task-card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
