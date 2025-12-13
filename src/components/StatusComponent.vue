<template>
  <div class="to-do">
    <h4 class="status-title">
      {{ props.status }}
      <span>({{ count }})</span>
    </h4>
    <div class="tasks-wrapper">
      <TaskCardList :status="props.status" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TaskCardList from "./TaskCardList.vue";
import { useTasksStore } from "../store/tasksStore";

const props = defineProps<{
  status: string;
}>();
const store = useTasksStore();
const count = computed(() => store.getTasksByStatus(props.status).length);
</script>

<style scoped lang="scss"></style>
