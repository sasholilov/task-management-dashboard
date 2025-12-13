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
import { computed } from "vue";
import { useTasksStore } from "../store/tasksStore";
import type { Task } from "./types";

const store = useTasksStore();
const props = defineProps<{
  id: number;
}>();
const task = computed<Task | undefined>(() => store.getTaskById(props.id));
console.log("Task Details ID:", props.id);
console.log("Task Details Data:", task.value);
</script>

<style scoped></style>
