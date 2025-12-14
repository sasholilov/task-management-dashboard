<template>
  <div
    class="task-card-list"
    role="region"
    :aria-label="
      props.status ? `Task list filtered by ${props.status}` : 'Task list'
    "
  >
    <TaskCard :tasks-to-display="filteredTasks" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TaskCard from "./TaskCard.vue";
import { useTasksStore } from "../store/tasksStore.ts";

const store = useTasksStore();

const props = defineProps<{
  status?: string;
}>();

const filteredTasks = computed(() => {
  return store.getFilteredTasks(props.status || "");
});
</script>

<style scoped lang="scss">
.task-card-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
