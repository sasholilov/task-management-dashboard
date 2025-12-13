<template>
  <div>
    <Header />
    <TasksSection />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import TasksSection from "../components/TasksSection.vue";
import { onMounted } from "vue";
import { useTasksStore } from "../store/tasksStore.ts";

const store = useTasksStore();

onMounted(() => {
  store.fetchTasks();
});
</script>

<style scoped></style>
