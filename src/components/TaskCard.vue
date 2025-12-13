<template>
  <div
    v-for="task in tasksToDisplay"
    :key="task.title"
    class="task-card"
    @click="handleOnClick(task.id)"
  >
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
    <p>{{ task.status }}</p>
    <p>{{ task.dueDate }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
defineProps<{
  tasksToDisplay: Array<{
    title: string;
    description: string;
    status: string;
    dueDate: string;
    id: number;
  }>;
}>();

function handleOnClick(id: number) {
  router.push({ name: "TaskDetails", params: { id } });
}
</script>

<style scoped lang="scss">
.task-card {
  border: 1px solid black;
}
</style>
