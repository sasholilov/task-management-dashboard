<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTasksStore } from "./store/tasksStore.ts";

const store = useTasksStore();

onMounted(() => {
  store.fetchTasks();
});
</script>
<style lang="scss" scoped>
.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
