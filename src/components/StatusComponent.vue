<template>
  <div class="status-component">
    <h4 class="status-title" :class="statusClasses">
      {{ props.status }}
      <span v-if="!store.searchQuery">({{ count }})</span>
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
const statusClasses = props.status.split(" ").join("-");
const store = useTasksStore();
const count = computed(() => store.getTasksCountByStatus(props.status));
</script>

<style scoped lang="scss">
.status-title {
  font-size: 1rem;
  text-transform: capitalize;
  &.to-do {
    color: $secondary;
  }
  &.in-progress {
    color: $primary;
  }
  &.done {
    color: $success;
  }
  span {
    font-weight: normal;
    color: $text-color-muted;
  }
}
</style>
