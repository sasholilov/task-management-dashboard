<template>
  <div class="to-do">
    <h4 class="status-title">
      To Do
      <span>({{ count }})</span>
    </h4>
    <div class="tasks-wrapper">
      <TaskCardList status="to do" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TaskCardList from "./TaskCardList.vue";
import { useTasksStore } from "../store/tasksStore";
const store = useTasksStore();
const count = computed(() => store.getTasksByStatus("to do").length);
</script>

<style scoped lang="scss"></style>
